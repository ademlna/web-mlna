interface StatsProps {
  totalProjects: number
}

export default function StatsSection({ totalProjects }: StatsProps) {
  const stats = [
    { value: `${totalProjects}+`, label: "Total Projects" },
    { value: "150+", label: "Happy Clients" },
    { value: "8+", label: "Years Experience" },
    { value: "25+", label: "Awards Won" },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1DB954]/10 to-[#1DB954]/5 rounded-3xl p-8 text-center hover:bg-[#1DB954]/20 transition border border-[#1DB954]/20"
          >
            <div className="text-5xl font-bold text-[#1DB954]">
              {stat.value}
            </div>
            <p className="text-gray-400 mt-3 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
