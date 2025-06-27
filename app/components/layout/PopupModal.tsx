"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function PopupModal({ isOpen, onClose, title, children }: PopupModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-[url('/bg.png')] rounded-2xl p-8 shadow-2xl max-w-lg w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#00897B]">{title}</h2>
              <button 
                className="text-gray-500 hover:text-red-500 text-2xl font-bold" 
                onClick={onClose}
              >
                &times;
              </button>
            </div>
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
