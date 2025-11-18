import SectionHeading from '@/components/SectionHeading'
import { videos } from '@/data/videos'

export default function VideoPage() {
  const featuredVideo = videos.find((v) => v.isFeatured) || videos[0]
  const otherVideos = videos.filter((v) => v.id !== featuredVideo.id)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeading
        title="Video"
        subtitle="Discover Alexandros' philosophy and approach to hair styling through video content and tutorials."
      />

      {/* Featured Video */}
      <section className="mb-16">
        <div className="aspect-video placeholder-gradient rounded-xl overflow-hidden mb-4 premium-shadow border border-neutral-200/50">
          {featuredVideo.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
              title={featuredVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-10 h-10 text-neutral-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="placeholder-text">{featuredVideo.title}</p>
              </div>
            </div>
          )}
        </div>
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">{featuredVideo.title}</h3>
        {featuredVideo.description && (
          <p className="text-gray-600">{featuredVideo.description}</p>
        )}
      </section>

      {/* Video Grid */}
      <section>
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">More Videos</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherVideos.map((video) => (
            <div key={video.id} className="space-y-4">
              <div className="aspect-video placeholder-gradient rounded-xl overflow-hidden premium-shadow border border-neutral-200/50">
                {video.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-8 h-8 text-neutral-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="placeholder-text text-sm">{video.title}</p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{video.title}</h4>
                {video.description && <p className="text-sm text-gray-600">{video.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

