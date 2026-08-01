import { useState } from "react";

const specs = [
  ["Focus", "AI · Systems"],
  ["Rank", "13 / 141"],
  ["CGPA", "8.511"],
  ["Seeking", "2027 Summer Internship"],
];

function Portrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // No portrait.jpg found — drop one into public/img/portrait.jpg to replace this.
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-full border border-dashed border-line bg-surface sm:aspect-4/5 sm:rounded-none">
        <span className="display text-4xl text-line select-none sm:text-6xl">
          NS
        </span>
      </div>
    );
  }

  return (
    <img
      src="/img/portrait.jpg"
      alt="Nithilan S"
      onError={() => setFailed(true)}
      className="aspect-square w-full rounded-full border border-line object-cover object-top grayscale-[35%] sm:aspect-4/5 sm:rounded-none sm:object-center"
    />
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-28 pb-12 lg:px-10 lg:pt-24 lg:pb-0">
      <div className="mx-auto grid max-w-6xl items-end gap-8 sm:grid-cols-[1fr_minmax(9rem,20rem)] sm:gap-10 lg:gap-16">
        <div>
          <p className="eyebrow">Software engineer · Chennai, India</p>

          <h1 className="display mt-6 text-[clamp(2.6rem,7vw,5.2rem)]">
            Nithilan S
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            I am interested in LLM and retrieval systems, and the distributed
            infrastructure that keeps them standing up — and I measure whether
            they actually work.
          </p>

          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-4">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1.5 font-mono text-[0.82rem] text-text">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="border border-accent bg-accent px-5 py-2.5 font-mono text-[0.78rem] tracking-wide text-bg transition-opacity hover:opacity-85"
            >
              Projects
            </a>
            <a
              href="/Nithilan-S-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line px-5 py-2.5 font-mono text-[0.78rem] tracking-wide text-text transition-colors hover:border-accent hover:text-accent"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <div className="order-first w-28 sm:order-none sm:w-auto sm:max-w-none">
          <Portrait />
          <p className="eyebrow mt-3 hidden sm:block">B.Tech IT · SSN College of Engineering</p>
        </div>
      </div>
    </section>
  );
}
