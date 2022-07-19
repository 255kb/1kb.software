import { FunctionComponent } from 'react';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const meta = {
  title: 'Our products',
  description:
    'Discover our products we spent time crafting to provide the perfect user experience: Mockoon, powerful API mocking'
};

const Products: FunctionComponent = () => {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <section className="py-4 py-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 order-md-2">
              <img
                src="/images/products.svg"
                className="img-fluid mb-6 mb-md-0"
                alt="application being demonstrated on a board"
              />
            </div>
            <div className="col-12 col-md-7 order-md-1">
              <h1 className="display-4">
                Our <span className="text-primary">products</span>
              </h1>

              <p className="lead text-muted mb-0">
                Discover our products we spent time crafting to provide the
                perfect user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 py-md-11 bg-gradient-light-white border-top">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 col-md-7 col-lg-6 aos-init aos-animate"
              data-aos="fade-right"
            >
              <h2 id="mockoon">
                Mockoon:{' '}
                <span className="text-primary">powerful API mocking</span>
              </h2>

              <p className="fs-lg text-muted mb-6">
                We built Mockoon, the easiest and quickest way to design and run
                mock REST APIs. No remote deployment, no account required, free
                and open-source. <br></br>Mockoon is trusted by thousands of
                developers worldwide.
              </p>

              <div className="d-flex">
                <div className="icon text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                        fill="#1a76a6"
                      ></path>
                      <path
                        d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                        fill="#1a76a6"
                        opacity=".3"
                      ></path>
                    </g>
                  </svg>{' '}
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">API mocking that saves you time</h4>

                  <p className="text-muted mb-6">
                    Get working mock REST APIs in seconds with an intuitive and
                    easy-to-use interface. Run them everywhere with the CLI.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                        fill="#1a76a6"
                      ></path>
                      <rect
                        fill="#1a76a6"
                        opacity=".3"
                        transform="rotate(15 12 12)"
                        x="11"
                        y="4"
                        width="2"
                        height="16"
                        rx="1"
                      ></rect>
                    </g>
                  </svg>{' '}
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Complete tooling</h4>

                  <p className="text-muted mb-6 mb-md-0">
                    Go beyond mocking with advanced features and tackle the most
                    complex situation with HTTP requests recording, proxying,
                    integration testing, etc.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  className="fw-bold text-decoration-none"
                  href="https://mockoon.com"
                >
                  Visit Mockoon's website →
                </a>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6">
              <div
                className="w-md-150 w-lg-130 position-relative aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="shape shape-fluid-y shape-blur-4 text-gray-200"></div>

                <div className="img-skewed img-skewed-start">
                  <img
                    src="/images/mockoon-screenshot.png"
                    className="screenshot img-fluid img-skewed-item"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
