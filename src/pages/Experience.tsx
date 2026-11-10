import { experience, site, type ExperienceSection } from '@/data/site'

const tones: Record<ExperienceSection['tone'], string> = {
  slate: 'bg-slate',
  taupe: 'bg-taupe',
  moss: 'bg-moss',
}

const ctaClass = 'inline-block bg-cream px-6 py-3 text-sm text-ink'

export function Experience() {
  return (
    <>
      <section className="px-6 py-16 text-center sm:pb-28">
        <h1 className="text-5xl text-ink">about me</h1>
        <p className="mt-3 text-lg text-balance text-ink/80">{site.experienceTagline}</p>
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
            {/* Shown even before its link exists so the layout is final;
                it stays inert until the URL is filled in. */}
            {(() => {
              const items = s.ctas ?? (s.cta ? [s.cta] : [])
              if (items.length === 0) return null
              return (
                <div className={`mt-8 flex flex-wrap gap-4 ${s.align === 'right' ? 'sm:justify-end' : ''}`}>
                  {items.map((cta) =>
                    cta.href ? (
                      <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noreferrer"
                        className={ctaClass}
                      >
                        {cta.label}
                      </a>
                    ) : (
                      <span key={cta.label} className={ctaClass}>
                        {cta.label}
                      </span>
                    )
                  )}
                </div>
              )
            })()}
          </div>
        </section>
      ))}
    </>
  )
}
