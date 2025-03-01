'use client';

import { useState } from 'react';
import { Download, Link as LinkIcon } from 'lucide-react';

const articles = [
  { title: "Direito Previdenciário - Guia Completo", link: "/pdfs/direito-previdenciario.pdf", type: "pdf" },
  { title: "Justiça Ambiental e Direitos Fundamentais", link: "/pdfs/justica-ambiental.pdf", type: "pdf" },
  { title: "Reforma Trabalhista e seus Impactos", link: "https://exemplo.com/reforma-trabalhista", type: "link" },
];

export default function ArticlesPage() {
  return (
    <div className="w-full bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-2xl font-medium text-purple mb-4">
					Artigos e Publicações
				</p>
        <h2 className="text-4xl font-semibold mb-6 text-black">Conheça mais sobre nossas contribuições no mundo do direito</h2>
        <p className="text-lg text-gray-600">
          Explore nossos artigos jurídicos e faça o download de materiais informativos sobre direito civil, previdenciário e ambiental.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        {articles.map((article, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-xl mb-4 shadow-sm">
            <span className="text-lg font-medium text-gray-800">{article.title}</span>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple hover:text-purple-700"
              download={article.type === "pdf"}
            >
              {article.type === "pdf" ? <Download size={20} /> : <LinkIcon size={20} />}
              {article.type === "pdf" ? "Baixar PDF" : "Acessar"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
