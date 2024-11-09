const Homepage = () => {
  return (
    <section className="mt-10 flex min-h-[80vh] gap-12">
      <div className="w-[60%]">
        <div>
          <h2 className="text-2xl font-primaryBold">
            <span>+</span> about...
          </h2>
          <div className="mt-5 text-base font-primaryMedium tracking-wider text-black/70 space-y-8">
            <p>
              An exclusive service which offers the creation, production and
              supply of art and artwork for hospitality, corporate or
              residential projects.
            </p>
            <p>
              Our work philosophy consists in satisfying the needs that each
              project calls for, always respecting and contributing creatively
              to the concept and specifications of architects, owners and
              designers.
            </p>
            <p>
              Additionally, we offer production alternatives, based on proven
              technologies, that allow for significant cost reduction when
              compared to more traditional suppliers, while helping us insure
              timely deliveries of the highest possible quality.
            </p>
            <p>
              Hospitality, corporate and residential venues are always enriched
              when the artist contributes in the creation of an atmosphere that
              is uplifting and carries identity.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="h-[520px]">
          <img
            className="h-full w-full object-cover"
            src="https://i.postimg.cc/fWdbSQ7X/banner.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
