import { useState, useEffect } from 'react';
import { BsFillPlayFill, BsFillPauseFill, BsFillStopFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa"; // History Icon
import { FiPlus } from "react-icons/fi";
import Navbar from './Navbar';

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

  // Format time in HH:MM
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
    <>
    <Navbar/>
    <div className="flex items-center justify-center w-full text-sm max-w-[500px]">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 text-gray-800">
        <div className="faq-wrapper">
          <header className="text-lg border-b border-gray-200 font-bold flex justify-between items-center p-4">
            <div className="">Yasar</div>
            <div className='flex items-center space-x-3'>
            <FaHistory />
            <FiPlus/>
            </div>
          </header>
          <div className="max-h-[300px] overflow-y-auto">
            <table className="w-full text-left">
              <tbody>
                {faqData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200  cursor-pointer transition-all duration-300"
                  >
                    <td onClick={() => toggleAccordion(index)} className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <label
                          className={`text-gray-800 ${
                            selected === index
                              ? 'text-orange-500 font-bold'
                              : ''
                          }`}
                        >
                          {item.question}
                        </label>
                        <span className="text-gray-800 ml-4">{formatTime(timers[index].time)}</span>
                      </div>
                      <div
                        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                          selected === index ? 'max-h-screen' : 'max-h-0'
                        }`}
                      >
                        <p className="text-sm text-gray-600 mt-2">
                          {item.answer}
                        </p>
                      </div>
                    </td>
                    <td className="flex items-center space-x-1 md:space-x-3 p-4">
                      {timers[index].isRunning ? (
                        <button
                          onClick={() => pauseTimer(index)}
                          className="text-gray-800 hover:text-orange-500 transition-colors"
                        >
                          <BsFillPauseFill />
                        </button>
                      ) : (
                        <button
                          onClick={() => startTimer(index)}
                          className="text-gray-800 hover:text-orange-500 transition-colors"
                        >
                          <BsFillPlayFill />
                        </button>
                      )}
                      <button
                        onClick={() => stopTimer(index)}
                        className="text-gray-800 hover:text-orange-500 transition-colors"
                      >
                        <BsFillStopFill />
                      </button>
                    </td>
                  </tr>
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

const faqData = [
  {
    question: 'Prompt to website',
    answer:
      'create a project for convert prompt to runnable website.',
  },
  {
    question: 'Work-tracker',
    answer:
      'create a project for work tracker.',
  },
  {
    question: 'Paymaster',
    answer:
      'create a website for paymaster.',
  }
];

export default FAQ;
