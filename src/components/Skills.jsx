import { skills } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-12 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-line pb-5">
          <h2 className="display text-3xl md:text-4xl">Skills</h2>
        </div>

        <dl className="mt-0 divide-y divide-line border-b border-line">
          {skills.map(({ group, items }) => (
            <div
              key={group}
              className="grid gap-3 py-6 md:grid-cols-[16rem_1fr] md:gap-10"
            >
              <dt className="eyebrow pt-1">{group}</dt>
              <dd className="flex flex-wrap gap-x-2 gap-y-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-2.5 py-1 font-mono text-[0.72rem] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
