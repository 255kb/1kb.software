import { FunctionComponent } from 'react';
import Meta from '../components/meta';
import SVG from '../components/svg';
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
      <section className="py-4 py-md-8">
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
                perfect user experience
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
                  <SVG name="repeat" />
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
                  <SVG name="code" />
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
