import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'End-to-End Quote-to-Cash Automation',
      description: 'Implemented CPQ with dynamic pricing, discounts, and product bundles. Automated approvals, contracts, and invoices via Flows and Process Builder. Developed LWC dashboards and integrated with Azure SQL/REST APIs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Salesforce CPQ', 'Flows', 'LWC', 'Apex', 'Azure SQL', 'REST API', 'Sales Cloud'],
      category: 'Salesforce',
      highlights: ['Dynamic pricing & discounts', 'Automated approvals & contracts', 'LWC dashboards', 'Azure SQL integration'],
    },
    {
      title: 'Salesforce Lead-to-Opportunity Automation & Reporting',
      description: 'Automated lead assignment, conversion, and reporting using Flows and Apex Triggers. Integrated web form data via REST APIs and scheduled weekly performance reports. Built Lightning Dashboards for real-time insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['Salesforce Flows', 'Apex Triggers', 'Scheduled Apex', 'REST API', 'Lightning Dashboards', 'Sales Cloud'],
      category: 'Salesforce',
      highlights: ['Automated lead assignment', 'REST API integration', 'Real-time dashboards', 'Weekly performance reports'],
    },
    {
      title: 'Predictive Sales Forecasting & Analytics',
      description: 'Used Einstein Analytics to forecast opportunities and predict deal closures. Integrated insights with Sales Cloud and visualized performance via dashboards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Salesforce Einstein Analytics', 'Sales Cloud', 'Lightning Dashboards', 'Apex', 'SOQL/SOSL'],
      category: 'Salesforce',
      highlights: ['Einstein AI forecasting', 'Predictive deal closure', 'Performance visualization', 'Sales Cloud integration'],
    },
    {
      title: 'Maritime Backoffice & Digital Logbook Application',
      description: 'Implemented and maintained backoffice application and a digital logbook system for maritime solutions.',
      image: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&h=500&fit=crop',
      tags: ['.NET Framework', 'Stored Procedures', 'API Development', 'Azure DevOps', 'Azure Web Apps', 'Azure Functions', 'Azure SQL'],
      category: 'Full-Stack',
      highlights: ['Backoffice application', 'Digital logbook system', 'Azure cloud integration', 'API development'],
    },
    {
      title: 'Cryptocurrency Exchange Platform',
      description: 'Built and deployed a crypto exchange & wallet system for Southeast Asia; led team and contributed individually.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop',
      tags: ['Java', 'Android', 'XML', 'MVC', 'RxJava', 'MySQL'],
      category: 'Android',
      highlights: ['Crypto exchange platform', 'Wallet system', 'Team leadership', 'Southeast Asia deployment'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Developed a unified e-commerce platform with Buyer, Seller, Admin, and Delivery modules.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['Kotlin', 'XML', 'Android', 'MVVM', 'Coroutine', 'SQL', 'Jetpack Compose', 'Room/Retrofit'],
      category: 'Android',
      highlights: ['Multi-module platform', 'Buyer & Seller modules', 'Admin & Delivery modules', 'Jetpack Compose UI'],
    },
    {
      title: 'Central Delivery App',
      description: 'Dynamic delivery app for any kind of product across the system in different domains (groceries, guest in cab).',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
      tags: ['Kotlin', 'Android', 'MVVM', 'Coroutine', 'SQL', 'Jetpack Compose'],
      category: 'Android',
      highlights: ['Multi-domain delivery', 'Dynamic product handling', 'Groceries & cab services', 'Modern architecture'],
    },
  ];

  const categories = ['All', 'Salesforce', 'Full-Stack', 'Android'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            Some of my recent work and side projects
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-primary-50 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mb-4 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
