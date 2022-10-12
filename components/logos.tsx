import Link from 'next/link';
import { FunctionComponent } from 'react';
import { CompanyLogos } from '../data/logos';

const Logos: FunctionComponent<{ logos: typeof CompanyLogos }> = function ({
  logos
}) {
  return (
    <section className="py-8">
      <div className="container">
        <h4 className="text-muted text-center pb-6 fw-bold">They trust us</h4>
        <div className="row align-items-center justify-content-center">
          {logos.map((logo, logoIndex) => (
            <div
              key={`logo${logoIndex}`}
              className="col-6 col-sm-3 col-lg-2 mb-4 mb-md-0 px-xl-8 text-center"
            >
              <div className="mb-2 mb-md-0">
                <Link href={logo.link}>
                  <a target="_blank" rel="noopener">
                    <img src={logo.src} className="img-fluid" alt={logo.alt} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
