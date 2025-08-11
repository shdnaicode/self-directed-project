import React from "react";

const Input = React.forwardRef(
  ({ label, id, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          type={type}
          className="mt-1 block h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm placeholder-slate-400 shadow-sm transition outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
