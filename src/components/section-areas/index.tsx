'use client'

import { useState } from "react";
import { GridContainer } from "../grid";

const areas = [
  { 
    title: "Contencioso Cível", 
    details:"Contencioso cível é a resolução judicial de conflitos em questões não criminais." 
  },
  { 
    title: "Direito Médico", 
    details: "Direito médico regula a relação entre profissionais de saúde, pacientes e instituições, abrangendo responsabilidade civil, ética e normas da área."
  },
  { 
    title: "Regularização de Imóveis", 
    details: "Regularização de imóveis é o processo legal para adequar um imóvel às normas urbanísticas e registrais, garantindo sua propriedade e uso correto." 
  },
  {
    title: "Responsabilidade Civil",
    details: "Responsabilidade civil é a obrigação de reparar danos causados a terceiros por ato ilícito ou negligência."

  },
  { 
    title: "Direito Ambiental", 
    details: "Direito ambiental é o ramo jurídico que regula a proteção, uso e conservação do meio ambiente." 
  },
  {
    title: "Consultaria e Compliance",
    details: "Consultoria e compliance envolvem a orientação e implementação de normas para garantir que empresas sigam leis e regulamentos, prevenindo riscos e irregularidades."  
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
