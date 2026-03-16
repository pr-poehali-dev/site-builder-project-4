const cases = [
  {
    type: "success",
    emoji: "✅",
    title: "Успех: Адаптивный репетитор",
    desc: "Школьник использует ИИ-бота, чтобы объяснить сложную тему по физике простыми словами, но решение задачи пишет сам.",
    tag: "Правильно",
    tagColor: "bg-green-100 text-green-700",
    border: "border-green-200",
    bg: "from-green-50 to-emerald-50",
  },
  {
    type: "fail",
    emoji: "❌",
    title: "Провал: Слепое доверие",
    desc: 'Ученик скопировал эссе из нейросети, не проверив факты. ИИ выдумал несуществующего исторического персонажа, учитель поставил "2".',
    tag: "Ошибка",
    tagColor: "bg-red-100 text-red-700",
    border: "border-red-200",
    bg: "from-red-50 to-rose-50",
  },
];

const recs = [
  {
    who: "Ученикам",
    icon: "🎓",
    text: 'Используйте ИИ как "второе мнение". Всегда перепроверяйте факты. Если ИИ помог написать текст — укажите это в сноске.',
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    who: "Учителям",
    icon: "📚",
    text: "Учите детей промпт-инжинирингу. Создавайте задания, которые ИИ не может решить (устный опрос или проект в классе).",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    who: "Родителям",
    icon: "👨‍👩‍👧",
    text: 'Не запрещайте технологии, а обсуждайте их. Спросите ребенка: "Как ты думаешь, эта статья написана человеком или роботом?"',
    color: "bg-orange-50 border-orange-100",
    iconBg: "bg-orange-500",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
            Практика
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Реальные <span className="text-gradient">кейсы</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((c) => (
            <div
              key={c.title}
              className={`bg-gradient-to-br ${c.bg} rounded-3xl p-8 border ${c.border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{c.emoji}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.tagColor}`}>
                  {c.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-3xl font-black text-gray-900">Рекомендации</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recs.map((r) => (
            <div
              key={r.who}
              className={`rounded-3xl p-6 border ${r.color}`}
            >
              <div
                className={`w-12 h-12 ${r.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-4`}
              >
                {r.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{r.who}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
