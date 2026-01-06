import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 5000, label: "People Helped" },
  { number: 1200, label: "Children Educated" },
  { number: 50, label: "Communities Reached" },
  { number: 100, label: "Volunteers" },
];

function Counter({ value, triggerKey, delay = 0 }) {
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setShowPlus(false);
    setCount(0);

    const controls = animate(motionValue, value, {
      duration: 2,
      delay,
      ease: [0.42, 0, 0.58, 1], // easeInOut
      onUpdate: (v) => {
        setCount(Math.floor(v));
        setScale(1.2 - 0.2 * (v / value)); // pop effect
      },
      onComplete: () => setShowPlus(true),
    });

    return () => controls.stop();
  }, [value, motionValue, delay, triggerKey]);

  return (
    <motion.span
      style={{ scale }}
      className="inline-flex items-baseline"
    >
      {count}
      {showPlus && (
        <motion.span
          className="ml-1 text-[#B11226]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          +
        </motion.span>
      )}
    </motion.span>
  );
}

export default function Impact() {
  const [trigger, setTrigger] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-[#B11226]">Impact</span>
        </h1>
        <p className="text-gray-700 mb-12 text-lg md:text-xl max-w-3xl mx-auto">
          We are dedicated to transforming lives and communities. Every initiative we take, every program we run, and every volunteer that joins us helps build a brighter future. 
          Together, we bring hope, education, and support to those who need it most.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileInView={() => setTrigger((prev) => prev + 1)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-4xl font-bold text-[#B11226] mb-2">
                <Counter value={item.number} delay={index * 0.3} triggerKey={trigger} />
              </h2>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-gray-600 italic text-lg max-w-3xl mx-auto">
          “Every action counts. Together, we can create a lasting impact.” 
        </p>

      </div>
    </section>
  );
}
