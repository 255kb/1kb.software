import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';

const Nav: FunctionComponent = function () {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const toggler = (
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setShow(!show)}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand ms-6">
            <img
              src="/images/logo-square.svg"
              className="navbar-brand-img"
              alt="Logo"
            />
          </a>
        </Link>

        {toggler}
        <div
          className={
            show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
          }
        >
          <ul className="navbar-nav align-items-center ms-auto">
            {show && toggler}
            {show && (
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={`nav-link ${
                      router.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link href="/">
                <a
                  className={`nav-link d-flex align-items-center ${
                    router.pathname === '/' ? 'active' : ''
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services/">
                <a
                  className={`nav-link d-flex align-items-center ${
                    router.pathname === '/services' ? 'active' : ''
                  }`}
                >
                  Services
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products/">
                <a
                  className={`nav-link d-flex align-items-center ${
                    router.pathname === '/products' ? 'active' : ''
                  }`}
                >
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/trainings/">
                <a
                  className={`nav-link ${
                    router.pathname === '/trainings' ? 'active' : ''
                  }`}
                >
                  Training
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/">
                <a
                  className={`nav-link ${
                    router.pathname === '/contact' ? 'active' : ''
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
