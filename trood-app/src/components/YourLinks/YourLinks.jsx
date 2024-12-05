// Import React library and useState for managing component state
import React, { useState } from 'react';

// Import a trash icon from the React Icons library
import { IoTrash } from 'react-icons/io5';

// Import CSS module for styling
import s from './index.module.css';

// Define the YourLinks component with props for title, data, and setData
const YourLinks = ({ title, data, setData }) => { 

  // State to toggle input visibility
  const [showInput, setShowInput] = useState(false); 

  // State to manage the input values for new links
  const [inputValue, setInputValue] = useState({ siteName: '', link: '' }); 

  // Add a new link to the data list
  const handleAdd = () => { 
    // Ensure both fields are not empty or whitespace
    if (inputValue.siteName.trim() && inputValue.link.trim()) { 
      setData([...data, inputValue]); // Add new link to the data array
      setInputValue({ siteName: '', link: '' }); // Reset input fields
    }
  };

  // Remove a link by its index
  const handleRemove = (index) => { 
    setData(data.filter((_, i) => i !== index)); // Filter out the item at the specified index
  };

  // Return the rendered component
  return ( 
    <div className={s.container}> {/* Wrapper container */}
      
      {/* Title and Add Button Section */}
      <div className={s.titleBtn}> 
        <p className={s.title}>{title}</p> {/* Display the title */}
        <button
          className={s.addButton} // Button for toggling input field
          type="button"
          onClick={() => setShowInput(!showInput)} // Toggle showInput state
        >
          +
        </button> 
      </div>

      {/* Input Fields for Adding New Links */}
      {showInput && ( // Conditional rendering if showInput is true
        <div className={s.inputGroup}> 
          <input
            type="text" // Input for site name
            value={inputValue.siteName} // Bind to siteName state
            onChange={(e) => setInputValue({ ...inputValue, siteName: e.target.value })} // Update siteName state
            placeholder="Site name" // Placeholder for site name input
            className={s.inputField} // Apply styling
          />
          <input
            type="text" // Input for link URL
            value={inputValue.link} // Bind to link state
            onChange={(e) => setInputValue({ ...inputValue, link: e.target.value })} // Update link state
            placeholder="Link" // Placeholder for link input
            className={s.inputField} // Apply styling
          />
          <button 
            type="button" 
            className={s.addConfirm} // Confirm button for adding a link
            onClick={handleAdd} // Call handleAdd to add the link
          >
            +
          </button>
        </div>
      )}

      {/* List of Added Links */}
      <ul className={s.linksList}> 
        {data.map((item, index) => ( // Map through data array to render links
          <li key={index} className={s.linkItem}> {/* Individual link item */}
            <span className={s.linkText}> {/* Display the site name and link */}
              <strong>{item.siteName}</strong>: {item.link}
            </span>
            <button
              className={s.deleteButton} // Button for deleting a link
              onClick={() => handleRemove(index)} // Call handleRemove to delete by index
              aria-label="Delete link" // Accessibility label for screen readers
            >
              <IoTrash size={25} color='black' /> {/* Trash icon */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component for reuse
export default YourLinks;
