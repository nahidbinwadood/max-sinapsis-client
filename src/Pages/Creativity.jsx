import CreativitySection from '../components/CreativitySection';
import Title from '../components/Title';

const Creativity = () => {
  const creativityContents = [
    {
      title: 'Collective Exhibits',
      description: [
        '“Seven Women”, Alliance Française, 2001.” Costacuarela”, Sophia Wanamaker Gallery, 2004-08. “Costa Rican Watercolor in International Events”, National Gallery, 2005. “Costa Rica-Hong Kong”, José Figueres Gallery, 2005. Valanti Loft Gallery, 2006. “Art in Public Spaces: Watercolor lives”, Mupis located in the Metropolitan Area, San José, 2006-07. “Homage to Master Amighetti”, National Gallery & Calderón Guardia Museum, 2007. “21st Century Watercolor”, National Gallery, 2008. “Migrarte”, relational art experiences, Spanish Cultural Center, 2010.Costacuarela 2013. Costacuarela, 2014. Costacuarela, 2015. 15 years of watercolour in Costa Rica, López Escarré Gallery, 2017.',
      ],
    },
    {
      title: 'Individual Exhibits',
      description: [
        'Alliance Francaise, 2000. Joaquín García Monge Gallery, 2001. Supreme Court of Elections, 2002. National Gallery, 2004. Punta Islita Museum, 2005. Herrradura Hotel, 2007.',
        'Relational art: “Urbanographies”, Central Bank Gold Museum, 2009. “Dance it!”, Central Bank Gold Museum, 2010.',
      ],
    },
    {
      title: 'International Exhibits',
      description: [
        'Autumn Festival, Hong Kong, 2004. VI International Watercolor Biennial, Mexico, 2004. “Tropic, the color of parallel 10” Spain, 2007. “Miniatures”, El Tunel Gallery, Guatemala City, 2009. Japan, 2016. International watercolour encounter, Fabriano, 2017.International Watercolor Museum, Mexico City, 2017.',
      ],
    },
    {
      title: 'Publications',
      description: [
        '“Aguacuarela”, Luis Fernando Quirós, Ancora section, La Nación, November 14, 2004.',
        '“Pinceles de Cristal”, Dario Chinchilla, Ancora section, La Nación, June 17, 2007.',
        '“El Barco” Interview program, Sinart Channel 13, May 2009.',
      ],
    },
    {
      title: 'Collections',
      description: [
        'Presidential House Collection, Costa Rica. Private collections in Costa Rica, Nicaragua, Panama, Guatemala, Mexico, United States, Spain, Germany.',
      ],
    },
  ];
  return (
    <section className='pb-32'>
      <Title title="creativity" />
      {/* Content goes here */}

      <div className="mt-5 flex gap-10 items-stretch">
        <div>
          <div className="w-[320px] h-full max-h-[450px] flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.postimg.cc/3JH8tXbc/dp.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          {/* title */}
          <div className="flex items-center gap-3">
            <div className="bg-secondary size-2 rounded-full" />
            <h2 className="text-[#666633] font-primaryTest text-xl lowercase -mt-1 tracking-wide">
              creative leadership
            </h2>
          </div>

          {/* description */}
          <p className="ml-5 mt-2 font-primaryTest tracking-wider">
            The leadership of the creative process is the responsibility of{' '}
            <span className="font-primaryMedium">Ana Laura Vargas</span> ,{' '}
            <br />
            costa rican artist:
          </p>

          {/* statement */}
          <div className="font-primaryTest text-secondary ml-5 mt-10">
            <h3 className="text-xl">Statement</h3>
            <p className="h-3/4 mt-2 tracking-wider text-black">
              The artist is alwlays seeking diverse languages for creativity. I
              have found them exploring painting, drawing, photography,
              ceramics, mosaic, installation, collage, wood, metal, and
              relational art.
            </p>
          </div>

          {/* studies */}
          <div className="font-primaryTest text-secondary ml-5 mt-10">
            <h3 className="text-xl">Studies</h3>
            <div className="h-3/4 mt-2 tracking-wider text-black space-y-2">
              <p>
                - School of Fine Arts, Universidad Autónoma de Centroamérica,
                emphasis on watercolor.
              </p>
              <p>- Gisela Stradtmann Watercolor Workshop.</p>
              <p>- Pefi Ceramics.</p>
              <p>
                - V Coaching for Management of the Artistic Carreer, MIT from
                the Universidad de Las Palmas de Gran Canaria.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* exhibits */}
      <div className="mt-16 font-primaryTest space-y-10">
        {creativityContents?.map((item) => (
          <CreativitySection key={item} item={item} />
        ))}
      </div>

      {/* Membership */}
      <div className="mt-10 font-primaryTest">
        <div>
          <h3 className="text-xl text-secondary">Memberships</h3>
          <div className="space-y-1 mt-2 tracking-wider">
            <p>- Entrenarte Group, guest artist</p>
            <p>- Costa Rican Association of Watercolorists, President.</p>
            <p>- International Watercolor Society</p>
            <p>- Pefi Ceramics, partner.</p>
          </div>
        </div>
      </div>

      {/* contributions */}
      <div className="mt-10">
        <div className="flex items-center gap-3">
          <div className="bg-secondary size-2 rounded-full" />
          <h2 className="text-[#666633] font-primaryTest text-xl lowercase -mt-1 tracking-wide">
            creative contributions
          </h2>
        </div>

        <div className="font-primaryTest tracking-wider mt-6 ml-5 space-y-8">
          <p>
            Under the leadership of Ana Laura Vargas, creative contributions are
            obtained form other artists and professionals, selected in
            accordance with the specific requirements of each project.
          </p>
          <p>
            We work with specialists in architecture, photography, design and
            hand painting of ceramics, and others, as may be advisable to
            satisfy a client&apos;s artwork needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
