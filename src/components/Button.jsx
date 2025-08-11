import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`relative flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-[10px] border border-white/40 bg-white/15 p-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] transition-all hover:bg-white/20 ${className}`}
      {...props}
    >
      <span className="text-2xl font-bold">{children}</span>
    </button>
  );
}

export default Button;
