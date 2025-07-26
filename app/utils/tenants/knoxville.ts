import { AOs } from "./knoxville/aos";
import type { TenantConfig } from "./types"

const config: TenantConfig = {
  name: 'Knoxville',
  logo: '/logos/knoxville.png',
  headerImages: [
    '/images/cropped-139.jpeg',
    '/images/cropped-1500x500.jpg',
    '/images/cropped-9990.jpeg',
    '/images/cropped-9999.jpg',
    '/images/cropped-10000.jpeg',
    '/images/cropped-10061.jpeg',
    '/images/cropped-Asylumn-scaled-1.jpg',
    '/images/cropped-BOM2-scaled-1.jpg',
    '/images/cropped-BOMCircle-scaled-1.jpg',
    '/images/cropped-dauber-scaled-1.jpg',
    '/images/cropped-dogpound-scaled-1.jpg',
    '/images/cropped-everybody-scaled-1.jpg',
    '/images/cropped-HIMS-Copy-scaled-1.jpg',
    '/images/cropped-IMG_3723.jpg',
    '/images/cropped-juco-scaled-1.jpg',
    '/images/cropped-therun-scaled-2.jpg',
    '/images/cropped-tunneloflove-scaled-1.jpg',
    '/images/cropped-Volunteers-scaled-1.jpg',
  ],
  AOs,
}

export default config;