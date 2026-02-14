import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Salesforce',
      skills: [
        'CPQ',
        'Vlocity/OmniStudio',
        'OmniScripts',
        'FlexCards',
        'WalkMe',
        'Integration Procedures',
        'Sales Cloud',
        'Service Cloud',
        'Lightning Web Components (LWC)',
        'Aura Components',
        'Apex Classes',
        'Apex Triggers',
        'Batch Apex',
        'Scheduled Apex',
        'SOQL',
        'SOSL',
        'Flows',
        'Workflow Rules',
        'Process Builder',
        'Approval Processes',
        'Validation Rules',
        'Security & Access',
        'Reports & Dashboards',
      ],
    },
    {
      title: 'Development & Databases',
      skills: [
        'Android Development',
        'Data structure & Algorithm',
        'C#',
        '.NET Framework',
        'ASP.NET Core',
        'REST API Development',
        'Kotlin',
        'Java',
        'HTML',
        'CSS',
        'XML',
        'SQL Server',
        'Azure SQL',
        'Stored Procedures',
        'SQLite',
        'MongoDB',
      ],
    },
    {
      title: 'Cloud & AI',
      skills: [
        'Microsoft Azure',
        'AWS',
        'Salesforce AI',
        'Agentforce',
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Azure DevOps',
        'Git',
        'GitHub Actions',
        'CI/CD',
        'Agile Methodology',
        'Scrum',
        'Visual Studio',
        'TestRail',
        'Android Studio',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-primary-50 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary-600 rounded-full mr-3"></span>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 bg-white border border-primary-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-primary-50 hover:border-primary-400 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
