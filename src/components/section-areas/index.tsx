'use client'

import { useState } from "react";
import { GridContainer } from "../grid";

const areas = [
  { 
    title: "Contencioso Cível", 
    details:"Peças Inagurais Inicial e Defesa Audiências e Sustentação Oral | Recursos em tribunais de 2ª instância e Superiores." 
  },
  { 
    title: "Direito Médico", 
    details: "Atendimento preventivo para consultórios, clínicas e profissionais autônomos."
  },
  { 
    title: "Regularização de Imóveis", 
    details: " Consultoria Jurídica | Usucapião | Adjudicação Compulsória | Procedimento extrajudicial." 
  },
  {
    title: "Responsabilidade Civil",
    details: "Acidentes e doenças do trabalho | Erro médico | Violência contra mulher | Racismo."

  },
  { 
    title: "Direito Ambiental", 
    details: "Defesas administrativas ambientais | Defesas judiciais ambientais | Compliance ambiental para empresas." 
  },
  {
    title: "Consultaria e Compliance",
    details: "Consultoria em projetos de diversidade | Treinamentos | Compliance em questão de gênero, sexualidade e racial."  
  }
];

export function SectionAreas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white bg-cover bg-center text-black border-t border-t-gray-200 py-12">
      <GridContainer>
        <div className="flex flex-col items-center text-center gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col max-w-lg">
            <p className="text-2xl font-medium text-purple mb-4">
              Áreas de Atuação
            </p>
            <h1 className="md:leading-[72px] py-2 md:text-5xl text-5xl font-semibold">
              Conheça nossas especialidades
            </h1>
            <p className="text-lg text-gray-600">
              Oferecemos assistência jurídica especializada em diversas áreas, garantindo suporte personalizado e eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full">
            {areas.map((area, index) => (
              <div
                key={index}
                className="relative w-full h-48 p-6 cursor-pointer bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                onClick={() => toggleCard(index)}
              >
                <h2 className="text-xl font-semibold">{area.title}</h2>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-700">{area.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
