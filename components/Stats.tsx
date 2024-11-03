'use client';

import CountUp from 'react-countup';

const stats = [
  {
    number: 12,
    title: 'Months of expirience',
  },
  {
    number: 8,
    title: 'Projects completed',
  },
  {
    number: 7,
    title: 'Technolgies learned',
  },
  {
    number: 200,
    title: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-2 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={0.5}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.title.length > 15 ? 'max-w-[150px]' : 'max-w-[100px]'
                  } text-white/80 leading-snug`}
                >
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
