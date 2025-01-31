'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoImg from '/public/logo_melhor.png';
import { FiMenu, FiX } from "react-icons/fi";
import { GridContainer } from "../grid";

const arrayMenu = [
	'Início',
	'Sobre nós',
	'Áreas de atuação',
	'Contato',
];

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const activedStyle = 'bg-gray-200 text-opacity-100 rounded-full';

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<header className="relative w-full h-24 bg-white flex items-center shadow-md">
			<GridContainer className="flex items-center justify-between w-full px-4">
				<div className="flex items-center lg:hidden">
					<button
						className="text-left"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <FiX size={24} color="#9454ad" /> : <FiMenu size={24} color="#9454ad" />}
					</button>
				</div>
				<div className={`flex items-center flex-grow transition-all ${isMobile ? 'justify-center' : 'justify-start'}`}>
					<Image 
						src={LogoImg} 
						alt="logo" 
						className="w-75 h-auto" 
					/>
				</div>
				<div className="hidden lg:flex items-center gap-6">
					<nav className="flex gap-6">
						{arrayMenu.map((item, index) => (
							<Link
								key={index}
								href="#"
								className={`px-3 py-1 text-purple text-opacity-40 hover:text-opacity-100 transition-all ${index === 0 ? activedStyle : ''}`}
							>
								{item}
							</Link>
						))}
					</nav>
				</div>
			</GridContainer>
			{isMenuOpen && (
				<div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
					<nav className="flex flex-col items-center gap-4">
						{arrayMenu.map((item, index) => (
							<Link
								key={index}
								href="#"
								className="text-purple text-opacity-40 hover:text-opacity-100 transition-all"
							>
								{item}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
