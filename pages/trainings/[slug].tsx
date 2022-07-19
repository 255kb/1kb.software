import { FunctionComponent } from 'react';
import Meta from '../../components/meta';
import SVG from '../../components/svg';
import { Trainings } from '../../data/trainings';
import Layout from '../../layout/layout';
import { Training } from '../../models/common.model';

export function getStaticProps({ params }) {
  const training = Trainings.find(
    (trainingItem) => trainingItem.slug === params.slug
  );

  return { props: { training } };
}

export function getStaticPaths() {
  return {
    paths: Trainings.map((training) => ({ params: { slug: training.slug } })),
    fallback: false
  };
}

const TrainingDetails: FunctionComponent<{ training: Training }> = ({
  training
}) => {
  const durationHuman = `${training.duration} day${
    training.duration > 1 ? 's' : ''
  }`;

  return (
    <Layout>
      <Meta
        title={training.meta.title}
        description={training.meta.description}
      />

      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <a
                href="/training/"
                className="fw-bold fs-sm text-decoration-none mb-3"
              >
                ← All trainings
              </a>

              <h1 className="display-4 mb-2 d-flex align-items-center">
                <span className="me-4">
                  <img
                    src={`/images/trainings/${training.slug}-logo.png`}
                    alt={`${training.title} logo`}
                    style={{ height: '5rem' }}
                  />
                </span>
                {training.title}
              </h1>

              <div className="fs-lg text-gray-700 mb-5 mb-md-0">
                <div>
                  <SVG name="map_marker"></SVG>
                  <span className="ms-4">Luxembourg/Remote</span> <br></br>
                </div>
                <div>
                  <SVG name="clock"></SVG>
                  <span className="ms-4">{durationHuman}</span>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <a href="/contact/#form" className="btn btn-primary">
                Get a quote
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr className="my-6 my-md-8 border-gray-300" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <p
                className="text-gray-800 mb-6 mb-md-8"
                dangerouslySetInnerHTML={{ __html: training.intro }}
              ></p>
              {training.tableOfContent.map((content, contentIndex) => (
                <div key={`title${contentIndex}`}>
                  <h3 className="mt-4">{content.title}</h3>
                  {content.items.map((item, itemIndex) => (
                    <div key={`item${itemIndex}`} className="d-flex">
                      <div className="me-4 ms-4">
                        <SVG name="tick"></SVG>
                      </div>

                      <p className="text-gray-800 mb-0">{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg mb-5">
                <div className="card-body">
                  <h4 className="pb-2">Trainer</h4>
                  <div className="d-flex mb-0">
                    <div className="avatar avatar-xl me-3">
                      <img
                        src="https://www.gravatar.com/avatar/ec74bed6f3e83e27af2bdf82d631032a"
                        className="avatar-img rounded-circle"
                        alt="Trainer picture"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <div className="h6 text-uppercase text-gray-800">
                        Guillaume Monnet
                      </div>
                      <div className="h6">
                        <a
                          href="https://www.linkedin.com/in/guillaumemonnet/"
                          target="_blank"
                          rel="noopener"
                        >
                          <SVG name="linkedin"></SVG>
                        </a>{' '}
                        <a
                          href="https://github.com/255kb"
                          target="_blank"
                          rel="noopener"
                        >
                          <SVG name="github"></SVG>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-sm mt-4 text-gray-800 mb-5">
                    Guillaume is a full-stack web developer living in
                    Luxembourg. He is passionate about development in general
                    and is currently working on{' '}
                    <a
                      href="https://mockoon.com"
                      target="_blank"
                      rel="noopener"
                    >
                      https://mockoon.com
                    </a>
                    .
                  </p>
                  <h4 className="pb-2 pt-4">Course info</h4>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Requirements
                  </h6>

                  <div className="fs-sm mb-5">
                    {training.prerequisites.map(
                      (prerequisite, prerequisiteIndex) => (
                        <p key={`prerequisite${prerequisiteIndex}`}>
                          {prerequisite}
                        </p>
                      )
                    )}
                  </div>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Duration
                  </h6>

                  <p className="fs-sm mb-5">{durationHuman}</p>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Language
                  </h6>

                  <p className="fs-sm mb-5">
                    English or French (for French, the course material is still
                    in English)
                  </p>

                  <h4 className="pb-2 pt-4">Location</h4>

                  <p className="fs-sm mb-5">
                    All our courses are usually organized in Luxembourg{' '}
                    <strong>in your premises</strong> or <strong>online</strong>
                    .
                  </p>
                  <h4 className="pb-2 pt-4">Price</h4>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Base price
                  </h6>

                  <p className="fs-sm mb-5">
                    {training.dailyRate * training.duration}€ (excl.
                    VAT)/participant
                  </p>

                  <h4 className="pb-2 pt-4">Misc.</h4>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Hardware
                  </h6>

                  <p className="fs-sm mb-5">
                    Participants are expected to bring their own laptops
                  </p>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Minimum participants
                  </h6>

                  <p className="fs-sm mb-5">{training.minParticipants}</p>

                  <a
                    href="/contact#form"
                    target="_blank"
                    rel="noopener"
                    className="fw-bold fs-sm text-decoration-none"
                  >
                    Get a quote
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

export default TrainingDetails;
