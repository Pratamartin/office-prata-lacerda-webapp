import Image from "next/image";

export function SectionAbout() {
	const advogados = [
		{
			nome: "Débora Lira de Lacerda",
			foto: '/deb.jpg',
			sobre: "Especialista em Direito Civil."
		},
		{
			nome: "Lucimar Prata dos Santos",
			foto: "/lucy.jpg",
			sobre: "Advogada e cofundadora do escritório Prata, Lacerda e Videira Advogadas. Formada em Direito pela UEA, com Mestrado em Direito Internacional dos Direitos Humanos pela University of Sussex (Chevening Scholar), pós-graduação em Direitos dos Refugiados pela University of Oxford e em Direito Socioambiental e Justiça Ambiental pela University of Cambridge. Atua com atendimento humanizado em responsabilidade civil, racismo, LGBTfobia, direito do consumidor e direito de família, além de experiência em controladoria jurídica e planejamento estratégico."
		},
		{
			nome: "Ketlen Rayane Videira de Souza",
			foto: "/videira.PNG",
			sobre: "Focado em Direito Criminal, com histórico de casos de alta complexidade."
		}
	];

	return (
		<section className="w-full bg-center bg-white text-white border-t border-t-gray-200 py-12">
			<div className="max-w-5xl mx-auto px-6 text-center'">
				<p className="text-2xl font-medium text-purple mb-4">
					Nossas Advogadas
				</p>
				<h2 className="text-4xl font-bold text-center mb-8 text-black">Advogadas</h2>				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{advogados.map((advogado, index) => (
						<div key={index} className="flex flex-col items-center text-center bg-white text-gray-600 p-4 rounded-lg shadow-lg">
							<Image
								src={advogado.foto}
								alt={`Foto de ${advogado.nome}`}
								width={150}
								height={150}
								className="rounded-full mb-4"
							/>
							<h3 className="text-xl font-semibold">{advogado.nome}</h3>
							<p className="text-sm mt-2">{advogado.sobre}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
