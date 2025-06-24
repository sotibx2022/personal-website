"use client"
import React, { useEffect, useState } from 'react';
interface CounterItem {
  number: number;
  text: string;
}
const WorkCounterSection: React.FC = () => {
  const [counters, setCounters] = useState<CounterItem[]>([
    { number: 0, text: 'Project Completed' },
    { number: 0, text: 'Happy Clients' },
    { number: 0, text: 'Years of Experiences' },
    { number: 0, text: 'Software Skills' },
  ]);
  const targetValues = [5, 4, 10, 15];
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const interval = 50; // Update interval in ms
    const steps = duration / interval;
    const incrementCounters = () => {
      setCounters(prevCounters => 
        prevCounters.map((counter, index) => {
          const increment = targetValues[index] / steps;
          const newNumber = Math.min(
            counter.number + increment,
            targetValues[index]
          );
          return { ...counter, number: parseFloat(newNumber.toFixed(1)) };
        })
      );
    };
    const animationInterval = setInterval(incrementCounters, interval);
    // Clean up interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);
  return (
    <section className="section-work-data section ">
      <div className="container grid grid-four-col">
        {counters.map((counter, index) => (
          <div key={index}>
            <h2 className="counter-numbers">
              {counter.number.toFixed(counter.number % 1 === 0 ? 0 : 1)} +
            </h2>
            <p>{counter.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WorkCounterSection;