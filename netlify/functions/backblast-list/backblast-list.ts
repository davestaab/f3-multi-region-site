import type { Handler } from '@netlify/functions'
import mysql, { type RowDataPacket } from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
})
const handler: Handler = async (event) => {
  try {
    // Read query parameters: page & pageSize
    const page = parseInt(event.queryStringParameters?.page || '1', 10)
    const pageSize = parseInt(event.queryStringParameters?.pageSize || '10', 10)

    const offset = (page - 1) * pageSize

    // Query for the paged results
    const [rows] = await pool.query(
      `
      SELECT 
        date, 
        ao, 
        q, 
        coq, 
        pax_count, 
        fng_count, 
        REPLACE(SUBSTRING_INDEX(backblast, '\n', 1), 'Backblast! ', '') AS title
      FROM backblast
      ORDER BY date DESC
      LIMIT ? OFFSET ?
      `,
      [pageSize, offset]
    )
    interface CountRow extends RowDataPacket {
      total: number
    }
    // Query for total count (for pagination metadata)
    const [countRows] = await pool.query<CountRow[]>(
      `SELECT COUNT(*) AS total FROM backblast`
    )
    const total = countRows[0]?.total ?? 0

    return {
      statusCode: 200,
      body: JSON.stringify({
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        results: rows
      }),
      headers: { 'Content-Type': 'application/json' }
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message })
    }
  }
}
export { handler }
