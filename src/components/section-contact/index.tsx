"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    areaAtuacao: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    setMessage(result.message);
    setLoading(false);
    
  };

  return (
    <section className="bg-white bg-cover bg-center border-t border-t-gray py-12 text-purple py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">Fale com a Prata. Lacerda & Videira</h2>
        <div className="w-24 h-1 bg-purple mx-auto mt-2"></div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Ex.: Maria da Silva"
            value={form.nome}
            onChange={handleChange}
            className="w-full bg-white text-black p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ex.: maria@email.com"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white text-black p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Ex.: (92) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            className="w-full bg-white text-black p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />
        </div>
        <select
          name="areaAtuacao"
          value={form.areaAtuacao}
          onChange={handleChange}
          className="w-full bg-white text-black p-3 rounded-md border border-gray-700 focus:outline-none mt-4"
          required
        >
          <option value="" disabled>
            Selecione a área de atuação
          </option>
          <option value="Contencioso Cível">Contencioso Cível</option>
          <option value="Direito do Consumidor">Direito do Consumidor</option>
          <option value="Regularização de Imóveis">Regularização de Imóveis</option>
          <option value="Responsabilidade Civil">Responsabilidade Civil</option>
          <option value="Direito Previdenciário">Direito Previdenciário</option>
          <option value="Consultoria e Compliance">Consultoria e Compliance</option>
        </select>
        <textarea
          name="mensagem"
          placeholder="Ex.: Gostaria de orientação sobre aposentadoria e agendar uma consulta."
          value={form.mensagem}
          onChange={handleChange}
          className="w-full bg-white text-black p-3 rounded-md border border-gray-700 focus:outline-none mt-4 h-32"
          required
        ></textarea>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-purple text-white w-full md:w-auto px-6 py-3 rounded-md text-lg font-bold"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>

        {message && (
          <p className="text-center text-green-600 mt-4">{message}</p>
        )}
      </form>
    </section>
  );
};

export default ContactSection;
