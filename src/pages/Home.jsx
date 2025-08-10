import Nav from "../components/Nav";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const user = {
    name: "Shindaani Sudprasert",
    username: "@shindanai",
    joined: "2025-01-01",
    profilePicture: "",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="relative z-10 ml-20 flex flex-grow flex-col gap-8 bg-transparent p-8 pt-44 font-normal text-[#242424]">
        <div className="flex flex-row items-start gap-16">
          <div className="relative flex h-[62vh] w-[30%] max-w-[95%] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
            <img
              className="bg-gray-300 rounded-lg h-24 w-24 ml-6 mt-7"
              src={user.profilePicture}
              alt="Profile Picture"
            />
            <h1 className="pl-6 pt-7 mb-1 text-3xl font-semibold">
              {user.name}
            </h1>
            <p className="pl-6 mb-4 text-lg">{user.username}</p>
            <p className="pl-6 mb-10 text-base text-[#242424]">
              Joined{" "}
              {new Date(user.joined).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="pl-6 pt-1 max-w-xs text-[#242424]">{user.bio}</p>
          </div>

          <section className="flex flex-col gap-5 w-[100vh]">
            <div className="relative flex h-[30vh] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
              <h2 className="pl-5 pt-5 mb-2 text-2xl font-bold">
                Enrolled Courses
              </h2>

              <div className="flex flex-1 items-center justify-center text-gray-500 px-0">
                No enrolled courses...
              </div>
            </div>

            <div className="relative flex h-[30vh] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
              <h2 className="pl-5 pt-5 mb-2 text-2xl font-bold">
                Completed Courses
              </h2>
              <div className="mb-2 flex flex-1 items-center justify-center text-gray-500 px-0">
                No completed courses...
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t-[1.3px] border-black/35 bg-white p-4 text-sm flex items-center justify-center gap-3 text-gray-700">
        <a
          href="https://github.com/shdnaicode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-black transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <span>© {new Date().getFullYear()} Shindanai Sudprasert</span>
        <a className="cursor-default select-none pointer-events-none">|</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="mailto:smartsoodprasert69@gmail.com" className="hover:underline">Contact</a>
      </footer>
    </div>
  );
}
