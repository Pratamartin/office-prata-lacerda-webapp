'use client'

import { useState, useEffect } from "react";
import { GridContainer } from "../grid";
import { Carousel } from "../carousel";

const images = [
	{ src: "/founders.jpg", alt: "founders" },
	{ src: "/deb.jpg", alt: "Debora" },
	{ src: "/lucy.jpg", alt: "Lucimar" },
];

export function SectionPhotos() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<section className="w-full bg-white bg-cover bg-center text-black border-t border-t-gray-200 py-12">
			<GridContainer>
				<div className={`flex ${isMobile ? 'flex-col items-center text-center' : 'flex-row text-left'} gap-8 max-w-6xl mx-auto`}>
					<div className="flex flex-col max-w-lg">
						<p className="text-2xl font-medium text-purple mb-4">
							Escritório de Advocacia
						</p>
						<h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
							Assistência jurídica personalizada e profissional
						</h1>
						<p className="text-lg text-gray-600">
							Somos uma equipe de advogadas especialistas no atendimento direcionado às demandas de nossos clientes,
							buscando as melhores soluções no menor espaço de tempo e com o melhor custo-benefício.
						</p>
					</div>
					<Carousel images={images} />
				</div>
			</GridContainer>
		</section>
	);
}

