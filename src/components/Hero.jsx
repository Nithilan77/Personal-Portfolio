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
    <section id="top" className="px-6 pt-28 pb-12 lg:px-10 lg:pt-32 lg:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-[7rem_1fr] items-end gap-x-5 gap-y-6 sm:grid-cols-[1fr_minmax(9rem,18rem)] sm:gap-x-10 sm:gap-y-0 lg:gap-x-16">
        {/* portrait: beside the name on phones, its own column from sm up */}
        <div className="col-start-1 row-start-1 self-center sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-end">
          <Portrait />
          <p className="eyebrow mt-3 hidden sm:block">
            B.Tech IT · SSN College of Engineering
          </p>
        </div>

        {/* name block */}
        <div className="col-start-2 row-start-1 self-center sm:col-start-1 sm:self-end">
          <p className="eyebrow">Software engineer · Chennai, India</p>

          <h1 className="display mt-2 text-[clamp(2rem,9vw,5.2rem)] sm:mt-6">
            Nithilan S
          </h1>
        </div>

        {/* everything below spans the full width on phones */}
        <div className="col-span-2 row-start-2 sm:col-span-1 sm:col-start-1 sm:row-start-2">
          <p className="mt-0 max-w-xl text-lg leading-relaxed text-muted sm:mt-5 md:text-xl">
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
      </div>
    </section>
  );
}