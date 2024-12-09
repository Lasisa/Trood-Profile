import React from 'react';
// Import React library for components

import { FaArrowLeft, FaPlus } from "react-icons/fa6";
// Import icons from FontAwesome6

import s from './index.module.css';
// Import CSS module for styles

export default function ProjectsAndTasks() {
  // Main component for projects and tasks
  return (
    <div className={s.projectsAndTasks}>
      {/* Main container for the component */}
      
      <header>
        {/* Header section with logo and link */}
        <FaArrowLeft size="40" />
        {/* Arrow icon for back function */}
        <p className={s.logo}>TROOD.</p>
        {/* Logo text for the page */}
        <a href="/profile" className={s.aProfile}>Profile</a>
        {/* Link to user profile */}
      </header>

      <div className={s.ProjectsAndTasksContainer}>
        {/* Container for projects and tasks */}
        <p className={s.containerTitle}>Projects:</p>
        {/* Title for the projects section */}
        
        <div className={s.grayContainer}>
          {/* Gray area for projects */}
          <p className={s.craetePT}>Create project</p>
          {/* Text for creating a project */}
          <div className={s.iconClass}>
            <FaPlus size="30" color='rgba(0, 0, 0, 0.5)' />
            {/* Plus icon for creating a new project */}
          </div>
        </div>
        
        <p className={s.containerTitle}>Tasks:</p>
        {/* Title for the tasks section */}
        
        <div className={s.grayContainer}>
          {/* Gray area for tasks */}
          <p className={s.craetePT}>Create task</p>
          {/* Text for creating a task */}
          <div className={s.iconClass}>
            <FaPlus size="30" color='rgba(0, 0, 0, 0.5)' />
            {/* Plus icon for creating a new task */}
          </div>
        </div>
      </div>
    </div>
  );
}
