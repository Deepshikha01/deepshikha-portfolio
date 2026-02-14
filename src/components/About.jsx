import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Player',
      description: 'Excellent collaboration and communication skills',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Get to know me better
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Hello! I'm Deepshikha Shaw
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I am an experienced <strong>Salesforce Consultant</strong> with <strong>8 years of IT experience</strong>, specializing in 
                  <strong> Salesforce CPQ, OmniStudio/Vlocity, Apex, Lightning Web Components (LWC), Visualforce, Sales Cloud, Service Cloud, 
                  and Salesforce integrations</strong>. I design and implement custom CRM solutions that streamline business processes and drive efficiency.
                </p>
                <p>
                  In addition to Salesforce, I have hands-on experience in <strong>Android development (Kotlin/Java)</strong>, creating mobile applications 
                  with seamless backend integrations, and <strong>.NET full-stack development</strong> (.NET Framework, ASP.NET Core, SQL Server, REST APIs) 
                  to deliver end-to-end enterprise-grade solutions.
                </p>
                <p>
                  I am proficient in <strong>Cloud platforms</strong> including Salesforce Cloud, AWS, and Azure, as well as DevOps practices and QA/automation. 
                  I have a proven ability to translate business requirements into <strong>scalable, robust, and well-tested solutions</strong>, collaborating effectively 
                  in Agile, cross-functional teams.
                </p>
                <p>
                  <strong>Currently seeking opportunities</strong> to leverage my Salesforce, Android, and Full-Stack expertise to deliver innovative projects 
                  and collaborate with talented teams.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary-600 mb-3">{item.icon}</div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
