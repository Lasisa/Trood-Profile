import React, { useEffect, useState } from 'react';
// Importiert React und notwendige Hooks

import InterestsForm from '../InterestsForm/InterestsForm';
// Importiert das InterestsForm-Komponentenmodul

import YourLinks from '../YourLinks/YourLinks';
// Importiert das YourLinks-Komponentenmodul

import s from './index.module.css';
// Importiert CSS-Modul für die Profile-Komponente

const Profile = () => {
// Definiert die Hauptkomponente für das Profil

  const [formData, setFormData] = useState({
    // Initialisiert den Formularzustand mit Standardwerten
    name: '',
    surname: '',
    jobTitle: '',
    phone: '',
    address: '',
    interests: [],
    potentialInterests: [],
    links: [],
    pitch: '',
    avatar: null,
    isPublic: false,
  });

  useEffect(() => {
    // Lädt gespeicherte Daten aus localStorage
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      // Aktualisiert den Zustand mit geladenen Daten
    }
  }, []);
  // Leerer Dependency-Array, läuft nur beim ersten Rendern

  const validateForm = () => {
    // Validiert die Formularfelder basierend auf Regeln
    const { name, surname, phone } = formData;

    if (!name || name.length < 2 || name.length > 50 || !/^[a-zA-Z\s\-]+$/.test(name)) {
      alert('Invalid Name. Please enter a valid name (2-50 characters, only letters and spaces).');
      return false;
      // Prüft, ob der Name gültig ist
    }
    if (!surname || surname.length < 2 || surname.length > 50 || !/^[a-zA-Z\s\-]+$/.test(surname)) {
      alert('Invalid Surname. Please enter a valid surname (2-50 characters, only letters and spaces).');
      return false;
      // Prüft, ob der Nachname gültig ist
    }
    if (
      !phone ||
      !/^\+\d{10,15}$/.test(phone)
    ) {
      alert('Invalid Phone. Please enter a valid phone number (e.g., +1234567890).');
      return false;
      // Überprüft, ob die Telefonnummer korrekt formatiert ist
    }
    return true;
    // Gibt `true` zurück, wenn alles gültig ist
  };

  const handleAvatarUpload = (e) => {
    // Handhabt das Hochladen eines Profilbilds
    const file = e.target.files[0];
    if (file?.size <= 5 * 1024 * 1024) {
      // Prüft, ob die Datei kleiner als 5 MB ist
      const reader = new FileReader();
      reader.onload = () => setFormData((prev) => ({ ...prev, avatar: reader.result }));
      reader.readAsDataURL(file);
      // Liest die Datei und speichert sie im Zustand
    } else {
      alert('Invalid file. Max size: 5MB.');
      // Zeigt eine Warnung bei zu großer Datei
    }
  };

  const handleChange = (e) => {
    // Aktualisiert Eingabefelder im Zustand
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      // Aktualisiert das richtige Feld basierend auf dem Typ
    }));
  };

  const handleSave = () => {
    // Speichert die Daten im localStorage
    if (validateForm()) {
      // Überprüft die Gültigkeit des Formulars
      localStorage.setItem('profileData', JSON.stringify(formData));
      alert('Profile saved successfully!');
      // Zeigt eine Erfolgsnachricht
    }
  };

  const handleCancel = () => {
    // Setzt die Änderungen im Formular zurück
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      // Stellt die gespeicherten Daten wieder her
    }
  };

  return (
    <div className={s.profileContainer}>
      {/* Hauptcontainer für die Profil-Komponente */}
      <div className={s.avatarSection}>
        {/* Bereich für das Avatar-Bild */}
        <label className={s.avatarLabel}>
          {/* Label für die Avatar-Auswahl */}
          <input
            type="file"
            accept="image/*"
            className={s.fileInput}
            onChange={handleAvatarUpload}
            // Dateiauswahl für Avatar-Bild
          />
          <div
            className={s.avatarPreview}
            style={{ backgroundImage: `url(${formData.avatar || 'default-avatar.png'})` }}
            // Vorschau des aktuellen Profilbilds
          />
        </label>
      </div>

      <form className={s.formGroup}>
        {/* Formular für Benutzerdetails */}
        {['name', 'surname', 'job Title', 'phone', 'address', 'pitch'].map((field) => (
          <input
            className={s.inputClass}
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            // Eingabefelder für verschiedene Benutzerinformationen
          />
        ))}
      </form>

      <div className={s.visibilitySection}>
        {/* Sichtbarkeitsoptionen für das Profil */}
        <label className={s.visibilityLabel}>Show your profile in Launchpad?</label>
        <div className={s.visibilityOptions}>
          {['Private', 'Public'].map((visibility, index) => (
            <label key={visibility} className={s.optionLabel}>
              <input
                type="radio"
                name="isPublic"
                value={Boolean(index)}
                checked={formData.isPublic === Boolean(index)}
                onChange={() => setFormData((prev) => ({ ...prev, isPublic: Boolean(index) }))}
                // Umschalten zwischen privatem und öffentlichem Profil
              />
              {visibility}
            </label>
          ))}
        </div>
      </div>

      <div className={s.interests}>
        {/* Bereich für Interessen und Links */}
        <InterestsForm
          title="The scope of your interests: "
          data={formData.interests}
          setData={(newData) => setFormData((prev) => ({ ...prev, interests: newData }))}
          // Formular zur Bearbeitung der Interessen
        />
        <InterestsForm
          title="Potential interests: "
          data={formData.potentialInterests}
          setData={(newData) => setFormData((prev) => ({ ...prev, potentialInterests: newData }))}
          // Formular zur Bearbeitung potenzieller Interessen
        />
        <YourLinks
          title="Your links: "
          data={formData.links}
          setData={(newData) => setFormData((prev) => ({ ...prev, links: newData }))}
          // Formular zur Bearbeitung der Links
        />
      </div>

      <div className={s.save}>
        {/* Buttons zum Speichern oder Zurücksetzen */}
        <button className={s.saveBtn} onClick={handleSave}>Save</button>
        <button className={s.saveBtn} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Profile;
// Exportiert die Profilkomponente für die Nutzung

