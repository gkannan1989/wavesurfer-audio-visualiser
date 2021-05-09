import * as React from "react";
import createPersistedState from "use-persisted-state";
import cn from "classnames";

const TaskBase: React.FC<{
  title: string;
  resources?: { name: string; value: string; link?: string }[];
  goal?: string;
  image?: string;
}> = ({ title, children, resources, goal, image }) => {
  const useTaskState = createPersistedState(title);
  const [isTaskComplete, setIsTaskComplete] = useTaskState(false);
  return (
    <div className="flex-col bg-white shadow overflow-hidden rounded-lg mb-6">
      <div className="flex w-full justify-between">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6 w-full">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-5 text-gray-700">{children}</p>
          {image && !isTaskComplete && (
            <div className="p-6 flex items-center w-full justify-center">
              <img width="700px" src={image} />
            </div>
          )}
        </div>
        <div
          onClick={() => setIsTaskComplete(!isTaskComplete)}
          className={cn(
            "flex justify-center items-center w-12 cursor-pointer transition duration-500 ease-in-out",
            isTaskComplete ? "bg-green-500" : "bg-gray-500"
          )}
        >
          <svg
            className="h-6 w-6 fill-current text-white"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </div>
      </div>

      {resources && (
        <div
          className={cn(
            "transition-all duration-100 ease-in-out overflow-hidden"
          )}
          style={{
            maxHeight: isTaskComplete
              ? "0px"
              : 60 * (resources.length + 2) + "px"
          }}
        >
          <dl key="name">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium">Resources</dt>
            </div>
          </dl>
          {resources.map(({ name, value, link }) => (
            <dl key="name">
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  {name}
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {link ? (
                    <a href={link} className="underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            </dl>
          ))}
        </div>
      )}
      {goal && (
        <div className="px-4 py-5 border-b bg-gray-300 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Goal: {goal}
          </h3>
        </div>
      )}
    </div>
  );
};

export default TaskBase;
