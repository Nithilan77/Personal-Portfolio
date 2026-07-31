import { motion } from "framer-motion";
import { projects } from "../data/projects";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

function SpecTable({ rows }) {
  return (
    <table className="metrics">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <td>{label}</td>
            <td className="text-text">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CompareTable({ head, rows }) {
  return (
    <table className="metrics">
      <thead>
        <tr>{head.map((h) => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.cells[0]} data-shipped={r.shipped ? "true" : undefined}>
            {r.cells.map((c, i) => (
              <td key={i}>{i === 0 && r.shipped ? `${c} ← shipped` : c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Figure({ src, caption }) {
  return (
    <figure>
      {src ? (
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="w-full border border-line"
        />
      ) : (
        // Screenshot pending — drop the file in public/img/ and set `image` in src/data/projects.js
        <div className="flex aspect-16/9 w-full items-center justify-center border border-dashed border-line bg-surface">
          <span className="eyebrow">Screenshot to come</span>
        </div>
      )}
      <figcaption className="mt-3 font-mono text-[0.7rem] leading-relaxed text-faint">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between border-b border-line pb-5">
          <h2 className="display text-3xl md:text-4xl">Primary Projects</h2>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              {...reveal}
              className={i > 0 ? "border-t border-line pt-12 lg:pt-8" : ""}
            >
              <div>
                <div>
                  <p className="eyebrow">{p.domain}</p>
                  <h3 className="display mt-3 text-2xl md:text-[2rem]">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-2 py-0.5 font-mono text-[0.65rem] text-faint"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
                    <div>
                      <p className="text-[1.05rem] leading-relaxed text-muted">
                        {p.problem}
                      </p>

                      <div className="mt-6 space-y-4">
                        {p.body.map((para, j) => (
                          <p key={j} className="text-[0.95rem] leading-relaxed text-muted">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="border-t border-line pt-5">
                        <p className="eyebrow mb-4">Measured</p>
                        <div className="overflow-x-auto">
                          {p.metricsType === "compare" ? (
                            <CompareTable head={p.metricsHead} rows={p.metricsRows} />
                          ) : (
                            <SpecTable rows={p.metrics} />
                          )}
                        </div>
                        <p className="mt-3 font-mono text-[0.7rem] leading-relaxed text-faint">
                          {p.metricsCaption}
                        </p>
                      </div>

                      {p.note && (
                        <p className="mt-6 border-l-2 border-accent pl-4 text-[0.9rem] leading-relaxed text-muted italic">
                          {p.note}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`mt-10 grid items-start gap-6 ${
                      p.image2 ? "md:grid-cols-2" : ""
                    }`}
                  >
                    <Figure src={p.image} caption={p.imageCaption} />
                    {p.image2 && (
                      <Figure src={p.image2} caption={p.imageCaption2} />
                    )}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-6">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-[0.78rem] text-text"
                    >
                      Source ↗
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-mono text-[0.78rem] text-accent"
                      >
                        Live demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
