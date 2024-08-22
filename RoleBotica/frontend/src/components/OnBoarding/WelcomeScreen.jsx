
import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeScreen.css'; 

const WelcomeScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6">
           
            <header className="header-container">
                <motion.img
                    src="/src/assets/chatbot.png"
                    alt="Logo"
                    className="h-24 mx-auto mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />

                <motion.div
                    className="header-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                >
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        <span className="rolebotica-text">
                            <motion.span
                                className="rolebotica-word"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                            >
                                Welcome
                            </motion.span>
                            <motion.span
                                className="rolebotica-word"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                            >
                                To
                            </motion.span>
                            <motion.span
                                className="rolebotica-word"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
                            >
                                RoleBotica
                            </motion.span>
                        </span>
                    </h1> 
                    
                    <p className="text-xl text-gray-800 mb-6 leading-relaxed max-w-3xl text-center mx-auto p-4 ">
    Experience the future with our advanced AI interactions and personalized features. RoleBotica offers intuitive chat experiences designed to fit your unique needs. From role-playing scenarios to business solutions, our platform provides dynamic and intelligent responses that feel truly lifelike. Explore a wide range of customizable personas, real-time conversations, and powerful integrations that adapt to how you engage. Step into a smarter world with AI that evolves with you, ensuring a seamless and engaging experience every time.
</p>


                </motion.div>
            </header>

            {/* Features Section */}
            <section className="flex flex-col items-center mb-12">
                <motion.h2
                    className="text-4xl font-semibold text-gray-800 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                >
                    Why Choose Us?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                    <motion.div
                        className="feature-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/src/assets/graident-ai-robot-vectorart.png" alt="Instant AI Chat" />
                        <h3 className="text-2xl font-semibold mb-3">Instant AI Chat</h3>
                        <p className="text-gray-600">Interact with a range of AI personas tailored to your needs and preferences, instantly.</p>
                    </motion.div>
                    <motion.div
                        className="feature-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/src/assets/abstract.png" alt="Seamless Integration" />
                        <h3 className="text-2xl font-semibold mb-3">Seamless Integration</h3>
                        <p className="text-gray-600">Effortless sign-up with Google, Facebook, Email, or OTP for a quick start.</p>
                    </motion.div>
                    <motion.div
                        className="feature-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/src/assets/user.png" alt="Customizable Profiles" />
                        <h3 className="text-2xl font-semibold mb-3">Customizable Profiles</h3>
                        <p className="text-gray-600">Enhance your experience with personalized profile details, qualifications, and preferences.</p>
                    </motion.div>
                </div>
            </section>

           
            <footer className="bg-gray-900 text-white py-8 mt-auto w-full rounded-xl px-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h4 className="text-xl font-semibold">RoleBotica</h4>
                        <p className="text-gray-400">Your AI companion for smarter interactions.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">About Us</a>
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} RoleBotica. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WelcomeScreen;
