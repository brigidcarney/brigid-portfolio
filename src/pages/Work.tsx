import { useState, useEffect, useRef } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)
  const [isCentered, setIsCentered] = useState(false)
  const tileRef = useRef<HTMLDivElement>(null)

  // Phones can't hover, so scroll the image while the tile sits mid-screen.
  useEffect(() => {
    const tile = tileRef.current
    if (!tile || !window.matchMedia('(hover: none)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsCentered(entry.isIntersecting),
      { rootMargin: '-40% 0px -40% 0px' },
    )
    observer.observe(tile)
    return () => observer.disconnect()
  }, [image?.src])

  // Fetch the full-size image before the click so the dialog opens fast.
  function preloadFull() {
    if (image?.fullSrc) new Image().src = image.fullSrc
  }

  if (image?.src) {
    return (
      <>
        <div
          ref={tileRef}
          role="button"
          tabIndex={0}
          aria-label={`view full size: ${image.alt}`}
          onClick={() => setIsOpen(true)}
          onMouseEnter={preloadFull}
          onFocus={preloadFull}
          onTouchStart={preloadFull}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsOpen(true)
            }
          }}
          className="group relative aspect-square w-full cursor-pointer overflow-hidden bg-white/60 focus:outline-hidden focus:ring-1 focus:ring-olive"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover ${isCentered ? 'object-bottom' : 'object-top'} transition-[object-position] duration-[6000ms] ease-in-out group-hover:object-bottom`}
          />
          <div className="pointer-events-none absolute right-3 bottom-3 border border-ink/20 bg-cream/95 p-1.5 text-ink opacity-80 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 2h4v4M6 14H2v-4M14 2L9.5 6.5M2 14l4.5-4.5" />
            </svg>
          </div>
        </div>

        {isOpen && (
          <Modal image={image} onClose={() => setIsOpen(false)} />
        )}
      </>
    )
  }
  return (
    <div className="flex aspect-square items-center justify-center bg-white/60 text-sm text-ink/50">
      {image?.alt ?? 'image'}
    </div>
  )
}

function Modal({
  image,
  onClose,
}: {
  image: NonNullable<Project['images'][number]>
  onClose: () => void
}) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] max-w-4xl w-full flex-col bg-cream p-4 sm:p-8"
      >
        <div className="mb-4 flex items-center justify-between border-b border-ink/10 pb-3">
          <p className="text-sm text-ink/80">{image.alt}</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              aria-label="close"
              className="cursor-pointer border border-ink/20 p-1.5 text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-y-auto">
          <img
            src={image.fullSrc || image.src}
            alt={image.alt}
            className="mx-auto h-auto max-w-full"
          />
        </div>
      </div>
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
      {!block.hideHint && (
        <p className="mt-4 text-xs italic text-cream/75">
          {site.workImageHint}
        </p>
      )}
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
