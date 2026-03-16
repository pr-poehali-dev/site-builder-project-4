const principles = [
  {
    icon: "🔍",
    title: "Прозрачность",
    desc: "Ученик должен понимать, когда он использует ИИ, и не выдавать его работу за свою собственную без указания источника.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    icon: "🔒",
    title: "Безопасность данных",
    desc: "Не загружать в нейросети личные данные, фотографии одноклассников или конфиденциальную информацию школы.",
    color: "from-purple-500 to-pink-400",
    bg: "bg-purple-50",
  },
  {
    icon: "🧠",
    title: "Человеческий фактор",
    desc: "ИИ — это помощник, а не замена учителя. Критическое мышление и эмоции остаются за человеком.",
    color: "from-orange-500 to-rose-400",
    bg: "bg-orange-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Основы
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Что такое{" "}
            <span className="text-gradient">этичный ИИ?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Три ключевых принципа, которые должен знать каждый школьник
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} rounded-3xl p-8 border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
