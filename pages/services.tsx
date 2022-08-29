import { FunctionComponent } from 'react';
import Meta from '../components/meta';
import SVG from '../components/svg';
import Layout from '../layout/layout';

const meta = {
  title: 'Our services',
  description: 'Discover our services TODO'
};

const Services: FunctionComponent = () => {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <section className="py-4 py-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 order-md-2">
              <img
                src="/images/services.svg"
                className="img-fluid mb-6 mb-md-0"
                alt="application being demonstrated on a board"
              />
            </div>
            <div className="col-12 col-md-7 order-md-1">
              <h1 className="display-4">
                Our <span className="text-primary">services</span>
              </h1>

              <p className="lead text-muted mb-0">
                We provide various services to help you bring your ideas and
                businesses to life
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8 py-md-11 bg-gradient-light-white border-top"
        id="application-development"
      >
        <div className="container">
          <div className="row align-items-center gx-10">
            <div className="col-12 col-md-7 col-lg-6">
              <h2>
                Application <span className="text-primary">development</span>
              </h2>

              <p className="fs-lg text-muted mb-6">
                We help you bring your business to life by building APIs, web
                services, and mobile or desktop applications offering the best
                user experience.
              </p>

              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="laptop" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Web application</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We develop your application by using the most recent and
                    proven technologies and applying code and UI best practices.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="phone" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Mobile</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We help you develop your online mobile presence by choosing
                    the most appropriate approach: responsive website,
                    Progressive Web Application, native or hybrid mobile
                    application.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6">
              <img
                src="/images/services/development.svg"
                className="img-fluid"
                alt="application under development"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8 py-md-11 bg-gradient-light-white border-top"
        id="mvp-development"
      >
        <div className="container">
          <div className="row align-items-center gx-10">
            <div className="col-12 col-md-5 col-lg-6">
              <img
                src="/images/services/mvp.svg"
                className="img-fluid"
                alt="mobile application mockup"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-6">
              <h2>
                MVP <span className="text-primary">development</span>
              </h2>

              <p className="fs-lg text-muted mb-6">
                We help you define, plan and build your MVP (Minimum Viable
                Product) following the lean startup methodology.
              </p>

              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="bulb" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Definition</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We accompany you to define the scope of your MVP and avoid
                    the costly development of unneeded features.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="clipboard" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Planification</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We help you plan the MVP development to focus on what
                    matters and reduce the time to market.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="code" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Development</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We develop the MVP application by iterating and deploying
                    quickly and gathering frequent feedback to continuously
                    improve your product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8 py-md-11 bg-gradient-light-white border-top"
        id="code-audit"
      >
        <div className="container">
          <div className="row align-items-center gx-10">
            <div className="col-12 col-md-7 col-lg-6">
              <h2>
                Code {''}
                <span className="text-primary">audit</span>
              </h2>

              <p className="fs-lg text-muted mb-6">
                We audit your application's code to help you improve its quality
                and identify eventual issues and performance bottlenecks.
              </p>

              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="code" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">Code</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We analyze your application code and suggest improvements to
                    get rid of performance bottlenecks, and bad practices, and
                    help you improve its overall maintainability.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon text-primary">
                  <SVG name="layout" />
                </div>

                <div className="ms-5">
                  <h4 className="mb-1">UI</h4>

                  <p className="text-muted mb-6 mb-md-2">
                    We help you identify discrepancies, slowness, or bad
                    practices in your User Interface to improve the experience
                    of your users.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6">
              <img
                src="/images/services/code.svg"
                className="img-fluid"
                alt="illustration of a page displaying code"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
