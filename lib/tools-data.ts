import type { LucideIcon } from 'lucide-react'
import {
  FileText,
  ImageIcon,
  Ruler,
  Calculator,
  DollarSign,
  HeartPulse,
  Code2,
  Search,
  Type,
  QrCode,
  Percent,
  Palette,
  Clock,
  KeyRound,
  Scale,
  TrendingUp,
} from 'lucide-react'

export type Category = {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  count: number
}

export type Tool = {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  category: string
  badge?: 'Popular' | 'New' | 'Trending'
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

export const categories: Category[] = [
  {
    slug: 'pdf-tools',
    name: 'PDF Tools',
    description: 'Merge, split, compress & convert PDFs',
    icon: FileText,
    count: 18,
  },
  {
    slug: 'image-tools',
    name: 'Image Tools',
    description: 'Resize, compress & convert images',
    icon: ImageIcon,
    count: 22,
  },
  {
    slug: 'converters',
    name: 'Unit Converters',
    description: 'Length, weight, temperature & more',
    icon: Ruler,
    count: 16,
  },
  {
    slug: 'calculators',
    name: 'Calculators',
    description: 'Everyday math made simple',
    icon: Calculator,
    count: 20,
  },
  {
    slug: 'finance',
    name: 'Finance',
    description: 'Loans, EMI, tax & investments',
    icon: DollarSign,
    count: 14,
  },
  {
    slug: 'health',
    name: 'Health',
    description: 'BMI, calories & body metrics',
    icon: HeartPulse,
    count: 10,
  },
  {
    slug: 'developer',
    name: 'Developer',
    description: 'JSON, encoders & formatters',
    icon: Code2,
    count: 15,
  },
  {
    slug: 'seo-text',
    name: 'SEO & Text',
    description: 'Word count, meta & keywords',
    icon: Search,
    count: 12,
  },
]

export const featuredTools: Tool[] = [
  {
    slug: 'pdf-to-word',
    name: 'PDF to Word Converter',
    description: 'Convert PDF files into editable Word documents in seconds.',
    icon: FileText,
    category: 'PDF Tools',
    badge: 'Popular',
  },
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    description: 'Shrink JPG & PNG file sizes without losing quality.',
    icon: ImageIcon,
    category: 'Image Tools',
    badge: 'Trending',
  },
  {
    slug: 'emi-calculator',
    name: 'Loan EMI Calculator',
    description: 'Calculate monthly EMIs for any loan amount and tenure.',
    icon: DollarSign,
    category: 'Finance',
    badge: 'Popular',
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Check your body mass index and healthy weight range.',
    icon: HeartPulse,
    category: 'Health',
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences and reading time.',
    icon: Type,
    category: 'SEO & Text',
    badge: 'Popular',
  },
  {
    slug: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create custom QR codes for links, text and Wi-Fi.',
    icon: QrCode,
    category: 'Developer',
    badge: 'New',
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Solve percentage increase, decrease and ratios fast.',
    icon: Percent,
    category: 'Calculators',
  },
  {
    slug: 'unit-converter',
    name: 'Universal Unit Converter',
    description: 'Convert length, weight, area, speed and more.',
    icon: Ruler,
    category: 'Converters',
    badge: 'Trending',
  },
]

export const latestTools: Tool[] = [
  {
    slug: 'color-picker',
    name: 'Color Picker & HEX Converter',
    description: 'Pick colors and convert between HEX, RGB and HSL.',
    icon: Palette,
    category: 'Developer',
    badge: 'New',
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    description: 'Find your exact age in years, months and days.',
    icon: Clock,
    category: 'Calculators',
    badge: 'New',
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure and random passwords.',
    icon: KeyRound,
    category: 'Developer',
    badge: 'New',
  },
  {
    slug: 'gst-calculator',
    name: 'GST / Tax Calculator',
    description: 'Add or remove tax and see the net breakdown.',
    icon: Scale,
    category: 'Finance',
    badge: 'New',
  },
  {
    slug: 'sip-calculator',
    name: 'SIP Investment Calculator',
    description: 'Project returns on your monthly SIP investments.',
    icon: TrendingUp,
    category: 'Finance',
    badge: 'New',
  },
  {
    slug: 'case-converter',
    name: 'Text Case Converter',
    description: 'Switch between upper, lower, title and sentence case.',
    icon: Type,
    category: 'SEO & Text',
    badge: 'New',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-free-pdf-tools',
    title: '10 Free PDF Tools That Save You Hours Every Week',
    excerpt:
      'From merging documents to compressing large files, these browser-based PDF tools handle it all without any software installs.',
    category: 'Productivity',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'how-emi-is-calculated',
    title: 'How Loan EMI Is Calculated: A Simple Guide',
    excerpt:
      'Understand the math behind your monthly loan payments and learn how to plan repayments smarter with our EMI calculator.',
    category: 'Finance',
    date: 'Jul 24, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'compress-images-quality',
    title: 'Compress Images Without Losing Quality',
    excerpt:
      'Learn the difference between lossy and lossless compression and how to keep your website fast with optimized images.',
    category: 'Web',
    date: 'Jul 19, 2026',
    readTime: '4 min read',
  },
]
