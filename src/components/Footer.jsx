export default function Footer() {
  return (
    <>
      <footer className="mb-5 flex items-center justify-center gap-3 text-sm text-gray-700">
        <a
          href="https://github.com/shdnaicode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="transition-colors hover:text-black"
        >
          <FaGithub size={24} />
        </a>
        <span>© {new Date().getFullYear()} Shindanai Sudprasert</span>
        <span className="pointer-events-none cursor-default select-none">
          |
        </span>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a
          href="mailto:smartsoodprasert69@gmail.com"
          className="hover:underline"
        >
          Contact
        </a>
      </footer>
    </>
  );
}
