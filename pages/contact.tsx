import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const meta = {
  title: 'Contact us',
  description:
    'Contact us to get more information about the services we offer. We will be glad to help you.'
};

const Contact: FunctionComponent = () => {
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const [apiError, setApiError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    if (!data['work_address']) {
      delete data['work_address'];

      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.status === 200) {
          setSubmitSuccess(true);
          reset();
        } else {
          setApiError(true);
        }
      } catch {
        setApiError(true);
      }
    }
  };

  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <section
        className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
        style={{ backgroundImage: 'url(/images/contact.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-2 fw-bold text-white">
                Let's get in touch!
              </h1>

              <p className="lead text-white-75 mb-0">
                Contact us to get more information about the services we offer.
                We will be glad to help you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x text-light">
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
      <section className="py-7 py-md-9 border-bottom border-gray-300" id="info">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center border-end border-gray-300">
              <h6 className="text-uppercase text-gray-700 mb-1">Message us</h6>

              <div className="mb-5 mb-md-0">
                <a href="#form" className="h4 text-primary">
                  Fill the form
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 text-center">
              <h6 className="text-uppercase text-gray-700 mb-1">Email us</h6>

              <a href="mailto:contact@1kb.software" className="h4">
                contact@1kb.software
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pt-md-11 pb-8 pb-md-14">
        <div className="container" id="form">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="fw-bold">Let's work together!</h2>

              <p className="fs-lg text-muted mb-7 mb-md-9">
                Contact us to get more information about our services. We will
                be glad to help you.
                <br></br> We usually reply within one day.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-10">
              <form
                onSubmit={(e) => {
                  setSubmitSuccess(false);
                  setApiError(false);
                  handleSubmit(onSubmit)(e);
                }}
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-5">
                      <label className="form-label" htmlFor="contactName">
                        Full name
                      </label>

                      <input
                        className="form-control"
                        id="contactName"
                        name="contactName"
                        type="text"
                        placeholder="Full name"
                        required
                        {...registerFormField('contactName')}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-5">
                      <label className="form-label" htmlFor="contactEmail">
                        Email
                      </label>

                      <input
                        className="form-control"
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        placeholder="hello@domain.com"
                        required
                        {...registerFormField('contactEmail')}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group mb-7 mb-md-9">
                      <label className="form-label" htmlFor="contactMessage">
                        What can we help you with?
                      </label>

                      <textarea
                        className="form-control"
                        id="contactMessage"
                        name="contactMessage"
                        rows={5}
                        placeholder="Tell us more about your project and your needs."
                        required
                        {...registerFormField('contactMessage')}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <label
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1
                  }}
                  htmlFor="work_address"
                ></label>
                <input
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1
                  }}
                  autoComplete="off"
                  type="text"
                  id="work_address"
                  name="work_address"
                  placeholder="Your address here"
                  {...registerFormField('work_address')}
                ></input>
                {apiError && (
                  <div className="row justify-content-center">
                    <div className="col-auto text-danger text-center fw-bold pb-4">
                      Something went wrong! We are sorry for the inconvenience.
                      You can contact us manually by email at
                      contact@1kb.software
                    </div>
                  </div>
                )}
                {submitSuccess && (
                  <div className="row justify-content-center">
                    <div className="col-auto text-success text-center fw-bold pb-4">
                      Message sent! We will get back to you shortly.
                    </div>
                  </div>
                )}

                {isSubmitting && (
                  <div className="text-center mb-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btn-primary lift"
                      disabled={isSubmitting}
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
