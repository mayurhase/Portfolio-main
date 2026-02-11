"use client";
import Hero from "./sections/Hero";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  User,
  Star,
  Database,
} from "lucide-react";
import { TbTools } from "react-icons/tb";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            variants={scaleIn}
          >
            <User className="w-8 h-8 text-blue-400" aria-hidden="true" />
            <h2 id="about-heading" className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
              About Me
            </h2>
          </motion.div>
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
            variants={scaleIn}
          >
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              I am a Cloud & DevOps Engineer with 3.5+ years of industry experience and a background in full-stack development. I focus on AWS-based infrastructure, containerization, CI/CD automation, and Linux systems to support reliable application deployment and operations.
              <br />
              <br />
              My development background helps me understand application needs in production, allowing me to design infrastructure that is practical, scalable, and easy to maintain.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            variants={scaleIn}
          >
            <TbTools className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
  {
    title: "Cloud & Infrastructure",
    skills: "AWS (EC2, S3, RDS, IAM, VPC, CloudWatch, Lambda) Linux (Ubuntu, CentOS)",
    gradient: "from-blue-500 to-purple-500",
    icon: Code2,
  },

  {
    title: "Automation & DevOps",
    skills: "Shell scripting, Git, basic deployment automation, AWS monitoring & alerts",
    gradient: "from-blue-500 to-purple-500",
    icon: Database,
  },
  {
    title: "Databases",
    skills: "MySQL, PostgreSQL, SQL performance tuning & reporting",
    gradient: "from-purple-500 to-blue-500",
    icon: Star,
  },
  {
    title: "Security & IT Operations",
    skills: "IAM policies, security groups, encryption,\nVPC networking, VPN\nServiceNow, incident/change/problem management,\nITIL processes",
    gradient: "from-purple-500 to-blue-500",
    icon: Terminal,
  },
].map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 },
                  },
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div
                  className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-20`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div
                      className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.gradient}`}
                    ></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {category.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
