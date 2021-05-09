import * as React from "react";
import TaskBase from "./taskBase";

const Task1: React.FC = () => {
  return (
    <TaskBase
      title="Task 1: Connect to GraphQL Server and fetch audio data"
      resources={[
        {
          name: "GraphQL Server",
          value: "https://papercup-fake-server.vercel.app/api/demo",
          link: "https://papercup-fake-server.vercel.app/api/demo"
        },
        {
          name: "Apollo Client Documentation",
          value:
            "https://www.apollographql.com/docs/react/data/queries/#executing-a-query",
          link:
            "https://www.apollographql.com/docs/react/data/queries/#executing-a-query"
        }
      ]}
      goal="Fetch a audio with id, name and S3 URL fields from the API with an ID of 'papercup'"
    >
      We have set-up a GraphQL server, you can expore the API via the GraphQL
      Playground. The documentation can be accessed by pressing the Docs button
      is on the right handside. We have set-up Apollo client to connect our
      GraphQL Server in this project, you can start querying the server from the
      code (refer to the Apollo documentation if needed)
    </TaskBase>
  );
};

export default Task1;
