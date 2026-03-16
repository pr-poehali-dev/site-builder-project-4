import { useState } from "react";

const gameData = [
  {
    text: "Роза цвела в саду, её лепестки были как шёлк. Я помню тот день, когда мы впервые встретились под этим деревом.",
    answer: "human",
    explanation: "Это написал человек! Есть личные воспоминания и эмоции.",
  },
  {
    text: "Искусственный интеллект — это технология, которая позволяет машинам выполнять задачи, требующие человеческого интеллекта. Он применяется в различных сферах.",
    answer: "ai",
    explanation: "Это написал ИИ! Текст сухой, энциклопедический, без эмоций.",
  },
  {
    text: "Вчера мой кот снова уронил вазу. Я так разозлился, но когда увидел его испуганные глаза — простил. Животные чувствуют наши эмоции.",
    answer: "human",
    explanation: "Это написал человек! Личная история с эмоциями и деталями.",
  },
  {
    text: "Для достижения оптимальных результатов рекомендуется следовать установленным процедурам. Данный подход обеспечивает максимальную эффективность.",
    answer: "ai",
    explanation: "Это написал ИИ! Слишком формальный и безличный стиль.",
  },
  {
    text: "Мама испекла пирог, и весь дом наполнился запахом корицы. Это тот запах, который я ассоциирую с детством и теплом.",
    answer: "human",
    explanation: "Это написал человек! Сенсорные детали и личные ассоциации.",
  },
];

export default function Game() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [feedback, setFeedback] = useState<null | { correct: boolean; explanation: string }>(null);
  const [finished, setFinished] = useState(false);

  const startGame = () => {
    setCurrent(0);
    setScore(0);
    setStarted(true);
    setFeedback(null);
    setFinished(false);
  };

  const checkAnswer = (ans: string) => {
    if (!started || feedback) return;
    const correct = gameData[current].answer === ans;
    if (correct) setScore((s) => s + 1);
    setFeedback({ correct, explanation: gameData[current].explanation });

    setTimeout(() => {
      setFeedback(null);
      if (current + 1 >= gameData.length) {
        setFinished(true);
        setStarted(false);
      } else {
        setCurrent((c) => c + 1);
      }
    }, 2000);
  };

  const finalScore = finished ? score : 0;
  const finalMsg =
    finalScore === gameData.length
      ? "🏆 Идеально! Вы настоящий эксперт по ИИ!"
      : finalScore >= gameData.length / 2
      ? "👍 Хорошо! Вы неплохо различаете тексты."
      : "📚 Стоит потренироваться! ИИ становится всё сложнее отличить.";

  return (
    <section id="game" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Игра
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            🎮 Человек или <span className="text-gradient">ИИ?</span>
          </h2>
          <p className="text-gray-500">
            Угадай, кто написал этот текст — человек или нейросеть!
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <span className="text-white/60 text-sm">
              {started ? `Вопрос ${current + 1} из ${gameData.length}` : "Готов к игре?"}
            </span>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <span className="text-yellow-400">⭐</span>
              <span className="font-bold">
                {score} / {gameData.length}
              </span>
            </div>
          </div>

          <div className="min-h-32 bg-white/10 rounded-2xl p-6 mb-6 flex items-center justify-center text-center">
            {!started && !finished && (
              <p className="text-white/60 italic">
                Нажми «Начать игру», чтобы получить первый текст!
              </p>
            )}
            {started && !feedback && (
              <p className="text-white leading-relaxed text-lg italic">
                "{gameData[current].text}"
              </p>
            )}
            {feedback && (
              <div className="text-center">
                <div className="text-4xl mb-2">{feedback.correct ? "✅" : "❌"}</div>
                <p
                  className={`font-bold text-lg ${
                    feedback.correct ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {feedback.correct ? "Верно!" : "Неверно!"}
                </p>
                <p className="text-white/70 text-sm mt-1">{feedback.explanation}</p>
              </div>
            )}
            {finished && (
              <div className="text-center">
                <div className="text-5xl mb-3">🎯</div>
                <p className="font-bold text-xl mb-1">
                  Игра окончена! Счёт: {finalScore} из {gameData.length}
                </p>
                <p className="text-white/70">{finalMsg}</p>
              </div>
            )}
          </div>

          {started && !feedback && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => checkAnswer("human")}
                className="py-4 rounded-2xl font-bold bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
              >
                <span>👤</span> Человек
              </button>
              <button
                onClick={() => checkAnswer("ai")}
                className="py-4 rounded-2xl font-bold bg-orange-500 hover:bg-orange-400 transition-colors flex items-center justify-center gap-2"
              >
                <span>🤖</span> ИИ
              </button>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={startGame}
              className="px-8 py-3 rounded-2xl font-bold gradient-primary hover:opacity-90 transition-opacity"
            >
              {finished || !started ? "Начать игру" : "Начать заново"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
