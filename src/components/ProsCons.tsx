const pros = [
  "Персонализация обучения (подбор задач под уровень)",
  "Автоматизация рутины (проверка тестов, конспекты)",
  "Быстрый доступ к структурированной информации",
];

const cons = [
  'Снижение критического мышления ("ленивый мозг")',
  "Академическое мошенничество (списывание эссе)",
  "Утечка персональных данных и галлюцинации ИИ",
];

export default function ProsCons() {
  return (
    <section id="pros-cons" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Анализ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Плюсы и{" "}
            <span className="text-gradient">минусы</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white text-xl">
                ✅
              </div>
              <h3 className="text-xl font-bold text-green-800">
                Возможности
              </h3>
            </div>
            <div className="space-y-4">
              {pros.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white text-xl">
                ⚠️
              </div>
              <h3 className="text-xl font-bold text-red-800">Риски</h3>
            </div>
            <div className="space-y-4">
              {cons.map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
