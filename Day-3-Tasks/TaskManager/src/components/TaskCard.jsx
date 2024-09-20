import React from "react";

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
  
  export default TaskCard;