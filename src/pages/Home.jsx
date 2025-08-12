import Nav from "../components/Nav";
import Footer from "../components/Footer"
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const user = {
    name: "Shndnaicode",
    joined: "2025-01-01",
    profilePicture: "",
    bio: "Welcome to my site!",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="relative z-10 ml-20 flex flex-grow flex-col gap-8 bg-transparent p-8 pt-44 font-normal text-[#242424]">
        <div className="flex flex-row items-start gap-16">
          <div className="relative flex h-[62vh] w-[25%] max-w-[95%] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
            <div className="mt-7 ml-6">
              {user.profilePicture ? (
                <img
                  className="h-24 w-24 rounded-lg object-cover"
                  src={user.profilePicture}
                  alt={`${user.name} profile picture`}
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gray-400 text-4xl font-semibold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <h1 className="mb-3 pt-7 pl-6 text-3xl font-semibold">
              {user.name}
            </h1>
            <p className="mb-10 pl-6 text-base font-normal text-[#242424]">
              Joined{" "}
              {new Date(user.joined).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="max-w-xs pt-1 pl-6 text-[#242424]">{user.bio}</p>
          </div>

          <section className="flex w-[100vh] flex-col gap-5">
            <div className="relative flex h-[30vh] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
              <h2 className="mb-2 pt-5 pl-5 text-2xl font-bold">
                Enrolled Courses
              </h2>

              <div className="flex flex-1 items-center justify-center px-0 text-gray-500">
                No enrolled courses...
              </div>
            </div>

            <div className="relative flex h-[30vh] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
              <h2 className="mb-2 pt-5 pl-5 text-2xl font-bold">
                Completed Courses
              </h2>
              <div className="mb-2 flex flex-1 items-center justify-center px-0 text-gray-500">
                No completed courses...
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Footer are to be added here */}
    </div>
  );
}