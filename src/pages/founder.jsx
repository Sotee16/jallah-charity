import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import founderImage from '../assets/founder.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    name: 'Vision & Mission',
    description:
      'Jallah Kamara leads with unwavering vision, inspiring hope and driving transformative change across communities.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Integrity & Trust',
    description:
      'Guided by strong principles, Jallah ensures transparency and builds trust with donors, volunteers, and beneficiaries.',
    icon: LockClosedIcon,
  },
  {
    name: 'Community Impact',
    description:
      'Dedicated to action, Jallah has empowered hundreds of people through innovative programs and initiatives.',
    icon: ServerIcon,
  },
];

export default function Founder() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* Text Section */}
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600" data-aos="fade-up">
                Meet Our Founder
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" data-aos="fade-up" data-aos-delay="100">
                Jallah Kamara
              </p>
              <p className="mt-6 text-lg/8 text-gray-700" data-aos="fade-up" data-aos-delay="200">
                A visionary leader with a strong, compassionate spirit, dedicated to restoring hope and improving lives through our charity initiatives.
              </p>

              {/* Features / Highlights */}
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature, idx) => (
                  <div
                    key={feature.name}
                    className="relative pl-9"
                    data-aos="fade-up"
                    data-aos-delay={300 + idx * 100}
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image Section */}
          <img
            alt="Jallah Kamara"
            src={founderImage}
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-auto md:-ml-4 lg:-ml-0"
            data-aos="zoom-in" 
            data-aos-delay="500"
          />
        </div>
      </div>
    </section>
  );
}
