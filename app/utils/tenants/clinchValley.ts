import { AOs } from "./clinchValley/aos";
import type { TenantConfig } from "./types"

const config: TenantConfig = {
  name: 'Clinch Valley',
  logo: '/images/clinch-valley/clinch_valley_logo.png',
  AOs,
  headerImages: [
    '/images/clinch-valley/cv_launch_convergence_cropped.jpg',
    '/images/clinch-valley/cv_1_cropped.jpg',
    '/images/clinch-valley/cv_2_cropped.jpg',
    '/images/clinch-valley/cv_3_cropped.jpg',
  ],
}

export default config;