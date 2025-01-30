import Image from "next/image";

export function SectionAbout() {
	const advogados = [
		{
			nome: "Debora",
			foto: '/deb.jpg',
			sobre: "Especialista em Direito Civil com mais de 15 anos de experiência."
		},
		{
			nome: "Lucy",
			foto: "/lucy.jpg",
			sobre: "Atuação em Direito Trabalhista, ajudando empresas e funcionários."
		},
		{
			nome: "Videira",
			foto: "/videira.png",
			sobre: "Focado em Direito Criminal, com histórico de casos de alta complexidade."
		}
	];

	return (
		<section className="w-full bg-green-actived text-white py-12">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-8">Advogadas</h2>
				<p className="text-center mb-12">
					Nosso escritório é composto por uma equipe de advogados especializados em diferentes áreas do direito,
					dedicados a oferecer uma assistência jurídica personalizada e de alta qualidade.
				</p>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{advogados.map((advogado, index) => (
						<div key={index} className="flex flex-col items-center text-center bg-white text-gray-800 p-4 rounded-lg shadow-lg">
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
