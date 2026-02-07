import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Brain,
  Database,
  Box,
  Code2,
  FileJson,
  Layout,
  Bot,
  Boxes,
  Globe,
  Github,
  Eye,
  X,
  Sparkles,
  MonitorSmartphone,
  Mic,
  Volume2,
  Flame,
  Server,
  Shield
} from 'lucide-react';

const ProjectPopup = ({ isOpen, onClose }) => {
  const projects = [
    {
      title: "Mayur Auto World",
      description: "Business website deployed on cloud hosting with end-to-end infrastructure setup. Handled server provisioning, domain mapping, HTTPS configuration, and deployment lifecycle. Focused on stable delivery and minimal downtime during updates.",
      techStack: [
        { name: "AWS EC2", icon: Server, color: "#FF9900" },
        { name: "Linux", icon: Code2, color: "#FCC624" },
        { name: "Nginx", icon: Globe, color: "#009639" },
        { name: "DNS", icon: Globe, color: "#007BFF" },
        { name: "SSL", icon: Shield, color: "#00AEEF" },
        { name: "Monitoring", icon: MonitorSmartphone, color: "#28A745" }
      ],
      livePreview: "https://www.mayurautoworld.in",
      image: "/projects/mayur-auto-world.png"
    },
    {
      title: "Shark Commercial",
      description: "Production-grade business website deployed on cloud infrastructure with focus on operational stability. Managed hosting, DNS, SSL, access control, and routine maintenance. Ensured secure and consistent production delivery.",
      techStack: [
        { name: "AWS", icon: Server, color: "#FF9900" },
        { name: "Linux", icon: Code2, color: "#FCC624" },
        { name: "Nginx", icon: Globe, color: "#009639" },
        { name: "SSL", icon: Shield, color: "#00AEEF" },
        { name: "DNS", icon: Globe, color: "#007BFF" },
        { name: "IT Operations", icon: MonitorSmartphone, color: "#28A745" }
      ],
      livePreview: "https://www.sharkcommercial.in",
      image: "/projects/shark-commercial.png"
    },
    {
      title: "Saivatika 4",
      description: "Production website deployed and maintained on cloud infrastructure with focus on reliability and performance. Managed hosting, domain configuration, SSL, deployment workflows, and uptime monitoring. Ensured secure access, optimized load performance, and handled production updates.",
      techStack: [
        { name: "AWS", icon: Server, color: "#FF9900" },
        { name: "Linux", icon: Code2, color: "#FCC624" },
        { name: "Nginx", icon: Globe, color: "#009639" },
        { name: "SSL", icon: Shield, color: "#00AEEF" },
        { name: "DNS", icon: Globe, color: "#007BFF" },
        { name: "Deployment Automation", icon: Boxes, color: "#6F42C1" }
      ],
      livePreview: "https://www.saivatika4.in",
      featured: true,
      image: "/projects/saivatika4.png"
    },
    {
      title: "Sk Auto World",
      description: "Cloud-hosted commercial website with infrastructure configured for availability and security. Managed server setup, environment configuration, and production deployments. Implemented monitoring and basic alerting for uptime.",
      techStack: [
        { name: "AWS", icon: Server, color: "#FF9900" },
        { name: "Linux", icon: Code2, color: "#FCC624" },
        { name: "Deployment Automation", icon: Boxes, color: "#6F42C1" },
        { name: "Security Groups", icon: Shield, color: "#00AEEF" },
        { name: "Cloud Monitoring", icon: MonitorSmartphone, color: "#28A745" }
      ],
      livePreview: "https://www.skautoworld.in",
      image: "/projects/sk-auto-world.png"
    },
    {
      title: "Royal Shetkari",
      description: "Public-facing organizational website deployed on cloud infrastructure with a focus on stability, security, and operational reliability. Responsible for hosting setup, domain and DNS configuration, SSL enforcement, and ongoing production maintenance.",
      techStack: [
        { name: "AWS", icon: Server, color: "#FF9900" },
        { name: "Linux", icon: Code2, color: "#FCC624" },
        { name: "Nginx", icon: Globe, color: "#009639" },
        { name: "DNS", icon: Globe, color: "#007BFF" },
        { name: "SSL", icon: Shield, color: "#00AEEF" },
        { name: "Cloud Operations", icon: MonitorSmartphone, color: "#28A745" }
      ],
      livePreview: "https://www.royalshetkari.org",
      image: "/projects/royal-shetkari.png"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl"
          >
            <div className="bg-gradient-to-br from-gray-900/98 to-black/98
                          border border-purple-500/30 shadow-xl shadow-purple-500/20
                          backdrop-blur-xl rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <MonitorSmartphone className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    Featured Projects
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/5 rounded-xl overflow-hidden border 
                              ${project.featured
                        ? 'border-purple-500/50 shadow-lg shadow-purple-500/30 scale-105'
                        : 'border-purple-500/30'} 
                              hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 
                              transition-all duration-300`}
                  >
                    <div className="relative h-48 md:h-52">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full object-cover rounded-t-xl"
                        priority={index === 0}
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map(({ name, icon: Icon, color }) => (
                          <div
                            key={name}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-300"
                          >
                            <Icon className="w-4 h-4" style={{ color }} />
                            <span className="text-xs font-medium">{name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.livePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Preview</span>
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">View Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;

