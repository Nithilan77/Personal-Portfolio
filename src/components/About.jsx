import { education } from "../data/projects";
import Certifications from "./Certifications";

export default function About() {
  return (
    <section id="about" className="px-6 py-12 lg:px-10 lg:py-4">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-line pb-5">
          <h2 className="display text-3xl md:text-4xl">About</h2>
        </div>

        <div className="mt-5 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              I&rsquo;m an Information Technology undergraduate at SSN College of
              Engineering in Chennai, currently a research intern at NIT
              Tiruchirappalli working on LLM reasoning and retrieval-augmented
              question answering. Most of my work sits where applied AI meets
              backend engineering — retrieval pipelines, model evaluation, and
              the distributed infrastructure that has to hold them up in
              production.
            </p>
            <p>
              What I care about is the part after the demo works. A pipeline that
              answers correctly once tells you very little; an evaluation harness
              you can re-run after every change tells you whether the last thing
              you did helped. That&rsquo;s the habit I&rsquo;ve tried to build
              into every project here — a fixed question set, a metric, and a
              record of what the numbers said even when they disagreed with me.
            </p>
            <p>
              I&rsquo;m looking for a Summer 2027 software engineering
              internship, ideally on applied AI, retrieval, or the backend
              infrastructure that machine learning systems run on.
            </p>
          </div>

          <div>
            <p className="eyebrow">Education</p>
            <div className="mt-6 space-y-8">
              {education.map((e) => (
                <div key={e.school} className="border-l border-line pl-5">
                  <p className="font-mono text-[0.72rem] text-faint">
                    {e.period}
                  </p>
                  <h3 className="mt-2 text-[0.98rem] text-text">{e.school}</h3>
                  <p className="mt-1 text-[0.88rem] text-muted">{e.detail}</p>
                  <div className="mt-3 flex gap-6">
                    {e.stats.map(([k, v]) => (
                      <div key={k}>
                        <span className="eyebrow">{k}</span>
                        <p className="mt-0.5 font-mono text-[0.82rem] text-accent">
                          {v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="eyebrow">Activities</p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">
                Core member of the Open Source Software Club at SSN Coding Club.
                Co-organised FunOverflow, a three-round college-wide event, in
                September 2025.
              </p>
            </div>

            <Certifications />
          </div>
        </div>
      </div>
    </section>
  );
}
