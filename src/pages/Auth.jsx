export default function Auth() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center text-[#242424]">
        <div className="flex h-[60vh] w-[25%] overflow-hidden rounded-lg border border-white/40 bg-white/15 opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
          <form className="flex w-full flex-col items-center space-y-3 p-6">
            <p className="self-start pt-2 text-lg font-semibold">
              Email address
            </p>
            <input
              type="email"
              className="h-10 w-full max-w-[400px] rounded-md border border-black/40 bg-white pl-3 text-base font-normal outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="self-start pt-2 text-lg font-semibold">Password</p>
            <input
              type="password"
              className="h-10 w-full max-w-[400px] rounded-md border border-black/40 bg-white pl-3 text-base font-normal outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-5 h-10 w-full max-w-[400px] cursor-pointer rounded-md border border-[rgba(255,255,255,0.15)] bg-[#238636] font-normal text-white transition-colors outline-none hover:bg-[#1e7c31]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
