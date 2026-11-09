import { projects, site, type Project, type ProjectBlock as ProjectBlockData } from '@/data/site'

const ctaClass = 'inline-block border border-ink/20 px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-cream'

export function Work() {
  return (
    <>
      <section className="px-6 py-16 text-center sm:py-24">
        <h1 className="text-5xl text-ink">my work</h1>
        <p className="mt-4 text-lg text-ink/80">
          explore the full scope of my portfolio
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {site.resume ? (
            <a href={site.resume} target="_blank" rel="noreferrer" className={ctaClass}>
              see resume
            </a>
          ) : (
            <span className={ctaClass}>see resume</span>
          )}
        </div>
      </section>
      {projects.map((p, i) => <ProjectBlock key={i} project={p} />)}
    </>
  )
}

// Image and description tiles alternate like a checkerboard.
function ProjectBlock({ project }: { project: Project }) {
  const [first, second] = project.images
  const defaultDesc =
    project.description ||
    'This is your project description. A brief summary helps visitors understand the context and background. Then use the images to showcase the work.'
  const block1 = project.blocks?.[0] ?? { title: 'project', description: defaultDesc }
  const block2 = project.blocks?.[1] ?? { title: 'project', description: defaultDesc }

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-12">
      <div className="py-16 text-center">
        <h1 className="text-5xl text-ink">{project.title}</h1>
        <p className="mt-6 text-lg text-ink/90">{project.subtitle}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="order-1">
          <Tile image={first} />
        </div>
        <div className="order-2">
          <Description block={block1} />
        </div>
        <div className="order-4 sm:order-3">
          <Description block={block2} />
        </div>
        <div className="order-3 sm:order-4">
          <Tile image={second} />
        </div>
      </div>
    </section>
  )
}

function Tile({ image }: { image?: Project['images'][number] }) {
  if (image?.src) {
    return (
      <img src={image.src} alt={image.alt}
        className="aspect-square w-full object-cover" />
    )
  }
  return (
    <div className="flex aspect-square items-center justify-center bg-white/60 text-sm text-ink/50">
      {image?.alt ?? 'image'}
    </div>
  )
}

function Description({ block, className = '' }: {
  block: ProjectBlockData
  className?: string
}) {
  const cta = block.cta
  return (
    <div
      className={`flex aspect-square flex-col justify-center bg-olive p-8 text-cream ${className}`}
    >
      {block.title && <h2 className="text-2xl">{block.title}</h2>}
      <p className="mt-6 text-sm leading-7">{block.description}</p>
      {cta && (
        <div className="mt-8">
          {cta.href ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-cream px-6 py-3 text-sm text-ink transition-opacity hover:opacity-90"
            >
              {cta.label}
            </a>
          ) : (
            <span className="inline-block bg-cream px-6 py-3 text-sm text-ink">
              {cta.label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
