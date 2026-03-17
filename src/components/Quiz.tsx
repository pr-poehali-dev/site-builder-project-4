import { useState } from "react";

const questions = [
  {
    text: "1. Можно ли загружать фото одноклассников в нейросеть для создания аватарок?",
    options: [
      { value: "no", label: "Нет, это нарушение приватности" },
      { value: "yes", label: "Да, если они не против" },
      { value: "maybe", label: "Только если фото смешные" },
    ],
    correct: "no",
    name: "q1",
  },
  {
    text: "2. Что делать, если ИИ выдал ответ, который кажется сомнительным?",
    options: [
      { value: "copy", label: "Скопировать и сдать учителю" },
      { value: "check", label: "Проверить информацию в учебнике или надежном источнике" },
      { value: "delete", label: "Удалить чат" },
    ],
    correct: "check",
    name: "q2",
  },
  {
    text: "3. Ученик попросил ИИ написать за него всё сочинение и сдал как своё. Это...",
    options: [
      { value: "ok", label: "Нормально — все так делают" },
      { value: "cheat", label: "Нечестно, это академический обман" },
      { value: "depends", label: "Зависит от оценки учителя" },
    ],
    correct: "cheat",
    name: "q3",
  },
  {
    text: "4. Какой главный риск при использовании ИИ-чатботов для домашних заданий?",
    options: [
      { value: "slow", label: "Он отвечает слишком медленно" },
      { value: "hallucination", label: "ИИ может выдавать правдоподобные, но ложные факты" },
      { value: "expensive", label: "Это стоит дорого" },
    ],
    correct: "hallucination",
    name: "q4",
  },
  {
    text: "5. Как правильно использовать ИИ в учёбе?",
    options: [
      { value: "replace", label: "Заменять им собственное мышление" },
      { value: "helper", label: "Как помощника для идей и проверки, но думать самому" },
      { value: "never", label: "Никак — ИИ запрещён в школах" },
    ],
    correct: "helper",
    name: "q5",
  },
  {
    text: "6. ИИ принял решение, которое оказалось несправедливым. Кто несёт ответственность?",
    options: [
      { value: "nobody", label: "Никто — ИИ сам по себе решил" },
      { value: "ai", label: "Только сам ИИ" },
      { value: "human", label: "Люди, которые создали и применили ИИ" },
    ],
    correct: "human",
    name: "q6",
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<null | { score: number; msg: string; color: string }>(null);

  const check = () => {
    if (Object.keys(answers).length < questions.length) {
      setResult({ score: -1, msg: "Пожалуйста, ответьте на все вопросы!", color: "text-red-500" });
      return;
    }
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.name] === q.correct) score++;
    });
    const total = questions.length;
    if (score === total) {
      setResult({ score, msg: `Отлично! ${score} из ${total} — вы эксперт по этике ИИ! 🎉`, color: "text-green-600" });
    } else if (score >= total - 2) {
      setResult({ score, msg: `Хороший результат! ${score} из ${total}. Стоит перечитать раздел «Рекомендации».`, color: "text-orange-500" });
    } else {
      setResult({ score, msg: `${score} из ${total}. Вам стоит внимательнее изучить риски использования ИИ.`, color: "text-red-500" });
    }
  };

  return (
    <section id="quiz" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Проверь себя
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Мини-<span className="text-gradient">викторина</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
          {questions.map((q) => (
            <div key={q.name} className="mb-8">
              <p className="font-bold text-gray-900 mb-4">{q.text}</p>
              <div className="space-y-3">
                {q.options.map((o) => {
                  const selected = answers[q.name] === o.value;
                  return (
                    <label
                      key={o.value}
                      className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                        selected
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : "bg-white border-transparent hover:border-indigo-200 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.name}
                        value={o.value}
                        className="hidden"
                        onChange={() => setAnswers((prev) => ({ ...prev, [q.name]: o.value }))}
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          selected ? "border-white bg-white" : "border-gray-300"
                        }`}
                      >
                        {selected && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                      </div>
                      <span className="text-sm font-medium">{o.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            onClick={check}
            className="w-full py-4 rounded-2xl font-bold text-white gradient-primary hover:opacity-90 transition-opacity glow-blue"
          >
            Узнать результат
          </button>

          {result && (
            <div className={`mt-6 p-4 bg-white rounded-2xl text-center font-bold text-lg ${result.color}`}>
              {result.score >= 0 && (
                <div className="text-4xl mb-2">
                  {result.score === questions.length ? "🏆" : result.score >= questions.length - 2 ? "👍" : "📚"}
                </div>
              )}
              {result.msg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}