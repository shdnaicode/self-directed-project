import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative">
        <main className="relative z-10 ml-20 flex min-h-screen flex-col gap-8 bg-transparent p-8 pt-44 font-normal text-[#242424]">
          <div className="flex flex-row items-start gap-16">
            {/* Profile Box */}
            <div className="relative flex h-[62vh] w-[30%] max-w-[95%] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
              <img className="bg-gray-300 rounded-lg h-24 w-24 ml-6 mt-7" src="" alt="Profile Picture"></img>
              <h1 className="pl-6 pt-7 mb-2 text-3xl font-semibold">
                Shindanai Sudprasert
              </h1>
              <p className="pl-6 mb-4 text-lg">@shindanai</p>
              <p className="pl-6 mb-10 text-base text-[#242424]">
                Joined Jan 1, 2025
              </p>
              <p className="pl-6 pt-1 max-w-xs text-[#242424]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>

            {/* Courses Section */}
            <section className="flex flex-col gap-5 w-[100vh]">
              {/* Enrolled Courses */}
              <div className="relative flex h-[30vh] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
                <h2 className="pl-5 pt-5 mb-2 text-2xl font-bold">
                  Enrolled Courses
                </h2>
                {/* Message outside padded heading */}
                <div className="flex flex-1 items-center justify-center text-gray-500 px-0">
                  No enrolled courses...
                </div>
              </div>

              {/* Completed Courses */}
              <div className="relative flex h-[30vh] flex-col overflow-hidden rounded-[10px] border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
                <h2 className="pl-5 pt-5 mb-2 text-2xl font-bold">
                  Completed Courses
                </h2>
                {/* Message outside padded heading */}
                <div className="mb-2 flex flex-1 items-center justify-center text-gray-500 px-0">
                  No completed courses...
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
