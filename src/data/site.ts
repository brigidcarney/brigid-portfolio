// All copy and links live here so content edits never touch components.
// Empty strings are placeholders: the UI hides links that have no URL yet.

export const site = {
  name: 'Brigid Carney',
  tagline: 'free-spirited & open-minded creative soul',
  location: 'baltimore, md',
  email: 'brigid@brigidcarney.com',
  linkedin: 'https://www.linkedin.com/in/brigidcarney/',
  instagram: '',
  resume: '',
}

export type ExperienceSection = {
  title: string
  body: string[]
  tone: 'slate' | 'taupe' | 'dusk'
  align: 'left' | 'right'
  cta?: { label: string; href: string }
}

export const experience: ExperienceSection[] = [
  {
    title: 'Copywriting',
    tone: 'slate',
    align: 'left',
    body: [
      'Expressing myself comes naturally. Maybe it’s the cancer sun sign in me, or the whole “middle child” thing. But all I know is that, whatever outlet I pick up, I find so much love in it.',
      'As a 4 year old, I learned how to sing with my fingers. This foundation in music and the violin spread quickly and rooted itself deeply into all aspects of my life. The more I played, the more rhythm I noticed around me: in nature, in emotions, in all words, written and spoken.',
      'And then, I started to listen. Nature’s melodies taught me to ebb and flow with the rhythm of my mind. I strung my words together like notes on a page, building shapes and telling stories. The sounds of birds singing early in the morning, or rain falling slowly outside my open window, or the breeze softly whispering past my cheeks all teach me something new about myself and life every day.',
      'Writing not only expresses how I think and what I feel, but solidifies the innate dance that’s going on in between the past, present and future: what’s born into all of us.',
      'I hope you enjoy my little symphonies of words.',
    ],
    cta: { label: 'resume', href: site.resume },
  },
  {
    title: 'Pilates',
    tone: 'taupe',
    align: 'right',
    body: ['Paragraph about Pilates experience and teaching.'],
    cta: { label: 'my instagram', href: site.instagram },
  },
  {
    title: 'Photography',
    tone: 'dusk',
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
    title: 'project 1',
    subtitle: 'Website Redesign | Havas CX',
    description:
      'This is your project description. A brief summary helps visitors understand the context and background. Then use the images to showcase the work.',
    images: [
      { src: '', alt: 'Homepage hero' },
      { src: '', alt: 'Product page' },
    ],
  },
]
