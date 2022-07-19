import { FunctionComponent } from 'react';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const meta = {
  title: 'Our trainings',
  description:
    'Discover our training offer for beginner and experienced developers: angular, git, and more'
};

const TrainingIndex: FunctionComponent = () => {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />{' '}
      <section className="py-4 py-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 order-md-2">
              <img
                src="/images/training.svg"
                className="img-fluid mb-6 mb-md-0"
                alt="person presenting new features"
              />
            </div>
            <div className="col-12 col-md-7 order-md-1">
              <h1 className="display-4">
                Our <span className="text-primary">trainings</span>
              </h1>

              <p className="lead text-muted mb-0">
                Discover our training offer for beginner and experienced
                developers
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 py-md-11 bg-gradient-light-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <span className="badge rounded-pill bg-success-soft mb-3">
                <span className="h6 text-uppercase">Coding</span>
              </span>

              <h1>Angular path</h1>

              <p className="fs-lg text-gray-700 mb-7 mb-md-9">
                We offer top notch Angular training for both beginners and more
                experienced developers.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <img
                  src="/images/training/angular-header.png"
                  alt="Angular logo"
                  className="card-img-top"
                />

                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                        fill="currentColor"
                      ></path>
                    </svg>{' '}
                  </div>
                </div>

                <div className="card-body position-relative">
                  <div className="position-relative text-end mt-n8 me-n4 mb-3">
                    <span className="badge rounded-pill bg-primary-desat">
                      <span className="h6 text-uppercase">Beginners</span>
                    </span>
                  </div>

                  <h3>Angular</h3>

                  <p className="text-muted">
                    Learn Angular basics: architecture, components
                    communication, routing, etc.
                  </p>

                  <a
                    href="/training/angular"
                    className="fw-bold text-decoration-none"
                  >
                    More info →
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <img
                  src="/images/training/angular-header.png"
                  alt="Angular logo"
                  className="card-img-top"
                />

                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                        fill="currentColor"
                      ></path>
                    </svg>{' '}
                  </div>
                </div>

                <div className="card-body position-relative">
                  <div className="position-relative text-end mt-n8 me-n4 mb-3">
                    <span className="badge rounded-pill bg-primary-desat">
                      <span className="h6 text-uppercase">Experienced</span>
                    </span>
                  </div>

                  <h3>Adanced Angular</h3>

                  <p className="text-muted">
                    Learn Angular's advanced topics: change detection, RxJS,
                    state management, etc.
                  </p>

                  <a
                    href="/training/angular-advanced"
                    className="fw-bold text-decoration-none"
                  >
                    More info →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrainingIndex;
