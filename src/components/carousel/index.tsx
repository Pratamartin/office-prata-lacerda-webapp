'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface CarouselProps {
	images: { src: string; alt: string }[];
}

export function Carousel({ images }: CarouselProps) {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={20}
			loop={true}
			navigation = {true}
			pagination={{ clickable: true }}
			className="rounded-lg shadow-lg max-w-full "
		>
			{images.map((image, index) => (
				<SwiperSlide key={index} className="flex justify-center">
					<div className="w-full max-w-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
						<Image
							src={image.src}
							alt={image.alt}
							className="w-full max-h-[400px] h-auto object-contain rounded-lg"
							width={600}
							height={400}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
