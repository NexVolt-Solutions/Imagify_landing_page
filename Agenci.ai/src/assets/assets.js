// Import images with descriptive variable names for better SEO context
import logo from './logo.svg'
import mobileMockup from './mobile_mockup.png'
import googlePlayBadge from './google_play_badge.png'
import appStoreBadge from './app_store_badge.png'
import iPhone16Teal from './iPhone16_Teal.png'
import chooseColor from './choose_color.png'
import downloadIcon from './download.png'
import smartAI from './smart_ai.png'
import ideasIcon from './ideas.png'
import figmaLogo from './figma.png'
import flutterLogo from './flutter.png'
import fastApiLogo from './fast_api.png'
import reactJsLogo from './react_js.png'
import awsLogo from './aws.png'
import arrowIcon from './arrow_icon.svg'

/**
 * Assets object with SEO-friendly naming and metadata
 * This helps with image optimization and lazy loading
 */
const assets = {
  // Brand Assets
  logo: {
    src: logo,
    alt: 'Imagify AI - AI-powered wallpaper generator logo',
    width: 180,
    height: 'auto',
  },
  
  // Product Images
  mobileMockup: {
    src: mobileMockup,
    alt: 'Imagify AI mobile app interface showing wallpaper creation',
    width: 375,
    height: 812,
    loading: 'lazy',
  },
  
  // App Store Badges
  googlePlayBadge: {
    src: googlePlayBadge,
    alt: 'Download Imagify AI on Google Play Store',
    width: 135,
    height: 40,
    loading: 'eager',
  },
  appStoreBadge: {
    src: appStoreBadge,
    alt: 'Download Imagify AI on Apple App Store',
    width: 120,
    height: 40,
    loading: 'eager',
  },
  
  // Device Mockups
  iPhone16Teal: {
    src: iPhone16Teal,
    alt: 'iPhone 16 showing Imagify AI wallpaper customization',
    width: 390,
    height: 844,
    loading: 'lazy',
  },
  
  // Feature Icons
  chooseColor: {
    src: chooseColor,
    alt: 'Color customization feature icon',
    width: 64,
    height: 64,
    loading: 'lazy',
  },
  downloadIcon: {
    src: downloadIcon,
    alt: 'Download wallpaper icon',
    width: 64,
    height: 64,
    loading: 'lazy',
  },
  smartAI: {
    src: smartAI,
    alt: 'AI-powered wallpaper generation icon',
    width: 64,
    height: 64,
    loading: 'lazy',
  },
  ideasIcon: {
    src: ideasIcon,
    alt: 'Creative wallpaper ideas icon',
    width: 64,
    height: 64,
    loading: 'lazy',
  },
  
  // Technology Stack Logos
  figmaLogo: {
    src: figmaLogo,
    alt: 'Figma - Design tool used for Imagify AI',
    width: 80,
    height: 80,
    loading: 'lazy',
  },
  flutterLogo: {
    src: flutterLogo,
    alt: 'Flutter - Mobile framework for Imagify AI',
    width: 80,
    height: 80,
    loading: 'lazy',
  },
  reactJsLogo: {
    src: reactJsLogo,
    alt: 'React - Web framework for Imagify AI',
    width: 80,
    height: 80,
    loading: 'lazy',
  },
  fastApiLogo: {
    src: fastApiLogo,
    alt: 'FastAPI - Backend framework for Imagify AI',
    width: 80,
    height: 80,
    loading: 'lazy',
  },
  awsLogo: {
    src: awsLogo,
    alt: 'AWS - Cloud infrastructure for Imagify AI',
    width: 80,
    height: 80,
    loading: 'lazy',
  },
  
  // UI Elements
  arrowIcon: {
    src: arrowIcon,
    alt: 'Arrow navigation icon',
    width: 24,
    height: 24,
    'aria-hidden': true,
  },
}

/**
 * Helper function to get optimized image props
 * Usage: <img {...getImageProps('logo')} />
 */
export const getImageProps = (assetKey) => {
  const asset = assets[assetKey]
  if (!asset) {
    console.warn(`Asset "${assetKey}" not found`)
    return {}
  }
  
  return {
    src: asset.src,
    alt: asset.alt || '',
    width: asset.width,
    height: asset.height,
    loading: asset.loading || 'lazy',
    decoding: 'async',
    ...(asset['aria-hidden'] && { 'aria-hidden': 'true' }),
  }
}

/**
 * Preload critical images (above the fold)
 * Add to <head> for better LCP (Largest Contentful Paint)
 */
export const preloadImages = [
  'logo',
  'googlePlayBadge',
  'appStoreBadge',
]

/**
 * Image optimization metadata
 * Helps with Core Web Vitals and SEO
 */
export const imageOptimization = {
  formats: ['webp', 'avif', 'png'], // Preferred formats (smallest to largest)
  sizes: {
    mobile: '(max-width: 640px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)',
  },
  quality: {
    high: 90,
    medium: 75,
    low: 60,
  },
}

export default assets

// Uncomment when you have team data
// export const teamData = [
//   { 
//     name: 'Haley Carter', 
//     title: 'CEO & Founder', 
//     image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
//     alt: 'Haley Carter - CEO and Founder of Imagify AI'
//   },
//   { 
//     name: 'James Walker', 
//     title: 'Ads Manager', 
//     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
//     alt: 'James Walker - Ads Manager at Imagify AI'
//   },
//   // ... add alt text to all team members
// ]