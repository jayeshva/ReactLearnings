import React from 'react';
import TaskColumn from './TaskColumn';


const TaskBoard = () => {
  const columns = [
    {
      title: 'To Do',
      tasks: [
        { title: 'Search inspirations for upcoming project', tags: ['website', 'client'], progress: 40, assignees: [1, 2, 3], color: 'blue' },
        { title: 'Ginko mobile app design', tags: ['mobile app', 'client'], assignees: [1, 2, 3], color: 'blue' },
        { title: 'Make user flow of akua mobile banking app', tags: ['mobileapp', 'client'], progress: 30, assignees: [1, 2], color: 'pink' },
      ]
    },
    {
      title: 'In Progress',
      tasks: [
        { title: 'Wehiu product task and the task process pages', tags: ['dribble shot', 'product'], progress: 90, assignees: [1, 2], color: 'orange' },
        { title: 'Design CRM shop product page responsive website', tags: ['products', 'client'], progress: 40, assignees: [1, 2, 3], color: 'green' },
      ]
    },
    {
      title: 'In Review',
      tasks: [
        { title: 'Crypto product landing page create in webflow', tags: ['development', 'client'], assignees: [1, 2, 3], color: 'pink' },
        { title: 'Natverk video platform web app design and develop', tags: ['product', 'client'], assignees: [1, 2], color: 'purple' },
        { title: 'Redesign grab website landing and login pages', tags: ['website', 'client'], assignees: [1], color: 'orange' },
        { title: 'Create Odyah app prototype for Get notification in figma', tags: ['mobileapp', 'client'], assignees: [1, 2], color: 'purple' },
      ]
    },
    {
      title: 'Done',
      tasks: [
        { title: 'Affitto product full service', tags: ['mobile app', 'client'], assignees: [1, 2, 3], color: 'blue' },
        { title: 'Design Moli app product page redesign', tags: ['products', 'client'], assignees: [1, 2, 3], color: 'pink' },
      ]
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Board - Daily Tasks</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create task
        </button>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-8">
        {columns.map((column, index) => (
          <TaskColumn key={index} {...column} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;