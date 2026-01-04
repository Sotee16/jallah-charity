import EventCard from '../components/EventCard';
import event1Img from '../assets/event1.jpg';
import event2Img from '../assets/event2.jpg';

const Events = [
  {
    title: 'Community Food Drive',
    date: 'Jan 15, 2026',
    imageUrl: event1Img,
    description: 'Providing meals to over 500 families in need.',
    link: '#',
  },
  {
    title: 'Health Awareness Campaign',
    date: 'Feb 20, 2026',
    imageUrl: event2Img,
    description: 'Free health screenings and education in local communities.',
    link: '/gallery',
  },
];

export default function CharityEvents() {
  return (
    <section id='event' className="  py-24 bg-gray-50">
                <h1 className='text-3xl font-bold mb-10 text-center'>Our Events</h1>

      <div className=" max-w-7xl mx-auto px-6 lg:px-8 grid gap-8 md:grid-cols-2">
        {Events.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
}
