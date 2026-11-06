import { experience, site, type ExperienceSection } from '@/data/site'

const tones: Record<ExperienceSection['tone'], string> = {
  slate: 'bg-slate',
  taupe: 'bg-taupe',
  dusk: 'bg-dusk',
}

export function Experience() {
  return (
    <>
      <section className="px-6 py-16 text-center sm:pb-28">
        <h1 className="text-5xl text-ink">my experience</h1>
        <p className="mt-3 text-lg text-ink/80">{site.tagline}</p>
      </section>
      {experience.map((s) => (
        <section
          key={s.title}
          className={`${tones[s.tone]} px-6 py-16 text-cream sm:px-24 sm:py-20`}
        >
          <div
            className={`mx-auto max-w-4xl ${
              s.align === 'right' ? 'sm:text-right' : ''}`}
          >
            <h2 className="text-3xl">{s.title}</h2>
            <div className="mt-4 space-y-6 leading-relaxed">
              {s.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            {s.cta?.href && (
              <a
                href={s.cta.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block bg-cream px-6 py-3 text-sm text-ink"
              >
                {s.cta.label}
              </a>
            )}
          </div>
        </section>
      ))}
    </>
  )
}
