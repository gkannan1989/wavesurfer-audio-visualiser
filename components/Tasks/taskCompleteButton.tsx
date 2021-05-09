import * as React from "react";
import { useState } from "react";
import Confetti from "react-dom-confetti";

const TaskCompleteButton: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full my-10 items-center">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Once you are done with the tasks above, zip up the project and send it
        over to us
      </h2>
      <Confetti active={buttonClicked} />
      <button
        onClick={() => {
          if (buttonClicked) {
            alert("Enough fun for today.");
          } else {
            setButtonClicked(true);
          }
        }}
        className="text-white bg-brand border-0 py-2 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg"
      >
        Press me
      </button>
    </div>
  );
};

export default TaskCompleteButton;
