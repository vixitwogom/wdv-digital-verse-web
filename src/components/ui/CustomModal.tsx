import React from "react";
import { motion, AnimatePresence, Variants, easeOut } from "framer-motion";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// Zoom-in effect modal variants
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          {/* Container for modal with scroll support */}
          <motion.div
            className="bg-white w-full max-w-4xl mx-4 sm:mx-6 md:mx-auto max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-2xl shadow-xl relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#012345]">{title}</h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
