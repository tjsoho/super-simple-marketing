"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const SimpleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo with larger size */}
          <Logo className="w-24 h-24" />

          {/* Contact */}
          <a
            href="mailto:hello@company.com"
            className="text-dark-teal hover:text-dark-teal/80 transition-colors duration-300"
          >
            toby@ai-guy.co
          </a>

          {/* Copyright */}
          <p className="text-dark-teal/80 text-sm">
            © {currentYear} Ai Guy Business Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
