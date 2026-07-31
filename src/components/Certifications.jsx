import { useState } from "react";
import certs from "../data/certifications.json";

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const total = Object.values(certs).reduce((n, g) => n + g.length, 0);

  return (
    <div className="mt-10">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between border-t border-line pt-4 text-left"
      >
        <span className="eyebrow">Certifications ({total})</span>
        <span className="font-mono text-sm text-muted">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-5 space-y-6">
          {Object.entries(certs).map(([group, items]) => (
            <div key={group}>
              <p className="font-mono text-[0.7rem] text-faint">
                {group.replace(" Certifications", "")}
              </p>
              <ul className="mt-2 space-y-1.5">
                {items.map((c) => (
                  <li key={c.path}>
                    <a
                      href={c.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[0.85rem] text-muted hover:text-text"
                    >
                      {c.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
