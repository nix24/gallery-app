import Link from "next/link";
import { useState } from "react";

export default function Layout() {
  const [isStar, setIsStar] = useState(false);

  function handleStarClick() {
    setIsStar(!isStar);
  }

  function handleStarEnter() {
    setIsStar(true);
  }

  function handleStarLeave() {
    setIsStar(false);
  }

  return (
    <div>
      {/* make nav transparent */}
      <nav
        className="navbar shadow-lg bg-opacity-0 text-base-content"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={handleStarClick}
              onMouseEnter={handleStarEnter}
              onMouseLeave={handleStarLeave}
            >
              {isStar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-all duration-300 transform rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-all duration-300 transform rotate-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Logo</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
