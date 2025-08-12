import { useState } from "react";

export default function Nav() {
  const navLinks = [
    { name: "Home", href: "javascript:void(0)" },
    { name: "Courses", href: "javascript:void(0)" },
    { name: "Components", href: "javascript:void(0)" },
    { name: "Community", href: "javascript:void(0)"},
  ];

  const navUser = {
    profilePicture: "", 
    name: "Shindanai",
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderAvatar = () => {
    if (navUser.profilePicture) {
      return (
        <img
          className="h-[40px] w-[40px] rounded-full object-cover cursor-pointer"
          src={navUser.profilePicture}
          alt={`${navUser.name} profile`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setDropdownOpen(!dropdownOpen);
            }
          }}
          role="button"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        />
      );
    }
    const initials = navUser.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return (
      <div
        className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-400 text-white font-semibold"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setDropdownOpen(!dropdownOpen);
          }
        }}
        role="button"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        aria-label="User menu"
      >
        {initials}
      </div>
    );
  };

  return (
    <>
      <nav
        role="navigation"
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-[1.3px] border-black/35 bg-white p-4"
        style={{ height: "auto" }}
      >
        <ul className="ml-5 flex items-center justify-start gap-5 text-[15px] font-normal text-black text-opacity-80">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="relative mr-5 flex items-center gap-5">
          {renderAvatar()}

          {dropdownOpen && (
            <ul
              role="menu"
              className="absolute right-0 top-full mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg"
            >
              <li role="menuitem">
                <a
                  href="javascript:void(0)"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                >
                  Settings
                </a>
              </li>
              <li role="menuitem">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  onClick={() => alert("Logout clicked")}
                >
                  Sign out
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}