import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Course() {
  return (
    <>
      <div className="flex min-h-screen flex-col text-[#242424]">
        <Nav />
        <div className="flex flex-grow flex-col items-center justify-center gap-4">
          <div className="flex h-[60vh] w-[60%] overflow-hidden rounded-lg border border-white/40 bg-white/15 opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
            <div className="flex w-full flex-col items-center space-y-3 p-8">
              <h1 className="mb-5 self-center text-2xl font-semibold">
                Explore our courses
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
