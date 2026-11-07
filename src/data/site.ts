// All copy and links live here so content edits never touch components.
// Empty strings are placeholders: links stay inert until a URL is set.

export const site = {
  name: 'Brigid Carney',
  tagline: 'pilates instructor, writer, violinist & photographer',
  experienceTagline: 'a free-spirited soul, rooted in ritual',
  email: 'brigid@brigidcarney.com',
  linkedin: 'https://www.linkedin.com/in/brigidcarney/',
  instagram: '',
  resume:
    'https://docs.google.com/document/d/1DnCPcjaCbbONx_9eplv7W4GREuVXw-cc3OATlKFTUtM/export?format=pdf',
}

export type ExperienceSection = {
  title: string
  body: string[]
  tone: 'slate' | 'taupe' | 'moss'
  align: 'left' | 'right'
  cta?: { label: string; href: string }
}

export const experience: ExperienceSection[] = [
  {
    title: 'copywriting',
    tone: 'taupe',
    align: 'left',
    body: [
      'Expression comes naturally to me. Maybe it’s the cancer sun sign in me. All I know is that with every outlet I pick up, I pour so much love into it.',
      'As a 4 year old, I learned how to sing with my fingers. This foundation in playing the violin rooted itself deeply into all aspects of my life. The more I played, the more rhythm I noticed around me: in nature, in emotions and in all words, written and spoken.',
      'And then, I started to listen. Life’s melodies taught me to ebb and flow with the rhythm of my mind. I strung my words together like notes on a page, building shapes and telling stories. The sounds of birds singing early in the morning, or rain falling slowly outside my open window, or the breeze softly whispering past my cheeks guide me daily.',
      'Writing not only expresses how I think and what I feel, but solidifies the innate dance that’s going on in between the past, present and future: what’s born into all of us.',
      'I hope you enjoy my little symphonies of words.',
    ],
    cta: { label: 'my work', href: '/work' },
  },
  {
    title: 'pilates',
    tone: 'slate',
    align: 'right',
    body: ['Paragraph about Pilates experience and teaching.'],
    cta: { label: 'my instagram', href: site.instagram },
  },
  {
    title: 'photography',
    tone: 'moss',
    align: 'left',
    body: ['Paragraph about photography.'],
  },
]

export type Project = {
  title: string
  subtitle: string
  description: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    title: 'Google Fitbit',
    subtitle: 'email campaigns & paid social | havas cx',
    description:
      'This is your project description. A brief summary helps visitors understand the context and background. Then use the images to showcase the work.',
    images: [
      { src: '', alt: 'Homepage hero' },
      { src: '', alt: 'Product page' },
    ],
  },
  {
    title: 'GoodRx',
    subtitle: 'paid social & print | havas cx',
    description:
      'This is your project description. A brief summary helps visitors understand the context and background. Then use the images to showcase the work.',
    images: [
      { src: '', alt: 'Homepage hero' },
      { src: '', alt: 'Product page' },
    ],
  },
  {
    title: 'JBL',
    subtitle: 'product landing pages | havas cx',
    description:
      'This is your project description. A brief summary helps visitors understand the context and background. Then use the images to showcase the work.',
    images: [
      { src: '', alt: 'Homepage hero' },
      { src: '', alt: 'Product page' },
    ],
  },
]
