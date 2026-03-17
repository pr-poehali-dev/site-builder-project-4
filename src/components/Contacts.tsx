import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Связь
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Обратная <span className="text-gradient">связь</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Есть вопросы или идеи?</h3>
            <p className="text-gray-500 mb-6">Напишите нам, чтобы улучшить этот проект.</p>

            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <p className="font-bold text-xl text-gray-900">Спасибо!</p>
                <p className="text-gray-500 mt-1">Ваше сообщение отправлено.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-indigo-100 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900 placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-indigo-100 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900 placeholder-gray-400"
                />
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-indigo-100 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900 placeholder-gray-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-white gradient-primary hover:opacity-90 transition-opacity glow-blue"
                >
                  Отправить
                </button>
              </form>
            )}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center text-5xl mb-6">
              🎓
            </div>
            <h3 className="text-2xl font-bold mb-2">Автор проекта</h3>
            <p className="text-white/60 mb-1">Ученик 10 класса</p>
            <p className="text-white/60 mb-8">Школа №___</p>

            <div className="bg-white rounded-2xl p-3">
              <QRCodeSVG
                value="https://preview--site-builder-project-4.poehali.dev/"
                size={148}
                bgColor="#ffffff"
                fgColor="#1e1b4b"
                level="M"
              />
            </div>
            <p className="mt-3 text-white/40 text-xs">Отсканируй, чтобы открыть сайт</p>

            <div className="mt-8 flex gap-4">
              {["💡", "🔬", "🤖"].map((e, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl hover:bg-white/20 transition-colors cursor-default"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}