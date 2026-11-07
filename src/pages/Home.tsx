import { site } from '@/data/site'
import { Link } from 'react-router-dom'
import { SocialIcons } from '@/components/SocialIcons'
import portrait from '@/assets/portrait.jpg'

const ctaClass =
  'mt-2 inline-block font-heading text-2xl text-ink underline underline-offset-4 md:mt-3 md:text-3xl lg:text-4xl'

export function Home() {
  return (
    <>
      <section className="px-6 py-20 text-center sm:py-28">
        <h1 className="text-5xl text-ink sm:text-6xl">{site.name.toLowerCase()}</h1>
        <p className="mt-4 text-lg text-balance text-ink/80">{site.tagline}</p>
      </section>

      {/* Card overlaps the photo on wide screens and sits beside it on
          phones; both share one grid so they never drift apart. */}
      <section className="bg-olive px-6 py-16 sm:px-12 md:py-24">
        <div className="mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-12 md:items-center">
          <img
            src={portrait}
            alt={`Portrait of ${site.name}`}
            className="col-start-2 row-start-1 aspect-[3/4] h-full w-full object-cover md:col-span-7 md:col-start-6 md:aspect-[4/3] md:h-auto"
          />
          <div className="col-start-1 row-start-1 flex flex-col justify-center bg-cream p-5 md:col-span-6 md:col-start-1 md:block md:p-12 lg:p-14">
            <p className="font-heading text-lg text-ink/70 md:text-xl">
              explore my experience
            </p>
            {/* Falls back to the experience page until a resume is added. */}
            {site.resume ? (
              <a href={site.resume} target="_blank" rel="noreferrer"
                className={ctaClass}>
                see resume
              </a>
            ) : (
              <Link to="/experience" className={ctaClass}>see resume</Link>
            )}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl space-y-6 px-6 py-20 text-sm sm:px-12">
      <h2 className="text-4xl text-ink sm:text-5xl">get in touch</h2>
      <SocialIcons />
    </section>
  )
}
