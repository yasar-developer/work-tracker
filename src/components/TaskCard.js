import React, { useState } from 'react';
import { FaHistory, FaPlus } from "react-icons/fa";
import FAQItem from './FAQItem';
import CreateCard from './TaskCreateCard';

const TaskCard = ({ name, work, isUserEnabled }) => {
  const [selected, setSelected] = useState(null);
  const [showCreateCard, setShowCreateCard] = useState(false);

  const toggleCreateCard = () => {
    console.log("toggleCreateCard called");
    setShowCreateCard(!showCreateCard);
  };

  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <>
      {showCreateCard && <CreateCard test={toggleCreateCard} />}
      <div className="flex items-center justify-center w-full text-sm max-w-[500px] p-4"> {/* Added padding */}
        <div className="bg-white bg-opacity-70 rounded-2xl shadow-2xl w-full p-6 text-gray-800 backdrop-blur-lg"> {/* Added border */}
          <div className="faq-wrapper">
            <header className="text-lg font-bold flex justify-between items-center p-4">
              <div>{name}</div>
              <div className="flex items-center space-x-3">
                <FaHistory className='cursor-pointer'/>
                {isUserEnabled && <FaPlus className='cursor-pointer' onClick={() => setShowCreateCard(true)} />} 
              </div>
            </header>
            <div className="max-h-[200px] overflow-y-auto bg-gray-100 rounded-xl p-2 shadow-lg min-h-[200px]"> {/* Added padding */}
              <table className="w-full text-left border-collapse"> {/* Ensured full width and border-collapse */}
                <tbody>
                  {work.map((item, index) => (
                    <FAQItem
                      key={item._id} // Use key prop correctly
                      item={item}
                      index={index}
                      selected={selected}
                      onToggleAccordion={toggleAccordion}
                      isUserEnabled={isUserEnabled}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
