'use client';

import { SectionAbout } from '@/components/section-about';

export default function About() {
  return (
    <div className="w-full bg-white text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-2xl font-medium text-purple mb-4">
					Nossa História
				</p>
        <h2 className="text-4xl font-bold mb-6 text-black"> Prata, Lacerda & Videira Advogadas</h2>
        <p className="text-lg text-gray-600">
          O Prata, Lacerda & Videira Advogadas é um escritório de advocacia fundado em agosto de 2022, especializado no atendimento de demandas de média e alta complexidade nas áreas do direito civil, previdenciário e ambiental. Com um compromisso com a excelência jurídica, oferece um atendimento personalizado e humanizado a nível nacional. Sua missão é defender os direitos fundamentais na Amazônia, garantindo que sejam acessíveis a todos e promovendo a justiça de forma inclusiva e eficaz.
        </p>
      </div>
      <div className='py-5'/>
      <SectionAbout />
    </div>
  );
}
