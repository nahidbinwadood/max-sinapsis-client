import ProjectsSection from '../components/ProjectsSection';
import Title from '../components/Title';

const Projects = () => {
  const allProjects = [
    {
      title: 'Intercontinental Tegucigalpa',
      location: 'Honduras',
      description: '2016 remodel. Photography, collage, metal.',
    },
    {
      title: 'Intercontinental Managua',
      location: 'Nicaragua',
      description: '2016 remodel. Collage, metal.',
    },
    {
      title: 'Puntarena',
      location: 'Buenaventura, Panamá',
      description: 'Beach condos. Photography.',
    },
    {
      title: 'St. Regis Bal Harbour',
      location: 'Florida, USA',
      description:
        'Suites and Presidential suite. Photography, drawings, paintings',
    },
    {
      title: 'Casa Chameleon',
      location: 'Malpaís, Costa Rica',
      description: 'Boutique hote',
    },
    {
      title: 'Royal Club Suites, Westin Conchal Resort & Spa',
      location: 'Santa Cruz, Guanacaste, Costa Rica',
      description: '(18 suites ) Organic art.',
    },
    {
      title: 'Holiday Inn Express Forum',
      location: 'San Jose, Costa Rica',
      description: '(100 guestrooms) Photography.',
    },
    {
      title: 'Four Seasons Papagayo',
      location: 'Papagayo Peninsula, Guanacaste, Costa Rica',
      description:
        '(all guestroom, public areas & spa remodel)Watercolor, acrylic, metal, photography.',
    },
    {
      title: 'Dreams Las Mareas Costa Rica',
      location: 'La Cruz, Guanacaste, Costa Rica',
      description:
        '(457 guestrooms, lobby,public areas, spa)Copper, wood, fibreglass, collage, acrylic, watercolor.',
    },
    {
      title: 'Holiday Inn Express Managua',
      location: 'Managua, Nicaragua',
      description: '(114 guestrooms) Photography.',
    },
    {
      title: 'crowne plaza hotel san salvador',
      location: 'San Salvador, El salvador',
      description: '197 guestrooms. Watercolor, collage.',
    },
    {
      title: 'real intercontinental centro de convenciones',
      location: ' san josé, costa rica',
      description: 'Prefunction Area and Public Restrooms. Acrylic.',
    },
    {
      title: 'sheraton san jose',
      location: 'san josé, costa rica',
      description:
        'Art in public areas. Front desk, lobby, restaurant, and casino. Stainless steel, watercolour, installation, iron.',
    },
    {
      title: 'westin golf resort & spa',
      location: 'conchal, guanacaste, costa rica',
      description:
        'Art at Front Desk and Restaurants. Fiberglass installation, acrylic.',
    },
    {
      title: 'jw marriott guanacaste resort & spa ',
      location: ' santa cruz, guanacaste, costa rica',
      description:
        '(331 guestrooms, 5- star). Guestroom artwork and selected public areas. Acrylic, ceramics, earthenware, iron laminate, mosaic.',
    },
    {
      title: 'hotel camino real antigua',
      location: 'antigua, guatemala',
      description: '(100 guestrooms, 5-star). Guestroom artwork. Acrylic.',
    },
    {
      title: 'hotel arenas del mar',
      location: 'manuel antonio, quepos, costa rica',
      description:
        '(42 guestrooms, 5- star, 5 leaf sustainable tourism ICT award). Guestroom artwork. Watercolor, acrylic, ink drawings.',
    },
    {
      title: 'hotel real intercontinental club & tower',
      location: 'san josé, costa rica',
      description:
        '(372 guestrooms, 5-star). Guestroom Artwork. Watercolor, acrylic, ink drawings, photography, ceramics.',
    },
    {
      title: 'hotel real intercontinental',
      location: ' san pedro sula, honduras',
      description: '(149 guestrooms, 5-star). Guestroom artwork. Watercolor.',
    },
    {
      title: 'hotel quality real',
      location: 'san josé, costa rica',
      description: 'Original artwork in public areas. Watercolor, acrylic.',
    },
    {
      title: 'hotel quality real',
      location: 'san salvador, el salvador',
      description: '(210 guestrooms). Guestroom artwork. Watercolor.',
    },
    {
      title: 'hotel bahía del sol',
      location: ' playa potrero, guanacaste, costa rica',
      description: '(50 Guest Rooms). Guestroom artwork. Original watercolors.',
    },
    {
      title: 'surí educational project',
      location: 'san josé, costa rica',
      description:
        'Mosaic benches, approximately 100 mts. (330 feet) in length.',
    },
    {
      title: 'ayarco cultural center',
      location: 'san josé, costa rica',
      description: 'Mosaic and iron laminate mural, photography.',
    },
    {
      title: 'Casa Anjali',
      location: 'Manuel Antonio, Quepos, Costa Rica',
      description: 'Watercolors for this 7 guest room vacation rental house.',
    },
  ];
  return (
    <section className="pb-32">
      <Title title={'projects '} />

      {/* Projects section */}
      <div className="ml-5 mt-6 space-y-5">
        {allProjects.map((project,idx) => (
          <ProjectsSection key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
