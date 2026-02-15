import { Photo } from "@/types/photo"

interface PortfolioProps {
  photos: Photo[]
}

const categories = ["All", "Wedding", "Branding", "Product", "Design"]

export default function PortfolioSection({ photos }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A curated collection of my best photography and design projects
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-${index === 0 ? 'bold' : 'medium'} transition ${
                  index === 0
                    ? 'bg-[#1DB954] text-black hover:bg-[#1ed760]'
                    : 'bg-[#282828] text-white hover:bg-[#3E3E3E]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.photo_id}
              className="break-inside-avoid rounded-2xl overflow-hidden hover:ring-2 hover:ring-[#1DB954] transition duration-300 bg-[#181818] group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    photo.filename ||
                    `https://images.unsplash.com/photo-${
                      [
                        '1511285560929-80b456fea0bc',
                        '1519741497674-611481863552',
                        '1515934751361-c1f10ed1a918',
                        '1492691527719-9d1e07e534b4',
                        '1506905925346-21bda4d32df4',
                        '1542038784456-1ea8e4b76b21',
                        '1558618666-fcd25c85cd64',
                        '1551801024-49fc5b8df71f',
                        '1606814893907-c2e42943c91f'
                      ][index % 9]
                    }?w=500&q=80`
                  }
                  alt={photo.caption}
                  className="w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition duration-300">
                  <h3 className="font-bold text-lg">{photo.caption}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {photo.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#1DB954] text-black rounded-full font-bold hover:bg-[#1ed760] transition hover:scale-105">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
