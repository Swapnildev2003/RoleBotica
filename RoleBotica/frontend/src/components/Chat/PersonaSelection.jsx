
import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaUserTie, FaUserSecret, FaHeart } from 'react-icons/fa';

const personas = [
  { 
    name: 'Friend', 
    icon: <FaUser className="text-blue-500" />, 
    img: '/path/to/friend-image.jpg' 
  },
  { 
    name: 'Mother', 
    icon: <FaUserTie className="text-red-500" />, 
    img: '/path/to/mother-image.jpg' 
  },
  { 
    name: 'Father', 
    icon: <FaUserSecret className="text-green-500" />, 
    img: '/path/to/father-image.jpg' 
  },
  { 
    name: 'Girlfriend', 
    icon: <FaHeart className="text-pink-500" />, 
    img: '/path/to/girlfriend-image.jpg' 
  },
];

const PersonaSelection = ({ onSelectPersona }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 p-4">
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Choose Your Persona
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personas.map((persona, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
            onClick={() => onSelectPersona(persona)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-5xl mb-4">{persona.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-700">{persona.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonaSelection;
