import { motion } from "framer-motion";
import { experience } from "../data/projects";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12 lg:px-10 lg:py-0">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between border-b border-line pb-5">
          <h2 className="display text-3xl md:text-4xl">Experience</h2>
        </div>

        <div className="mt-5 space-y-12">
          {experience.map((job) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="grid gap-4 md:grid-cols-[16rem_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-[0.72rem] tracking-wide text-faint">
                  {job.period}
                  {job.current && (
                    <span className="ml-2 text-accent">● current</span>
                  )}
                </p>
                <p className="mt-2 text-[0.8rem] text-faint">{job.place}</p>
              </div>

              <div>
                <h3 className="text-lg text-text">{job.role}</h3>
                <p className="mt-1 font-mono text-[0.8rem] text-accent">
                  {job.org}
                </p>
                <ul className="mt-0 space-y-3">
                  {job.points.map((pt, i) => (
                    <li
                      key={i}
                      className="text-[0.95rem] leading-relaxed text-muted"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
