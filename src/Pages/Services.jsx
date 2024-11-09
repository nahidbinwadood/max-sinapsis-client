import SectionTitle from '../components/SectionTitle';
import Title from '../components/Title';

const Services = () => {
  return (
    <section className='pb-32'>
      <Title title={'services'} />

      {/* Contents */}
      <div className="ml-6 mt-5">
        <div>
          {/* title */}
          <SectionTitle title={'concept'} />
          <div className="mt-2 ml-6 text-[#333] font-primaryMedium tracking-wider text-black/70 space-y-8">
            <p>
              We create and supply artwork for hotels, offices, residences and
              spaces where art contributes significantly to create an atmosphere
              or complete and complement a design concept.
            </p>
            <p>
              We work in diverse techniques, such as watercolor, acrylic, ink
              drawings, photography, metal, fiberglass. We also transform
              utilitarian objects into art through ceramics, earthenware or
              mosaic.
            </p>
          </div>
        </div>

        <div className="mt-16">
          {/* title */}
          <div>
            <SectionTitle title={'Step by Step'} />
            <div>
              <p className="font-primaryMedium tracking-wider text-[#333] ml-6 mt-1">
                Our work process can be outlined as follows:
              </p>
            </div>
          </div>
          <div className="mt-5 ml-6">
            <div className="text-[#333] font-primaryMedium tracking-wider space-y-4">
              <p>
                <span className="font-primaryLightBold text-secondary">
                  Initial Consultation,
                </span>{' '}
                where we meet with project owners, architects and/or designers,
                to understand the design concept, and the desired artwork
                specifications.
              </p>

              <p className="space-y-8">
                <span className="font-primaryLightBold text-secondary">
                  Art Proposal,
                </span>
                where we present proposed artwork, exclusively created for
                client&apos;s project, which fulfills the specifications and
                design concept. The proposed artwork is discussed and evaluated,
                with the objective of modifying them or of creating new proposed
                pieces. This process is repeated until client is fully satisfied
                with the proposed artwork for his project.
                <span className="block">
                  Additionally, the art proposal process also involves analysis
                  and discussion of production and/or reproduction alternatives
                  and associated costs, such that the final decision is not
                  based solely on artistic aspects, but also considers cost to
                  project, without ever jeopardizing quality and durability.
                </span>
                <span className="block">
                  In summary, the idea is to work closely with those responsible
                  of the project design concept, contributing creatively to
                  satisfy their specifications, with due consideration to cost
                  and budgeting.
                </span>
              </p>

              <p>
                <span className="font-primaryLightBold text-secondary">
                  Production and Delivery Scheduling,
                </span>
                where we define with client a delivery schedule as required by
                the project, to program production of the artwork and insure
                timely deliveries.
              </p>

              <p>
                <span className="font-primaryLightBold text-secondary">
                  Delivery and Installation Supervision,
                </span>
                where we work with client in insuring that all artwork is
                delivered within specifications and is installed appropriately
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          {/* title */}
          <SectionTitle title={'Step by Step'} />

          <div className="mt-5 space-y-4 ml-6">
            <p className="text-[#333] tracking-wider font-primaryMedium">
              All artwork chosen by client is exclusive, that is to say, it
              becomes unique for the project and worked in limited editions
              only.
            </p>
            <p className="text-[#333] tracking-wider font-primaryMedium">
              Artwork delivered includes a quality guarantee for a period
              starting on delivery date.
            </p>
            <p className="text-[#333] tracking-wider font-primaryMedium">
              Artwork delivered includes a quality guarantee for a period
              starting on delivery date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
