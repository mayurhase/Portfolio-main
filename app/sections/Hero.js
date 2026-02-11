"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TechStack from "../components/TechStack";
import { useState } from "react";
import ContactPopup from "../components/ContactPopup";
import ProjectPopup from "../components/ProjectPopup";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4 mb-12">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              <span className="text-gray-200">
                Talk is Cheap </span>{" "}
              <span className="text-gray-200">Show me the Code! </span>
            </motion.h1>
            <meta name="description" content="Talk is Cheap Show me the Code! - Mayur Hase, Cloud & DevOps Engineer" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative inline-block">
                <span className="text-3xl md:text-4xl font-bold">
                  <span className="mx-2 px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 inline-flex items-center">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                     Cloud & DevOps Engineer
                    </span>
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(147, 51, 234, 0.4)" }}
            className="mb-8 cursor-pointer"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-purple-600 to-blue-400 rounded-full mx-auto p-1">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/cloud_devops_engineer.jpeg"
                  alt="Cloud & DevOps Engineer Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Cloud & DevOps Engineer specializing in AWS infrastructure, automation, and scalable systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500
                       text-white font-medium hover:from-purple-600 hover:to-blue-600
                       transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Contact Me
            </button>
            <button
              onClick={() => setIsProjectOpen(true)}
              className="px-8 py-3 rounded-xl border border-purple-500/30
                       text-white font-medium hover:bg-purple-500/10
                       transition-all duration-300"
            >
              View Projects
            </button>

            {/* View Resume Button */}
            <a
              href="/Mayur-Hase-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-purple-500/30
                       text-white font-medium hover:bg-purple-500/10
                       transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <div className=" max-w-lg mx-auto">
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm text-gray-400">Experience</div>
                <div className="text-xl font-semibold text-white">
                  3.5+ Years of Cloud & DevOps experience
                </div>
              </div>
            </div>
            <div className="mt-8">
              <TechStack />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Popups */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ProjectPopup
        isOpen={isProjectOpen}
        onClose={() => setIsProjectOpen(false)}
      />
    </section>
  );
};

export default Hero;
