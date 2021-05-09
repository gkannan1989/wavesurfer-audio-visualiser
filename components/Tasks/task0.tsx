import * as React from "react";
import TaskBase from "./taskBase";

const Task0: React.FC = () => {
  return (
    <TaskBase
      title="Task 0: Set up"
      resources={[
        {
          name: "Repository",
          value: "https://github.com/papercup-ai/fe-technical-test",
          link: "https://github.com/papercup-ai/fe-technical-test"
        },
        {
          name: "Styling Framework",
          value: "tailwindcss",
          link: "https://tailwindcss.com/docs/container"
        },
        {
          name: "Framework",
          value: "Next.js",
          link: "https://github.com/vercel/next.js"
        },
        {
          name: "Primary library",
          value: "React",
          link: "https://reactjs.org/docs/getting-started.html"
        },
        {
          name: "Language",
          value: "TypeScript",
          link: "https://www.typescriptlang.org/docs/"
        },
        {
          name: "API Standard ",
          value: "GraphQL",
          link: "https://www.apollographql.com/docs/react/"
        }
      ]}
    >
      To be able to complete tasks specified in this repository you will need to
      this repository, internet connection, a local installation of Node (v10 or
      above). You can use your preferred IDE to complete this task. Click on the
      Task Playground tab for instructions on getting started with the project.
      <br />
      <br />
      <div className="p-5  rounded-md bg-orange-200">
        We will assess the submitted code based on how you:
        <ul className="list-disc pl-5">
          <li>deal with new libraries;</li> <li>structure your work; </li>
          <li>style the elements;</li>
          <li>attention to detail;</li>
        </ul>{" "}
      </div>
    </TaskBase>
  );
};

export default Task0;
