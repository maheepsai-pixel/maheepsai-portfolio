export default function Footer() {
  return (
    <footer
      className="border-t py-10 px-6 text-center"
      style={{ borderColor: "rgba(99,102,241,0.12)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="gradient-text text-xl font-bold mb-3">Maheepsai Jinka</div>
        <p className="text-[#8888a8] text-sm mb-4">
          Product Manager · Data Analytics · Manufacturing Engineering
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:maheepsaij@gmail.com"
            className="text-[#8888a8] hover:text-[#a5b4fc] transition-colors text-sm"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/maheep-j-1b3406185/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888a8] hover:text-[#a5b4fc] transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="tel:+15139543525"
            className="text-[#8888a8] hover:text-[#a5b4fc] transition-colors text-sm"
          >
            Phone
          </a>
        </div>
        <div
          className="w-16 h-px mx-auto mb-4"
          style={{ background: "rgba(99,102,241,0.3)" }}
        />
        <p className="text-[#555570] text-xs">
          © {new Date().getFullYear()} Maheepsai Jinka. Built with Next.js, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
