const testimonials = [
  {
    rating: 5,
    text: "Absolutely stunning work! Professional, creative, and delivered beyond expectations. Highly recommended for anyone looking for quality.",
    name: "Sarah Johnson",
    role: "CEO, Tech Startup",
  },
  {
    rating: 5,
    text: "Working with John was an absolute pleasure. The attention to detail and creative vision exceeded our expectations. Will definitely hire again!",
    name: "Michael Chen",
    role: "Marketing Director",
  },
  {
    rating: 5,
    text: "The best photographer we've worked with! Captured our wedding day perfectly and made us feel comfortable throughout the entire process.",
    name: "Emily & David",
    role: "Newlyweds",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#121212] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Client Love</h2>
          <p className="text-gray-400 text-lg">
            What people say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-3xl p-8 border border-gray-800 hover:border-[#1DB954]/50 transition"
            >
              <div className="flex items-center gap-1 text-[#1DB954] mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-full" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
