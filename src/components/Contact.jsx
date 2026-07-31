import { useState } from "react";

const ACCESS_KEY = "8b7c6f5c-5f7a-4858-967a-3dd5f0378549";

const field =
  "w-full border border-line bg-surface px-3.5 py-2.5 text-[0.92rem] text-text placeholder:text-faint focus:border-accent focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${data.name}`,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-12 lg:px-10 lg:py-4">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-line pb-5">
          <h2 className="display text-3xl md:text-4xl">Get in touch</h2>
        </div>

        <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="max-w-md text-[1.05rem] leading-relaxed text-muted">
              I&rsquo;m looking for a Summer 2027 software engineering
              internship. If you&rsquo;re hiring, or you just want to argue about
              retrieval evaluation, the form works and so does email.
            </p>

            <dl className="mt-10 space-y-5">
              {[
                ["Email", "nithilan7437@gmail.com", "mailto:nithilan7437@gmail.com"],
                ["GitHub", "github.com/Nithilan77", "https://github.com/Nithilan77"],
                [
                  "LinkedIn",
                  "linkedin.com/in/nithilan-s",
                  "https://www.linkedin.com/in/nithilan-s-4496a6318/",
                ],
                ["Resume", "Nithilan-S-Resume.pdf", "/Nithilan-S-Resume.pdf"],
              ].map(([label, text, href]) => (
                <div key={label}>
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-1">
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-[0.85rem] text-text"
                    >
                      {text}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow">Name</label>
                <input id="name" name="name" required className={`${field} mt-2`} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">Email</label>
                <input id="email" name="email" type="email" required className={`${field} mt-2`} placeholder="you@company.com" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="eyebrow">Message</label>
              <textarea id="message" name="message" rows="6" required className={`${field} mt-2 resize-y`} placeholder="What's this about?" />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-accent bg-accent px-5 py-2.5 font-mono text-[0.78rem] tracking-wide text-bg transition-opacity hover:opacity-85 disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="font-mono text-[0.78rem] text-accent">
                  Sent. I&rsquo;ll reply within a couple of days.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-[0.78rem] text-muted">
                  That didn&rsquo;t go through. Email{" "}
                  <a href="mailto:nithilan7437@gmail.com" className="text-accent underline">
                    nithilan7437@gmail.com
                  </a>{" "}
                  instead.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
