import { GridContainer } from "../grid";
import { FaWhatsapp } from "react-icons/fa";
import OfficeImg from '/public/office_with_ia.jpg';
import Image from "next/image";

export function SectionPhotos() {
	return (
		<section
			className="w-full bg-white bg-cover bg-center text-black border-t border-t-gray-200 py-12"
		>
			<GridContainer>
				<div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
					{/* Texto */}
					<div className="flex flex-col text-center md:text-left max-w-lg">
						<h2 className="text-3xl font-bold mb-4">Escritório de Advocacia</h2>
						<p className="text-lg font-medium mb-2">
							Assistência jurídica personalizada e profissional
						</p>
						<p className="text-sm text-black">
							Somos uma equipe de advogadas especialistas no atendimento direcionado às demandas de nossos clientes,
							buscando as melhores soluções no menor espaço de tempo e com o melhor custo-benefício.
						</p>
					</div>

					{/* Imagem */}
					<div className="flex-shrink-0">
						<Image
							src={OfficeImg}
							alt="Escritório de advocacia"
							className="rounded-lg shadow-lg"
							width={400}
							height={300}
						/>
					</div>
				</div>
			</GridContainer>
		</section>
	);
}
