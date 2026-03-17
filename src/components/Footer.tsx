export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-xl">
              🧠
            </div>
            <div>
              <div className="font-bold">AI.Ethics.School</div>
              <div className="text-white/40 text-sm">Этичность ИИ в образовании</div>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-white/50">
            {["#about", "#pros-cons", "#cases", "#quiz", "#game", "#contacts"].map((href, i) => {
              const labels = ["О проекте", "Плюсы/минусы", "Кейсы", "Тест", "Игра", "Контакты"];
              return (
                <a key={href} href={href} className="hover:text-white transition-colors">
                  {labels[i]}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          © 2026 Проект по информатике. Этичность использования ИИ.
        </div>
      </div>
    </footer>
  );
}