import TestimonialCard from '../components/TestimonialCard';
import herryImg from '../assets/herry.jpg';
import soteeImg from '../assets/sotee.jpg';

const testimonials = [
  {
    name: 'Herry Gayflor',
    role: 'Volunteer',
    imageUrl: herryImg ,
    quote: 'Volunteering here has changed my life and allowed me to help so many people.',
  },
  {
    name: 'Joseph Gayflor',
    role: 'Beneficiary',
    imageUrl: soteeImg,
    quote: 'This charity gave me hope when I needed it most. Truly life-changing!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
        <h1 className='text-3xl font-bold mb-10 text-center'>Testimonial</h1>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-8 md:grid-cols-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
