import Button from "./Button";

function Nav() {
  return (
    <>
      <header className="pt-8 px-10">
        <div className="m-auto max-w-screen- px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block" href="/">
                <span className="sr-only">Home</span>
                <img src="/images/Vector.png" alt="company_logo" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-12 text-lg">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Portfolio
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <Button name="Get In Touch" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
