import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full mx-auto bg-base-100 border-b">
      <nav className="max-w-6xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={`/about`}>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/contact`}>
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/skills`}>
                    <a>Skills</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/learning`}>
                    <a>Learning</a>
                  </Link>
                </li>
              </ul>
            </div>
            <Link href={`/`}>
              <a className="btn btn-ghost normal-case text-xl">
                <img
                  src="/ragrog-logo.svg"
                  alt="RagRog Logo"
                  className="w-40"
                ></img>
              </a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link href={`/about`}>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href={`/contact`}>
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href={`/skills`}>
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href={`/learning`}>
                  <a>Learning</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link href={`/blog/`}>
              <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning">
                Blog
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
