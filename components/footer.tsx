import Link from 'next/link';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = function (props) {
  return (
    <>
      <section className="pt-6 pt-md-8 bg-gray-200">
        <div className="container pb-6 pb-md-8 border-bottom border-gray-300">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <h3 className="fw-bold mb-1">Want to work with us?</h3>

              <p className="fs-lg text-primary mb-5 mb-md-0">
                Let's have a chat.
              </p>
            </div>
            <div className="col-12 col-md-auto">
              <Link href="/contact/">
                <a className="btn btn-primary lift">Contact us</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 py-md-11 bg-gray-200">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-2">
              <img
                src="/images/logo-small.png"
                alt="1kb logo"
                className="footer-brand img-fluid mb-2"
              />
            </div>
            <div className="col-6 col-md-4 col-lg-2 offset-lg-2">
              <h6 className="fw-bold text-uppercase text-gray-700">Services</h6>

              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a
                    href="/services/#application-development"
                    className="text-reset"
                  >
                    Application development
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/services/#mvp-development" className="text-reset">
                    MVP development
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/services/#code-audit" className="text-reset">
                    Code audit
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold text-uppercase text-gray-700">Products</h6>

              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a href="/products/#mockoon" className="text-reset">
                    Mockoon
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              <h6 className="fw-bold text-uppercase text-gray-700">Training</h6>

              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <a href="/trainings/angular/" className="text-reset">
                    Angular
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/trainings/angular-advanced/" className="text-reset">
                    Angular advanced
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/trainings/" className="text-reset">
                    View all trainings →
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold text-uppercase text-gray-700">More</h6>

              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <a href="/contact/" className="text-reset">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-8 fs-6 text-muted">
              © Copyright 2022 - 1kB SARL-S LBR: B257186 - Permit: 10131092/0 -
              VAT: LU33209738
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-8 fs-6 text-muted">
              <a
                href="https://storyset.com/idea"
                rel="noopener"
                target="_blank"
              >
                Illustrations by Storyset
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
