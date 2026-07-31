export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[0.72rem] text-faint">
          © {new Date().getFullYear()} Nithilan S · Chennai, India
        </p>
      </div>
    </footer>
  );
}
