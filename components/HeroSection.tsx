import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ArrowDownIcon,
  CameraIcon,
} from "@heroicons/react/24/outline"

export default function HeroSection() {
  return (
    <section
        id="home"
        className="relative isolate min-h-screen flex items-center justify-center text-center overflow-hidden bg-black"
      >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-5xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-orange-500/30 text-orange-400">
          <CameraIcon className="w-4 h-4" />
          Visual Storyteller & Designer
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Capturing Moments,
          <br />
          <span className="text-orange-500">
            Creating Stories
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Professional photographer & designer specializing in weddings,
          personal branding, and creative visual solutions that tell your
          unique story.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          
          <button className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-black rounded-full font-bold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-xl">
            View Portfolio
            <ArrowRightIcon className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-2 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-bold">
            <CalendarDaysIcon className="w-5 h-5" />
            Book a Session
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDownIcon className="w-6 h-6 mx-auto text-orange-500" />
        </div>
      </div>
    </section>
  )
}
