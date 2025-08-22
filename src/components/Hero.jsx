import React from "react";
import heroImg from "../assets/img/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();
  return (
    <section className="relative h-64 md:h-96">
      <img
        src={heroImg}
        alt="Featured Plan"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Downloadable House Plans, Instantly
        </h1>
        <button
          onClick={() => nav("/catalog")}
          className="mt-4 bg-blue-500 px-6 py-2 rounded"
        >
          Browse Plans
        </button>
      </div>
    </section>
  );
}
