import React, { useEffect, useState } from 'react';
// Import React and necessary hooks

import InterestsForm from '../InterestsForm/InterestsForm';
// Import the InterestsForm component module

import YourLinks from '../YourLinks/YourLinks';
// Import the YourLinks component module

import s from './index.module.css';
// Import the CSS module for the Profile component

const Profile = () => {
  // Define the main component for the profile

  const [formData, setFormData] = useState({
    // Initialize the form state with default values
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
    // Load saved data from localStorage
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      // Update the state with the loaded data
    }
  }, []);
  // Empty dependency array, runs only on the first render

  const validateForm = () => {
    // Validate form fields based on rules
    const { name, surname, phone } = formData;

    if (!name || name.length < 2 || name.length > 50 || !/^[a-zA-Z\s-]+$/.test(name)) {
      alert('Invalid Name. Please enter a valid name (2-50 characters, only letters and spaces).');
      return false;
      // Check if the name is valid
    }
    if (!surname || surname.length < 2 || surname.length > 50 || !/^[a-zA-Z\s-]+$/.test(surname)) {
      alert('Invalid Surname. Please enter a valid surname (2-50 characters, only letters and spaces).');
      return false;
      // Check if the surname is valid
    }
    if (
      !phone ||
      !/^\+\d{10,15}$/.test(phone)
    ) {
      alert('Invalid Phone. Please enter a valid phone number (e.g., +1234567890).');
      return false;
      // Check if the phone number is correctly formatted
    }
    return true;
    // Return `true` if everything is valid
  };

  const handleAvatarUpload = (e) => {
    // Handle the avatar image upload
    const file = e.target.files[0];
    if (file?.size <= 5 * 1024 * 1024) {
      // Check if the file is smaller than 5 MB
      const reader = new FileReader();
      reader.onload = () => setFormData((prev) => ({ ...prev, avatar: reader.result }));
      reader.readAsDataURL(file);
      // Read the file and save it in the state
    } else {
      alert('Invalid file. Max size: 5MB.');
      // Show a warning for files that are too large
    }
  };

  const handleChange = (e) => {
    // Update input fields in the state
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      // Update the correct field based on the type
    }));
  };

  const handleSave = () => {
    // Save data to localStorage
    if (validateForm()) {
      // Validate the form
      localStorage.setItem('profileData', JSON.stringify(formData));
      alert('Profile saved successfully!');
      // Show a success message
    }
  };

  const handleCancel = () => {
    // Reset the form changes
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      // Restore the saved data
    }
  };

  return (
    <div className={s.profileContainer}>
      {/* Main container for the Profile component */}
      <div className={s.avatarSection}>
        {/* Section for the avatar image */}
        <label className={s.avatarLabel}>
          {/* Label for avatar selection */}
          <input
            type="file"
            accept="image/*"
            className={s.fileInput}
            onChange={handleAvatarUpload}
            // File input for avatar image
          />
          <div
            className={s.avatarPreview}
            style={{ backgroundImage: `url(${formData.avatar || 'default-avatar.png'})` }}
            // Preview of the current profile picture
          />
        </label>
      </div>

      <form className={s.formGroup}>
        {/* Form for user details */}
        {['name', 'surname', 'job Title', 'phone', 'address', 'pitch'].map((field) => (
          <input
            className={s.inputClass}
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            // Input fields for various user information
          />
        ))}
      </form>

      <div className={s.visibilitySection}>
        {/* Section for profile visibility options */}
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
                // Toggle between private and public profile
              />
              {visibility}
            </label>
          ))}
        </div>
      </div>

      <div className={s.interests}>
        {/* Section for interests and links */}
        <InterestsForm
          title="The scope of your interests: "
          data={formData.interests}
          setData={(newData) => setFormData((prev) => ({ ...prev, interests: newData }))}
          // Form for editing interests
        />
        <InterestsForm
          title="Potential interests: "
          data={formData.potentialInterests}
          setData={(newData) => setFormData((prev) => ({ ...prev, potentialInterests: newData }))}
          // Form for editing potential interests
        />
        <YourLinks
          title="Your links: "
          data={formData.links}
          setData={(newData) => setFormData((prev) => ({ ...prev, links: newData }))}
          // Form for editing links
        />
      </div>

      <div className={s.save}>
        {/* Buttons for saving or resetting */}
        <button className={s.saveBtn} onClick={handleSave}>Save</button>
        <button className={s.saveBtn} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Profile;
// Export the Profile component for use
