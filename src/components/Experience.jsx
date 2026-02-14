import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Salesforce Developer',
      company: 'Navtor',
      location: 'Egersund, Norway',
      period: 'Jan 2023 - Present',
    },
    {
      title: 'Package Consultant Salesforce',
      company: 'IBM',
      location: 'Kolkata, India',
      period: 'April 2021 - Aug 2022',
    },
    {
      title: 'Software Developer',
      company: 'EMXCEL Solutions',
      location: 'Ahmedabad, India',
      period: 'Nov 2019 - Apr 2021',
    },
    {
      title: 'Software Developer',
      company: 'Jeno Creatives Private Limited',
      location: 'Kolkata, India',
      period: 'Dec 2018 - Aug 2019',
    },
    {
      title: 'Android Developer',
      company: 'Onqanet Technologies',
      location: 'Kolkata, India',
      period: 'Aug 2017 - Nov 2018',
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            My professional journey and accomplishments
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative md:flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
                >
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 min-h-[180px]">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-600 font-semibold mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-slate-500">{exp.location}</p>
                        </div>
                        <Briefcase className="text-primary-600" size={24} />
                      </div>

                      <div className="flex items-center text-sm text-slate-600">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
