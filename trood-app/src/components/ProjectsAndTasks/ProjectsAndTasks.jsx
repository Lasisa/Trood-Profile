import React from 'react';
// Importiert React-Bibliothek für Komponenten

import { FaArrowLeft, FaPlus } from "react-icons/fa6";
// Importiert Icons aus FontAwesome6

import s from './index.module.css';
// Importiert CSS-Modul für Stile

export default function ProjectsAndTasks() {
  // Hauptkomponente für Projekte und Aufgaben
  return (
    <div className={s.projectsAndTasks}>
      {/* Hauptcontainer der Komponente */}
      
      <header>
        {/* Header-Bereich mit Logo und Link */}
        <FaArrowLeft size="40" />
        {/* Pfeil-Symbol für Zurück-Funktion */}
        <p className={s.logo}>TROOD.</p>
        {/* Logo-Text für die Seite */}
        <a href="" className={s.aProfile}>Profile</a>
        {/* Link zum Benutzerprofil */}
      </header>

      <div className={s.ProjectsAndTasksContainer}>
        {/* Container für Projekte und Aufgaben */}
        <p className={s.containerTitle}>Projects:</p>
        {/* Überschrift für den Projektabschnitt */}
        
        <div className={s.grayContainer}>
          {/* Grauer Bereich für Projekte */}
          <p className={s.craetePT}>Create project</p>
          {/* Text zum Hinzufügen eines Projekts */}
          <div className={s.iconClass}>
            <FaPlus size="30" color='rgba(0, 0, 0, 0.5)' />
            {/* Plus-Symbol für Neues Projekt */}
          </div>
        </div>
        
        <p className={s.containerTitle}>Tasks:</p>
        {/* Überschrift für den Aufgabenabschnitt */}
        
        <div className={s.grayContainer}>
          {/* Grauer Bereich für Aufgaben */}
          <p className={s.craetePT}>Create task</p>
          {/* Text zum Hinzufügen einer Aufgabe */}
          <div className={s.iconClass}>
            <FaPlus size="30" color='rgba(0, 0, 0, 0.5)' />
            {/* Plus-Symbol für Neue Aufgabe */}
          </div>
        </div>
      </div>
    </div>
  );
}
