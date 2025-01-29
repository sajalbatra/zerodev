"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell } from 'lucide-react';

export default function EventsComingSoon() {
  const targetDate = new Date("2025-02-01");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      // If the target date has passed, set everything to 0
      if (timeDifference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      // Calculate remaining time
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    };

    // Update every second
    const timer = setInterval(updateTimer, 1000);

    // Initial call to set the timer
    updateTimer();

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="flex items-center justify-center ">
      <motion.div 
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get ready for an incredible lineup of podcast events. Be the first to know when we launch!
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <span className="text-3xl md:text-4xl font-bold text-white block">
                  {value}
                </span>
                <span className="text-purple-400 text-sm uppercase tracking-wider">
                  {unit}
                </span>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="max-w-md mx-auto"
        >
          <div className="relative flex content-center gap-8">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="md:w-full px-6 py-4 rounded-full bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm w-3/4"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute md:right-2 md:top-0 bg-purple-500 text-white md:px-6 md:py-2 rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2 p-2 m-2 right-0 "
            >
              <Bell className="w-4 h-4" />
              Notify Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Clock className="w-5 h-5 text-purple-400" />
          <span className="text-gray-400">
            Timezone: {new Intl.DateTimeFormat().resolvedOptions().timeZone}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
