import SectionHeading from '@/components/SectionHeading'
import { timelineEntries } from '@/data/timeline'

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading title="About" />

      {/* Bio Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 reveal">
            <div className="aspect-[3/4] placeholder-gradient flex items-center justify-center rounded-xl premium-shadow border border-neutral-200/50 overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="placeholder-text block">Portrait</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Alexandros Liakos is a renowned hairstylist and educator with over two decades of experience in the
              fashion and beauty industry. His journey began with a passion for transforming hair into art, and over the
              years, he has established himself as one of Greece's most respected hair professionals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As the Art Director of Gino Kolonaki, Alexandros brings his innovative vision and technical expertise to
              every client experience. His work spans from celebrity styling to editorial shoots, runway shows, and
              everyday transformations, always maintaining the highest standards of quality and creativity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond the salon, Alexandros is committed to education and sharing his knowledge with the next generation
              of hairstylists. Through masterclasses, one-on-one coaching, and salon workshops, he helps professionals
              elevate their skills and develop their artistic voice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His philosophy centers on understanding each client's unique features and personality, creating looks that
              are not just beautiful but also authentic and empowering. This approach has earned him recognition in
              leading fashion magazines and collaborations with Greece's most prominent personalities.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 text-center">Career Timeline</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Timeline Entries */}
            <div className="space-y-8">
              {timelineEntries.map((entry, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white z-10"></div>
                  <div className="ml-16">
                    <div className="text-accent font-semibold text-lg mb-1">{entry.year}</div>
                    <div className="text-gray-700">{entry.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

