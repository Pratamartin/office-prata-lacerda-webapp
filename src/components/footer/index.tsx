'use client'

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-center bg-purple-900 text-black border-t border-t-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contatos</h3>
          <p>Email: prataelacerdaadv@gmail.com</p>
          <p>Telefone: (92) 98617-6350</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/pratalacerdaevideiraadvocacia/" className="text-purple text-2xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/prata-e-lacerda-advogadas-3a0582266/" className="text-purple text-2xl hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/+5592986176350 " className="text-purple text-2xl hover:text-gray-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Início</a></li>
            <li><a href="#" className="hover:text-gray-300">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-gray-300">Áreas de Atuação</a></li>
            <li><a href="#" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6 border-t border-t-gray-200 pt-4">
        &copy; {new Date().getFullYear()} Prata. Lacerda & Videira. Todos os direitos reservados.
      </div>
    </footer>
  );
}