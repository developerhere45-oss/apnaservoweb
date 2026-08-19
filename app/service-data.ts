export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  details: string;
  services: string[];
  faqs: Array<[string, string]>;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'ac-repair-guwahati', name: 'AC Repair & Service in Guwahati', shortName: 'AC Services',
    description: 'Book AC repair, installation and maintenance in Guwahati, Assam with ApnaServo.',
    details: 'Whether your AC is not cooling, leaking, making noise, or needs a seasonal check-up, ApnaServo helps households in Guwahati connect with service professionals for AC care.',
    services: ['AC repair and troubleshooting', 'AC installation and uninstallation', 'AC servicing and maintenance', 'Cooling and water-leak checks'],
    faqs: [['Do you offer AC repair in Guwahati?', 'ApnaServo is launching home services in selected Guwahati areas. Check availability in the app or contact our team for your locality.'], ['Can I request AC installation or servicing?', 'Yes. AC repair, installation and routine maintenance are service categories planned for the platform.']]
  },
  {
    slug: 'plumber-guwahati', name: 'Plumber in Guwahati', shortName: 'Plumbing Services',
    description: 'Find plumbing help in Guwahati, Assam for leaks, clogs, fittings and home plumbing repairs.',
    details: 'From a leaking tap to a blocked drain or new fitting, ApnaServo makes it simpler to request professional plumbing help for homes in Guwahati.',
    services: ['Leak and tap repair', 'Drain and clog solutions', 'Bathroom and kitchen fittings', 'Water-pipe repairs and installation'],
    faqs: [['Can I book a plumber in Guwahati?', 'Service availability depends on your selected area. ApnaServo is beginning with selected Guwahati localities.'], ['What plumbing jobs can I request?', 'You can request help for common home plumbing needs such as leaks, fittings, drains and pipe repairs.']]
  },
  {
    slug: 'electrician-guwahati', name: 'Electrician in Guwahati', shortName: 'Electrical Services',
    description: 'Request electrical repair, wiring, fitting and installation services in Guwahati, Assam.',
    details: 'For everyday electrical repairs, fittings and installation needs, ApnaServo connects Guwahati households with local service professionals.',
    services: ['Electrical repair and fault checks', 'Switch, socket and light fitting', 'Fan and appliance installation', 'Home wiring support'],
    faqs: [['Which electrical services are available?', 'Planned services include repairs, fittings, installations and common home wiring support.'], ['Is service available throughout Assam?', 'ApnaServo is launching in selected Guwahati areas first and plans to expand service coverage over time.']]
  },
  {
    slug: 'home-cleaning-guwahati', name: 'Home Cleaning Services in Guwahati', shortName: 'Cleaning Services',
    description: 'Explore deep cleaning, kitchen, bathroom and home cleaning services in Guwahati, Assam.',
    details: 'Keep your home ready for everyday life with cleaning help for kitchens, bathrooms and other living spaces in Guwahati.',
    services: ['Full home deep cleaning', 'Bathroom cleaning', 'Kitchen cleaning', 'Move-in and move-out cleaning'],
    faqs: [['What types of home cleaning can I request?', 'The platform is designed for deep cleaning, kitchen cleaning, bathroom cleaning and other household cleaning needs.'], ['How do I check availability?', 'Choose your location in the ApnaServo app or contact support to check whether your Guwahati area is serviceable.']]
  },
  {
    slug: 'painting-services-guwahati', name: 'Painting Services in Guwahati', shortName: 'Painting Services',
    description: 'Find home painting, repainting and wall-finish services in Guwahati, Assam with ApnaServo.',
    details: 'For a room refresh, repainting project or a larger home makeover, ApnaServo helps Guwahati residents request painting services.',
    services: ['Interior home painting', 'Exterior painting', 'Wall preparation and repainting', 'Small-room and full-home projects'],
    faqs: [['Can I request house painting in Guwahati?', 'Yes, painting is among the home-service categories planned for selected Guwahati service areas.'], ['Can I discuss the scope before booking?', 'ApnaServo supports clear job discussions and quotations before a service is confirmed.']]
  },
  {
    slug: 'carpenter-guwahati', name: 'Carpenter Services in Guwahati', shortName: 'Carpentry Services',
    description: 'Request carpentry, furniture repair and woodwork services in Guwahati, Assam.',
    details: 'From furniture repairs to practical woodwork at home, ApnaServo helps people in Guwahati find the right professional for carpentry needs.',
    services: ['Furniture repair', 'Custom woodwork', 'Door, cabinet and shelf repairs', 'Assembly and small carpentry jobs'],
    faqs: [['What carpentry work can I request?', 'Common requests include furniture repair, cabinets, doors, shelves and small custom woodwork.'], ['Are carpenters available across Guwahati?', 'Availability is based on selected launch areas; check your location before confirming a request.']]
  },
  {
    slug: 'pest-control-guwahati', name: 'Pest Control in Guwahati', shortName: 'Pest Control',
    description: 'Explore residential pest-control services in Guwahati, Assam for a cleaner, healthier home.',
    details: 'ApnaServo includes pest control among its home-service categories for households looking for support with a clean and comfortable living space.',
    services: ['General home pest control', 'Kitchen and bathroom pest treatment', 'Scheduled preventive service', 'Residential pest-control requests'],
    faqs: [['Is pest control offered in Guwahati?', 'Pest control is a service category for selected ApnaServo launch areas in Guwahati.'], ['How can I check whether my area is covered?', 'Use the app or contact ApnaServo support with your locality to check current serviceability.']]
  },
  {
    slug: 'appliance-repair-guwahati', name: 'Appliance Repair in Guwahati', shortName: 'Appliance Repair',
    description: 'Find appliance repair and installation support in Guwahati, Assam with ApnaServo.',
    details: 'When a household appliance needs attention, ApnaServo helps Guwahati residents request repair and installation support through one platform.',
    services: ['Home appliance troubleshooting', 'Appliance repair requests', 'Installation support', 'Maintenance visits'],
    faqs: [['Which appliances can I get help with?', 'Appliance repair and installation are service categories; the exact service options depend on availability in your area.'], ['How do I request appliance repair?', 'Download the app or contact ApnaServo to check availability and begin a service request.']]
  }
];

export function findServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
