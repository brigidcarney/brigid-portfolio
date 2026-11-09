import fitbitEmailPreview from '@/assets/fitbit-email-preview.jpg'
import fitbitPaidSocialPreview from '@/assets/fitbit-paid-social-preview.jpg'
import goodrxPrintPreview from '@/assets/goodrx-print-preview.jpg'
import goodrxPaidSocialPreview from '@/assets/goodrx-paid-social-preview.jpg'
import jblPortablesPreview from '@/assets/jbl-portables-preview.jpg'
import jblTourPro3Preview from '@/assets/jbl-tour-pro-3-preview.jpg'

// All copy and links live here so content edits never touch components.
// Empty strings are placeholders: links stay inert until a URL is set.

export const site = {
  name: 'Brigid Carney',
  tagline: 'pilates instructor, writer, violinist & photographer',
  experienceTagline: 'a free-spirited soul, rooted in ritual',
  workImageHint: 'hover over the image to see the full creative',
  email: 'brigid@brigidcarney.com',
  linkedin: 'https://www.linkedin.com/in/brigidcarney/',
  instagram: '',
  tiktok: 'https://www.tiktok.com/@brigidcarney',
  resume:
    'https://docs.google.com/document/d/1DnCPcjaCbbONx_9eplv7W4GREuVXw-cc3OATlKFTUtM/export?format=pdf',
}

export type ExperienceSection = {
  title: string
  body: string[]
  tone: 'slate' | 'taupe' | 'moss'
  align: 'left' | 'right'
  cta?: { label: string; href: string }
  ctas?: { label: string; href: string }[]
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
    title: 'pilates & yoga',
    tone: 'slate',
    align: 'right',
    body: [
      'I grew up knowing my athletic capabilities well. There were none. I loved running around and being a crazy kid, but my skillset wasn’t on the field, court or track.',
      'In my first year of college, I found a home in the gym. I didn’t know what I was doing. I simply showed up, and slowly, my desire to feel good in my body and mind taught me how to move with care and build real strength. It took nearly a decade to get here, but I’m grateful for every step of this journey. This practice has shaped my life into something that nourishes my spirit.',
      'Over the past year and a half, I completed my Pilates teacher training at The Lab, gave birth to my first child, and healed my body through postpartum. I have never felt stronger, in body or in mind. In early 2027, I begin my 200-hour yoga teacher training, a dream I’ve held for a long time.',
      'It still feels surreal that this is my life, personally and professionally. I’m curious to see where this path leads as I guide others in caring for their body and mind.',
      'Follow along on Instagram and TikTok (@brigidcarney) to see what I’m creating and where this path takes me.',
    ],
    ctas: [
      { label: 'my instagram', href: site.instagram },
      { label: 'my tik tok', href: site.tiktok },
    ],
  },
  {
    title: 'photography',
    tone: 'moss',
    align: 'left',
    body: [
      'There’s an art to noticing the beauty in everyday life, especially when you’re nearly blind in one eye. From the moment I held my first real camera, I was completely enamored with capturing the life around me.',
      'With my Nikon D5600 and a few simple starter lenses, I’ve gathered every bit of magic I’ve come across. Flowers are my usual muse, but sunlight moving through leaves, or a mountain landscape that takes my breath away, remind me to never stop seeing.',
      'I call my camera my third eye. My photography is guided by intuition. I don’t know much about aperture or ISO, and I don’t mind. I follow my gut and photograph what makes my heart happy. Maybe one day I’ll collect more lenses and explore the technical side, but for now, this is a practice full of love.',
    ],
    cta: { label: 'see gallery', href: '' },
  },
]

export type ProjectBlock = {
  title?: string
  description: string
  cta?: { label: string; href: string }
  hideHint?: boolean
}

export type Project = {
  title: string
  subtitle: string
  description?: string
  blocks?: ProjectBlock[]
  images: {
    src: string
    alt: string
    fullSrc?: string
    pdf?: string
  }[]
}

export const projects: Project[] = [
  {
    title: 'Google Fitbit',
    subtitle: 'email campaigns & paid social | havas cx',
    blocks: [
      {
        title: 'emails',
        description:
          'For 7 years, Google Fitbit emails were my constant. From a full year of holiday campaigns to new product launches, I wrote copy that was clear, concise and brought results. My craft focuses on opening with intention and making the complex feel effortless to read.',
        cta: { label: 'see more', href: '/fitbit-premium-perks-email.pdf' },
      },
      {
        title: 'paid social',
        description:
          'Alongside the thousands of emails I wrote each year, I also wrote copy for Google Fitbit paid social ads. Carrying the campaign tone from email into social was a fun task. I love trimming copy down to what matters, and paid social was the ideal place for it: short, steady words that stood out amid the noise.',
      },
    ],
    images: [
      {
        src: fitbitEmailPreview,
        alt: 'Google Fitbit - Premium Perks email campaign',
        pdf: '/fitbit-premium-perks-email.pdf',
      },
      {
        src: fitbitPaidSocialPreview,
        alt: 'Google Fitbit - Mother’s Day paid social campaign',
        pdf: '/fitbit-mothers-day-paid-social.pdf',
      },
    ],
  },
  {
    title: 'GoodRx',
    subtitle: 'paid social & print | havas cx',
    blocks: [
      {
        title: 'print',
        description:
          'GoodRx was my first time writing for print. Adapting to a new craft was a rewarding lesson, one with tighter character counts and competing hierarchies to balance. From Medicare flyers to PCP drug list pamphlets with a touch of personality, I grew into myself through work that served a bigger purpose.',
        cta: { label: 'see more', href: '/goodrx-february-discounts-print.pdf' },
      },
      {
        title: 'paid social',
        description:
          'Bringing my Google Fitbit paid social experience into the GoodRx brand tone was a rewarding experience. The ads were even shorter, and the required drug terminology took up nearly all the space. Every word had to earn its place. It was a great challenge, and it sharpened my concise writing style.',
      },
    ],
    images: [
      {
        src: goodrxPrintPreview,
        alt: 'GoodRx - February Discounts print flyer',
        pdf: '/goodrx-february-discounts-print.pdf',
      },
      {
        src: goodrxPaidSocialPreview,
        alt: 'GoodRx HCP - Paid social campaign',
        pdf: '/goodrx-hcp-paid-social.pdf',
      },
    ],
  },
  {
    title: 'JBL',
    subtitle: 'product landing pages | havas cx',
    blocks: [
      {
        title: 'JBL Portables & PartyBox landing pages',
        description:
          '3 product launches in 2 phases. All 3 with their own loud and proud personalities. It was such a fun challenge to write for multiple big new products, and to adjust the landing page from phase 1 with 2 devices to phase 2 with all 3.',
      },
      {
        title: 'JBL Tour Pro 3 & Tour One M3 landing page',
        description:
          'For my 2nd JBL project, I got the chance to help define and develop the tone for each new product—which made the work even more meaningful.',
      },
    ],
    images: [
      {
        src: jblPortablesPreview,
        alt: 'JBL Portables & PartyBox landing page',
        pdf: '/jbl-portables-lp.pdf',
      },
      {
        src: jblTourPro3Preview,
        alt: 'JBL Tour Pro 3 & Tour One M3 landing page',
        pdf: '/jbl-tour-pro-3-lp.pdf',
      },
    ],
  },
]
