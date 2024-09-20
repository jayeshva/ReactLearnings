import React from 'react';
import { PlusIcon } from 'lucide-react';

const colorClasses = {
  blue: 'bg-blue-100',
  orange: 'bg-orange-100',
  green: 'bg-green-100',
  pink: 'bg-pink-100',
  purple: 'bg-purple-100',
};

const TaskCard = ({ title, tags, progress, assignees, color }) => (
  <div className={`${colorClasses[color] || 'bg-white'} rounded-lg shadow p-4 mb-4`}>
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold text-sm">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600">...</button>
    </div>
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag, index) => (
        <span key={index} className="text-xs px-2 py-1 rounded bg-white bg-opacity-50 text-gray-700">
          {tag}
        </span>
      ))}
    </div>
    {progress !== undefined && (
      <div className="w-full bg-white bg-opacity-50 rounded-full h-2.5 mb-4">
        <div className={`${color === 'blue' ? 'bg-blue-600' : 'bg-gray-600'} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
    )}
    <div className="flex justify-between items-center">
      <div className="flex -space-x-2">
        {assignees.map((_, index) => (
          <div key={index} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
        ))}
      </div>
      <div className="flex items-center text-gray-500 text-xs">
        <span className="mr-2">12</span>
        <span>8</span>
      </div>
    </div>
  </div>
);

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