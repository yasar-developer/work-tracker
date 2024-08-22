import React, { useState, useEffect } from 'react';
import { FaHistory, FaPlus } from "react-icons/fa";
import FAQItem from './FAQItem';
const faqData = [
  {
    question: 'Prompt to website',
    answer: 'create a project for convert prompt to runnable website.',
  },
  {
    question: 'Work-tracker',
    answer: 'create a project for work tracker.',
  },
  {
    question: 'Paymaster',
    answer: 'create a website for paymaster.',
  }
];

function FAQ() {
  const [selected, setSelected] = useState(null);
  const [timers, setTimers] = useState(
    faqData.map(() => ({ time: 0, isRunning: false }))
  );

  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  const startTimer = (index) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer, i) =>
        i === index ? { ...timer, isRunning: true } : timer
      )
    );
  };

  const pauseTimer = (index) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer, i) =>
        i === index ? { ...timer, isRunning: false } : timer
      )
    );
  };

  const stopTimer = (index) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer, i) =>
        i === index ? { time: 0, isRunning: false } : timer
      )
    );
  };

  useEffect(() => {
    const intervals = timers.map((timer, index) => {
      if (timer.isRunning) {
        return setInterval(() => {
          setTimers((prevTimers) =>
            prevTimers.map((t, i) =>
              i === index ? { ...t, time: t.time + 1 } : t
            )
          );
        }, 1000);
      }
      return null;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [timers]);

  return (
    <>
      <div className="flex items-center justify-center w-full text-sm max-w-[500px] p-4"> {/* Added padding */}
        <div className="bg-white rounded-2xl shadow-2xl w-full p-6 text-gray-800"> {/* Added border */}
          <div className="faq-wrapper">
            <header className="text-lg font-bold flex justify-between items-center p-4">
              <div>Yasar</div>
              <div className="flex items-center space-x-3">
                <FaHistory className='cursor-pointer'/>
                <FaPlus className='cursor-pointer'/>
              </div>
            </header>
            <div className="max-h-[300px] overflow-y-auto bg-gray-100 rounded-xl p-2 shadow-lg"> {/* Added padding */}
              <table className="w-full text-left border-collapse"> {/* Ensured full width and border-collapse */}
                <tbody>
                  {faqData.map((item, index) => (
                    <FAQItem
                      key={index}
                      item={item}
                      index={index}
                      selected={selected}
                      onToggleAccordion={toggleAccordion}
                      onStartTimer={startTimer}
                      onPauseTimer={pauseTimer}
                      onStopTimer={stopTimer}
                      timer={timers[index]}
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

export default FAQ;
