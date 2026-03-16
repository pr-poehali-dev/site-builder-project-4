interface HeroProps {
  heroImage: string;
}

export default function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              width: Math.random() * 200 + 50 + "px",
              height: Math.random() * 200 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: `hsl(${Math.random() * 60 + 220}, 80%, 60%)`,
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Проект 10 класс · 2024
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          ИИ в школе:{" "}
          <span className="text-gradient">возможности</span>
          <br />и риски
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Как использовать искусственный интеллект этично и с пользой для учёбы?
          Гид для учеников, учителей и родителей.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-4 rounded-2xl font-bold text-white gradient-primary glow-blue hover:scale-105 transition-transform"
          >
            Начать изучение
          </a>
          <a
            href="#quiz"
            className="px-8 py-4 rounded-2xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
          >
            Пройти тест
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "3", label: "Принципа" },
            { value: "5", label: "Кейсов" },
            { value: "2", label: "Интерактива" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-white">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
