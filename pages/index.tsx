import Link from 'next/link';
import { FunctionComponent } from 'react';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const meta = {
  title: '1kB - Software development',
  description:
    '1kB Softwares is an application development company based in Luxembourg. It offers many services: application development, training, and talent sourcing'
};

const Index: FunctionComponent = () => {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />

      <section className="border-top">
        <div className="container">
          <div className="row justify-content-between align-items-stretch">
            <div className="col-12 col-md-6 py-8 py-md-13">
              <h1 className="display-3">
                We craft{' '}
                <span className="text-primary">
                  beautiful software and mobile applications
                </span>
                .
              </h1>
              <p className="lead text-muted mb-6 mb-md-8">
                We are a team of developers based in Luxembourg, building modern
                and performant applications and services.
              </p>
            </div>
            <div className="col-12 col-md-5">
              <div
                className="position-relative h-100 vw-50 bg-cover"
                style={{
                  backgroundImage: 'url(/images/picture.jpg)'
                }}
              >
                <div className="shape shape-start shape-fluid-y text-white">
                  <svg
                    viewBox="0 0 100 1544"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0h100v386l-50 772v386H0V0z"
                      fill="currentColor"
                    ></path>
                  </svg>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 py-md-14">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="fw-bold">
                Your one-stop shop for{' '}
                <span className="text-primary">all your development needs</span>
                .
              </h2>

              <p className="fs-lg text-muted mb-9">
                1kB is your one-stop shop for all your application, APIs, and
                MVPs development. We also cover your training needs from
                beginners to more advanced developers.
              </p>
            </div>
          </div>
          <div className="row pt-6">
            <div className="col-12 col-lg-6">
              <div className="row align-items-center mb-8 aos-init aos-animate">
                <div className="col-4 col-lg-5">
                  <img
                    src="/images/products.svg"
                    alt="..."
                    className="img-fluid"
                  />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="fw-bold mb-2">Application development</h3>

                  <p className="text-gray-700 mb-0">
                    We help you bring your business to life by building APIs,
                    web services, mobile or desktop applications offering the
                    best user experience.
                    <br />
                    <Link href={'/products'}>
                      <a className="fw-bold text-decoration-none">
                        View our products →
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row align-items-center mb-8 aos-init aos-animate">
                <div className="col-4 col-lg-5">
                  <img
                    src="/images/training.svg"
                    alt="..."
                    className="img-fluid"
                  />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="fw-bold mb-2">Training</h3>

                  <p className="text-gray-700 mb-0">
                    We help you level up your employee's skills by offering
                    training on various technologies: Javascript, Node.js,
                    Angular, Electron, Ionic, Git, Firebase, etc.
                    <br />
                    <Link href={'/training'}>
                      <a className="fw-bold text-decoration-none">
                        View our trainings →
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
