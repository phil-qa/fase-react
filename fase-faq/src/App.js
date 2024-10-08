import React, { useState, useEffect } from 'react';
import faqData from './faqData.json';
import './faq.css';  // Import the CSS file
import FAQItem from './components/FAQItem';



const App = () =>
{
  const [openItems, setOpenItems] = useState({});
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() =>
  {
    setFaqItems(faqData.faqItems);
  }, []);

  const toggleItem = (id) =>
  {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <div>
        {faqItems.map(item => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openItems[item.id]}
            toggleOpen={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;