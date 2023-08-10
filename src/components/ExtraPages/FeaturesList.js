import './FeaturesList.css';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    title: 'CodeCards',
    description: 'Store and learn web development concepts through flashcards',
    content: 'CodeCards allows you to create and review flashcards for important web development concepts and syntax. Learn and memorize efficiently through repetition and testing.',
  },
  {
    title: 'Globetrot',
    description: 'Learn interesting facts about the world through flashcards',
    content: 'Globetrot provides you with flashcards on diverse facts covering all continents, countries, cultures, and people around the world. Discover new places and perspectives to expand your worldview.',
  },
  {
    title: 'Crafter',
    description: 'Create your own custom flashcards to learn anything you want', 
    content: 'The Crafter tab empowers you to create flashcards for any topic of your choice. Build flashcards on anything from history to mathematics to vocabulary. Craft your own personalized way to learn and remember.',
  }
];

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-tab">
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? 'active' : 'inactive'}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode='wait'>

        <motion.div
          key={tabs[activeTab].title}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='tab-description'
        >
          <h2>{tabs[activeTab].title}</h2>
          <p>{tabs[activeTab].description}</p>
          <p>{tabs[activeTab].content}</p>
          
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

