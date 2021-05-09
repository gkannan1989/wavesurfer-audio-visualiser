import * as React from "react";
import TaskBase from "./taskBase";

const Task6 = () => {
  return (
    <TaskBase
      title="Task 6: Merge the annotations together if they overlap"
      goal="Merge the annotations together if they overlap"
    >
      Two or more annotations may overlap, and we would like to merge them into
      one annotation and visualise that on the timeline we have created in the
      previous tasks
      <pre>
        <br />
        <br />
        Example:
        <br />
        Input: intervals = [[12.9, 15.0],[14.2, 26.5],[27.2, 33.5]]
        <br />
        Output: [[12.9, 26.5],[27.2, 33.5]]
        <br />
        Explanation: Since intervals [12.9, 15.0], and [14.2, 26.5] overlaps,
        merge them into [12.9, 26.5].
        <br />
      </pre>
    </TaskBase>
  );
};

export default Task6;
