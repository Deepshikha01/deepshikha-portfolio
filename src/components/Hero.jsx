import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Deepshikha Shaw</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 mb-4 font-medium">
              Salesforce Consultant | IT Professional
            </p>
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
              Specializing in Salesforce, Android, and .NET full-stack development, along with Cloud platforms. Building scalable CRM and enterprise solutions that solve complex business challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="https://www.linkedin.com/in/deepshikha-shaw-b1267a128/"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </a>
            <a
              href="/deepshikha-portfolio/documents/Deepshikha_Shaw_Resume_SF_IN.pdf"
              download="Deepshikha_Shaw_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a
              href="https://github.com/Deepshikha01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-primary-50"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/deepshikha-shaw-b1267a128/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-primary-50"
            >
              <Linkedin size={24} className="text-slate-700" />
            </a>
            <a
              href="mailto:shawdeepshikha@gmail.com"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-primary-50"
            >
              <Mail size={24} className="text-slate-700" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="animate-bounce"
          >
            <a href="#about" className="inline-block text-primary-600">
              <ArrowDown size={32} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
