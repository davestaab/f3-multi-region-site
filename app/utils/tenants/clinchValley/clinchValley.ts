import { AOs } from "./aos";
import { LinkType, type TenantConfig } from "../types"

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
  Links: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/F3ClinchValley',
      type: LinkType.Social,
      icon: 'i-lucide-facebook',
    },
    {
      name: 'X',
      url: 'https://x.com/F3ClinchValley',
      type: LinkType.Social,
      icon: 'i-lucide-twitter',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/f3clinchvalley/',
      type: LinkType.Social,
      icon: 'i-lucide-instagram',
    },
  ]
}

export default config;