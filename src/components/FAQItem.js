import React from 'react';
import { BsFillPlayFill, BsFillPauseFill, BsFillStopFill } from "react-icons/bs";

const FAQItem = ({ item, index, selected, onToggleAccordion, onStartTimer, onPauseTimer, onStopTimer, timer }) => {
  const isRunning = timer.isRunning;
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <tr key={index} className="border-b border-gray-200 transition-all">
      <td onClick={() => onToggleAccordion(index)} className="p-4 w-full">
        <div className="flex justify-between items-center">
          <label className={`text-gray-800 ${selected === index ? 'text-orange-500 font-bold' : ''}`}>
            {item.question}
          </label>
          <span className="text-gray-800 ml-4">{formatTime(timer.time)}</span>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${selected === index ? 'max-h-[200px]' : 'max-h-0'}`}
        >
          <p className="text-sm text-gray-600 mt-2">
            {item.answer}
          </p>
        </div>
      </td>
      <td className="flex items-center space-x-1 md:space-x-3 p-4">
        {isRunning ? (
          <button
            onClick={() => onPauseTimer(index)}
            className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
          >
            <BsFillPauseFill />
          </button>
        ) : (
          <button 
            onClick={() => onStartTimer(index)}
            className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
          >
            <BsFillPlayFill />
          </button>
        )}
        <button
          onClick={() => onStopTimer(index)}
          className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
        >
          <BsFillStopFill />
        </button>
      </td>
    </tr>
  );
};

export default FAQItem;
