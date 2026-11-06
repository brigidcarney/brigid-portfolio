import { site } from '@/data/site'
import { Link } from '@/lib/router'
import { SocialIcons } from '@/components/SocialIcons'
import portrait from '@/assets/portrait.jpg'

export function Home() {
  return (
    <>
      <section className="px-6 py-20 text-center sm:py-28">
        <h1 className="text-5xl text-ink sm:text-6xl">{site.name.toLowerCase()}</h1>
        <p className="mt-4 text-lg text-ink/80">{site.tagline}</p>
      </section>

      <section className="bg-olive px-6 py-16 sm:px-24 sm:py-24">
        <div className="relative mx-auto max-w-4xl">
          <img
            src={portrait}
            alt={`Portrait of ${site.name}`}
            className="ml-auto aspect-[14/9] w-full object-cover sm:w-[60%]"
          />
          <div className="bg-cream p-10 sm:absolute sm:top-16 sm:left-0 sm:w-[46%] sm:p-14">
            <p className="font-heading text-xl text-ink/70">
              explore my experience
            </p>
            <Link
              to="/experience"
              className="mt-3 inline-block font-heading text-4xl text-ink underline underline-offset-4"
            >
              see experience
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-2 sm:items-end sm:px-12"
    >
      <div className="space-y-6 text-sm">
        <h2 className="text-4xl text-ink sm:text-5xl">get in touch</h2>
        <p>{site.location}</p>
        <p><a href={`tel:${site.phone}`}>{site.phone}</a></p>
        <SocialIcons />
      </div>
      <div className="space-y-4 sm:text-right">
        <p className="font-heading text-2xl text-ink/80">
          I'd love to hear from you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-block bg-espresso px-10 py-3 font-heading text-xl text-cream transition-opacity hover:opacity-90"
        >
          say hello
        </a>
        <p className="text-sm">
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  )
}
