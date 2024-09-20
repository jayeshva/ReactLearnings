import React from 'react';
import TaskCard from './TaskCard'
import { PlusIcon } from "lucide-react";


const TaskColumn = ({ title, tasks }) => (
    <div className="bg-gray-100 rounded-lg p-4 w-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">{title}</h2>
        <button className="text-gray-600 hover:text-gray-800">
          <PlusIcon size={20} />
        </button>
      </div>
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </div>
  );

  export default TaskColumn;