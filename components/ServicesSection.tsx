import {
  HeartIcon,
  PaintBrushIcon,
  CubeIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    icon: HeartIcon,
    title: "Wedding Photography",
    description:
      "Capture your special day with artistic, emotional storytelling that you'll cherish forever.",
  },
  {
    icon: PaintBrushIcon,
    title: "Brand Design",
    description:
      "Create stunning visual identities that make your brand stand out in the market.",
  },
  {
    icon: CubeIcon,
    title: "Product Photography",
    description:
      "Showcase your products with professional, eye-catching images that drive sales.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What <span className="text-orange-500">I Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-neutral-900 rounded-3xl p-8 border border-orange-500/10 
                           hover:border-orange-500 hover:bg-neutral-800 
                           transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl 
                                flex items-center justify-center mb-6 
                                group-hover:bg-orange-500/20 transition">
                  <Icon className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
