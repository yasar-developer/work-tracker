import React, { useState, useContext } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillStopFill,
} from "react-icons/bs";
import Timer from "./Timer";
import calculateSecondsBetweenDates from "../utils/TimerHelper";
import { ResumeStart, handlePause, handleStop, handleStart } from "../utils/WorkUtils";
import MyContext from "../context/UserContext";
import { RxResume } from "react-icons/rx";

const FAQItem = ({ item, index, selected, onToggleAccordion, isUserEnabled,fetchUserWorkById }) => {
  const { showSnackbar } = useContext(MyContext);
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(item.isPaused || false);
  const [isRunning, setIsRunning] = useState(item.startTime && !item.stopTime && !isPaused);

  const onPauseTimer = () => {
    handlePause(item, showSnackbar).then(() => {
      fetchUserWorkById();
      setIsPaused(true);
      setIsRunning(false);
    });
  };

  const onStartTimer = () => {
    // console.log("item:", item);
    handleStart(item, showSnackbar).then(() => {
      fetchUserWorkById();
      setIsPaused(false);
      setIsRunning(true);
    });
  };

  const onResumeTimer = () => {
    console.log("on resume timer working");
    ResumeStart(item, showSnackbar).then(() => {
      fetchUserWorkById();
      setIsPaused(false);
      setIsRunning(true);
    });
  };

  const onStopTimer = () => {
    handleStop(item, showSnackbar).then(() => {
      fetchUserWorkById();
      setIsRunning(false);
      setIsPaused(false);
    });
  };

  return (
    <tr key={index} className="border-b border-gray-200 transition-all">
      <td onClick={() => onToggleAccordion(index)} className="p-4 w-full">
        <div className="flex justify-between items-center">
          <label
            className={`text-gray-800 ${
              selected === index ? "text-orange-500 font-bold" : ""
            }`}
          >
            {item.title}
          </label>
          <span className="text-gray-800 ml-4">
            <Timer
              isRunning={isRunning}
              onTimeUpdate={setTime}
              startTime={item?.startTime}
              stopTime={item?.stopTime}
              isPaused={isPaused}
              initialTime={
                item?.startTime
                  ? calculateSecondsBetweenDates(
                      item.startTime,
                      item?.stopTime,
                      item?.pauseTime,
                      item.totalPausedTime
                    )
                  : 0
              }
            />
          </span>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            selected === index ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        </div>
      </td>
      {isUserEnabled && 
      <td className="flex items-center space-x-1 md:space-x-3 p-4">
        {!item.startTime ? (
          // Show Play button when timer hasn't started
          <button
            onClick={onStartTimer}
            className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
          >
            <BsFillPlayFill />
          </button>
        ) : isPaused ? (
          // Show Resume button when timer is paused
          <button
            onClick={onResumeTimer}
            className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
          >
            <RxResume />
          </button>
        ) : (
          // Show Pause button when timer is running
          <button
            onClick={onPauseTimer}
            className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
          >
            <BsFillPauseFill />
          </button>
        )}
        <button
          onClick={onStopTimer}
          className="cursor-pointer text-gray-800 hover:text-orange-500 transition-colors"
        >
          <BsFillStopFill />
        </button>
      </td>
}
    </tr>
  );
};

export default FAQItem;
