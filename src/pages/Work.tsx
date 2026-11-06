import { projects, type Project } from '@/data/site'

export function Work() {
  return (
    <>
      {projects.map((p) => <ProjectBlock key={p.title} project={p} />)}
    </>
  )
}

// Image and description tiles alternate like a checkerboard.
function ProjectBlock({ project }: { project: Project }) {
  const [first, second] = project.images
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-12">
      <div className="py-16 text-center">
        <h1 className="text-5xl text-ink">{project.title}</h1>
        <p className="mt-6 text-lg text-ink/90">{project.subtitle}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Tile image={first} />
        <Description project={project} />
        <Description project={project} className="hidden sm:flex" />
        <Tile image={second} />
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

function Description({ project, className = '' }: {
  project: Project
  className?: string
}) {
  return (
    <div
      className={`flex aspect-square flex-col justify-center bg-olive p-8 text-cream ${className}`}
    >
      <h2 className="text-2xl">Project</h2>
      <p className="mt-6 text-sm leading-7">{project.description}</p>
    </div>
  )
}
