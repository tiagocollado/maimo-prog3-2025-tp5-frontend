"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Monitor,
  Server,
  Database,
} from "lucide-react";

export default function AboutPage() {
  const misFavoritos = [
    {
      name: "David Gilmour",
      role: "La Melodía Infinita",
      image: "/images/artists/david-gilmour.jpg",
      slug: "david-gilmour",
    },
    {
      name: "Gustavo Cerati",
      role: "El Arquitecto Sónico",
      image: "/images/artists/gustavo-cerati.jpg",
      slug: "gustavo-cerati",
    },
    {
      name: "Luis Alberto Spinetta",
      role: "El Poeta de la Luz",
      image: "/images/artists/spinetta.jpg",
      slug: "luis-alberto-spinetta",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Sobre el <span className="text-amber-500">Proyecto</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un desarrollo académico nacido de la pasión por la música y la
            tecnología.
          </p>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 shadow-xl backdrop-blur-sm relative overflow-hidden hover:border-amber-500/30 transition-colors duration-300">
           <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-40 h-40 relative rounded-full border-4 border-amber-500/20 overflow-hidden flex-shrink-0 shadow-lg bg-neutral-700 group">
              {/* <img src="/images/me.jpg" alt="Tiago Collado" className="w-full h-full object-cover" /> */}
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-amber-500/80 group-hover:text-amber-500 transition-colors">
                TC
              </div>
            </div>

            <div className="text-center md:text-left space-y-4 flex-1">
              <div>
                <h2 className="text-3xl font-bold text-white">Tiago Collado</h2>
                <p className="text-amber-500 font-medium text-lg">Diseñador UX/UI</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-gray-400 text-sm border-t border-neutral-700 pt-4">
                <p><span className="font-semibold text-gray-300 block">Universidad</span> Universidad Maimónides</p>
                <p><span className="font-semibold text-gray-300 block">Materia</span> Programación Multimedial III</p>
                <p><span className="font-semibold text-gray-300 block">Docente</span> Leandro Amaro</p>
                <p><span className="font-semibold text-gray-300 block">Año</span> 2025</p>
              </div>

              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <a 
                  href="https://github.com/tiagocollado" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-700 rounded-full hover:bg-amber-500 hover:text-neutral-900 transition-all hover:scale-110 cursor-pointer"
                  title="Ver GitHub"
                >
                  <Github size={24} />
                </a>

                <a 
                  href="https://www.linkedin.com/in/tiagocollado/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-700 rounded-full hover:bg-amber-500 hover:text-neutral-900 transition-all hover:scale-110 cursor-pointer"
                  title="Ver LinkedIn"
                >
                  <Linkedin size={24} />
                </a>

                <a 
                  href="mailto:tiago.collado@gmail.com" 
                  className="p-2 bg-neutral-700 rounded-full hover:bg-amber-500 hover:text-neutral-900 transition-all hover:scale-110 cursor-pointer"
                  title="Enviar Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-l-4 border-amber-500 pl-4">
            Stack Tecnológico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 flex items-center gap-3 hover:border-amber-500/50 transition-colors">
              <Monitor className="text-blue-400" />
              <div>
                <h4 className="font-bold text-white">Frontend</h4>
                <p className="text-sm text-gray-400">
                  Next.js, React, Tailwind CSS
                </p>
              </div>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 flex items-center gap-3 hover:border-amber-500/50 transition-colors">
              <Server className="text-green-400" />
              <div>
                <h4 className="font-bold text-white">Backend</h4>
                <p className="text-sm text-gray-400">Node.js, Express</p>
              </div>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 flex items-center gap-3 hover:border-amber-500/50 transition-colors">
              <Database className="text-amber-400" />
              <div>
                <h4 className="font-bold text-white">Base de Datos</h4>
                <p className="text-sm text-gray-400">MongoDB Atlas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl font-bold border-l-4 border-amber-500 pl-4">
              Mis Héroes del Tono
            </h3>
            <p className="text-sm text-gray-400 italic">
              Estos son los artistas que inspiraron este proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {misFavoritos.map((artista) => (
              <a
                key={artista.slug}
                href={`/artists/${artista.slug}`}
                className="group block bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artista.image}
                    alt={artista.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                    {artista.name}
                  </h4>
                  <p className="text-sm text-gray-400">{artista.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
