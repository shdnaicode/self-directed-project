export default function Auth() {
  return (
    <>
      <div className="text-[#242424] text-opacity-80 flex min-h-screen justify-center items-center">
        <div className="flex h-[60vh] w-[25%] overflow-hidden rounded-lg border border-white/40 bg-white/15 opacity-[0.99] backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)]">
          <form className="p-6 space-y-3 flex flex-col items-center w-full">
            <p className="text-lg pt-2 font-bold self-start">Email address</p>
            <input
              type="email"
              className="font-normal text-base pl-3 bg-white w-full max-w-[400px] h-10 rounded-md border border-black/40 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="pt-2 text-lg font-bold self-start">Password</p>
            <input
              type="password"
              className="font-normal text-base pl-3 bg-white w-full max-w-[400px] h-10 rounded-md border border-black/40 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      </div>
    </>
  );
}
