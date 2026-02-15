export default function CTASection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 md:p-16 text-black shadow-2xl">
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg md:text-xl text-black/80 mb-10 max-w-2xl mx-auto font-medium">
            Let's collaborate and create something amazing together. 
            Get in touch and let's discuss your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            
            {/* Primary Button */}
            <button className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-neutral-900 transition-all duration-300 hover:scale-105 shadow-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 19h14" />
              </svg>
              Book a Session
            </button>

            {/* Secondary Button */}
            <button className="flex items-center gap-2 px-8 py-4 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
              View Pricing
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                   fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}
