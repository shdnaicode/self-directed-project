import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative">

        <main className="relative z-10 ml-32 flex min-h-screen flex-col gap-8 bg-transparent p-8 pt-44 font-normal text-[#242424]">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-300 text-4xl font-bold">
            SS
          </div>
          <div className="flex flex-row items-start gap-16">
            <div className="text-left">
              <h1 className="mb-2 text-3xl font-semibold">
                Shindanai Sudprasert
              </h1>
              <p className="mb-4 text-lg">@shindanai</p>
              <p className="mb-10 text-base text-[#242424]">
                Joined Jan 1, 2025
              </p>
              <p className="max-w-xs text-[#242424]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <section className="ml-10 flex flex-col gap-36">
              <div>
                <p className="mb-2 text-2xl font-bold">Enrolled Courses</p>
                <div className="">No enroll course...</div>
              </div>

              <div>
                <p className="mb-2 text-2xl font-bold">Completed Courses</p>
                <div>No completed course...</div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
