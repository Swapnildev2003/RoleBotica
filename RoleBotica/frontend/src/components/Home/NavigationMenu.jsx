
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <motion.img
                        src="/src/assets/chatbot_6819708.png"
                        alt="Logo"
                        className="h-12 transition-transform duration-300"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </Link>
                <div className="flex space-x-8">
                    <motion.div
                        whileHover={{ scale: 1.05, color: '#4F46E5' }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" className="text-lg font-medium hover:underline">Home</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, color: '#4F46E5' }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/ai-chat" className="text-lg font-medium hover:underline">AI Chat</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, color: '#4F46E5' }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/profile" className="text-lg font-medium hover:underline">Settings</Link>
                    </motion.div>
                </div>
                {isAuthenticated && (
                    <div className="flex items-center space-x-4">
                        <img
                            src={user.picture}
                            alt={user.name}
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="text-white">
                            <h2 className="text-lg font-semibold">{user.name}</h2>
                            <p className="text-sm">{user.email}</p>
                        </div>
                    </div>
                )}

              
                <div className="flex space-x-4">
                    {isAuthenticated ? (
                        <motion.div
                            
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                className="bg-gray-700 px-6 py-2 rounded-lg shadow-md text-white text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            >
                                Log Out
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                className="bg-blue-600 px-6 py-2 rounded-lg shadow-md text-white text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                                onClick={() => loginWithRedirect()}
                            >
                                Log In
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
