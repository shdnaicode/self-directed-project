import { FaGithub } from "react-icons/fa";

export default function Signup() {
  return (
    <>
      <div className="flex min-h-screen flex-col text-[#242424]">
        <div className="flex flex-grow flex-col items-center justify-center gap-4">
          <div className="flex h-[55vh] w-[25%] overflow-hidden rounded-lg border border-white/40 bg-white/15 opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
            <form
              className="flex w-full flex-col items-center space-y-3 p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h1 className="mb-5 self-center text-xl font-semibold">
                Create your account
              </h1>

              <label
                htmlFor="email"
                className="text-md self-start pt-2 font-medium"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="username@gmail.com"
                className="h-10 w-full max-w-[400px] rounded-md border border-black/40 bg-white pl-3 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label
                htmlFor="password"
                className="text-m self-start pt-2 font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="h-10 w-full max-w-[400px] rounded-md border border-black/40 bg-white pl-3 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="mt-5 h-10 w-full max-w-[400px] cursor-pointer overflow-hidden rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2ea043] text-sm font-normal text-white shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] transition-colors outline-none hover:bg-[#238636]"
              >
                Sign up
              </button>

              <div className="my-4 flex w-full max-w-[400px] items-center">
                <div className="h-px flex-grow bg-black/20"></div>
                <span className="px-3 text-sm text-black">or</span>
                <div className="h-px flex-grow bg-black/20"></div>
              </div>
              <button
                type="button"
                className="mt-3 flex h-10 w-full max-w-[400px] cursor-pointer items-center justify-center gap-3 rounded-md border border-[rgba(255,255,255,0.15)] bg-gray-700 text-sm font-normal text-white shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] transition-colors outline-none hover:bg-gray-800"
              >
                <FaGithub size={20} />
                Continue with GitHub
              </button>
            </form>
          </div>

          <div className="flex h-[6vh] w-[25%] items-center justify-center overflow-hidden rounded-lg border border-white/40 bg-white/15 text-sm font-normal opacity-[0.99] shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px]">
            Already have an account?&nbsp;
            <a href="#" className="text-blue-500 underline">
              Login here
            </a>
          </div>
        </div>

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
      </div>
    </>
  );
}
