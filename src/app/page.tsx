"use client";

import { motion } from "framer-motion";
import { Book, Zap, Dumbbell, Cookie, Music } from "lucide-react";

const provas = [
  {
    titulo: "Corre Bíblia",
    descricao:
      "Você fala o nome de um personagem bíblico. Um representante de cada equipe corre até a mesa com 10 objetos e escolhe o que melhor representa o personagem.",
    exemplo: "Ex: Moisés → cajado / Jonas → peixe / Maria → véu",
    icone: Book,
    cor: "bg-blue-600",
  },
  {
    titulo: "Quiz Relâmpago",
    descricao:
      "5 perguntas rápidas (vale bater palma ou levantar a mão para responder).",
    icone: Zap,
    cor: "bg-yellow-500",
  },
  {
    titulo: "Desafios Malucos",
    descricao:
      "Ex: Quem traz 5 tênis esquerdos? Quem imita melhor um animal da Arca de Noé? Quem faz a melhor pose de oração no deserto?",
    icone: Dumbbell,
    cor: "bg-green-600",
  },
  {
    titulo: "Prova da Paçoca",
    descricao:
      "Quem comer o maior número de paçocas no menor tempo vence.",
    icone: Cookie,
    cor: "bg-pink-500",
  },
  {
    titulo: "Complete a Música",
    descricao:
      "Quando a música parar, complete a letra corretamente.",
    icone: Music,
    cor: "bg-purple-600",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 print:bg-white print:text-black">
      <h1 className="text-5xl font-bold text-center mb-12 print:text-4xl print:mb-8">
        📜 Provas das Dinâmicas
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-2">
        {provas.map((prova, i) => {
          const Icone = prova.icone;
          return (
            <motion.div
              key={prova.titulo}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`${prova.cor} text-white rounded-2xl shadow-lg p-6 flex flex-col gap-4
                          print:bg-white print:border print:border-gray-400 print:shadow-none print:text-black`}
            >
              <div className="flex items-center gap-4 print:gap-2">
                <Icone size={48} className="print:text-black" />
                <h2 className="text-3xl font-semibold print:text-2xl">{prova.titulo}</h2>
              </div>
              <p className="text-lg leading-relaxed print:text-base">
                {prova.descricao}
              </p>
              {prova.exemplo && (
                <p className="italic text-gray-200 print:text-gray-700">{prova.exemplo}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
