import React from "react";
import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithub,
  SiGithubactions,
  SiAnsible,
  SiGit,
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    // Primary Cloud & DevOps Tools
    { icon: SiAmazonwebservices, color: "#FF9900", name: "AWS" },
    { icon: SiLinux, color: "#FCC624", name: "Linux" },
    { icon: SiDocker, color: "#2496ED", name: "Docker" },
    { icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
    { icon: SiTerraform, color: "#623CE4", name: "Terraform" },
    { icon: SiGit, color: "#F05032", name: "Git" },
    { icon: SiGithub, color: "#FFFFFF", name: "GitHub" },
    { icon: SiGithubactions, color: "#2088FF", name: "GitHub Actions" },
    // Optional Cloud & DevOps Tools
    { icon: SiAnsible, color: "#EE0000", name: "Ansible" },
  ].filter((tech) => tech.icon); // Filter out any undefined icons

  // Create three copies to ensure smooth infinite scrolling
  const extendedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="w-full overflow-hidden py-4 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1 * technologies.length * 96], // Multiply by item width (96px)
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {extendedTechnologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="inline-flex flex-col items-center mx-6 group"
            >
              <div className="relative">
                <Icon
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-20"
                  style={{ backgroundColor: tech.color }}
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 0.15,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                />
              </div>
              <span className="mt-1 text-xs font-medium text-blue-200/70">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechStack;
