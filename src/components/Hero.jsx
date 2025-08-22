import { Link } from "react-router-dom";

const HERO =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="relative text-center">
      <div className="relative h-64 md:h-[480px]">
        <img
          src={HERO}
          alt="Architectural exterior"
          className="object-cover w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow">
            Downloadable House Plans, Instantly
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Browse modern, ranch, tiny homes, duplexes and more. Clear licensing
            and instant delivery.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/catalog" className="btn btn-primary">
              Browse Plans
            </Link>
            <Link to="/services" className="btn btn-outline">
              Request Custom Design
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
