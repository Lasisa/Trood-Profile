// Import React library and useState hook for managing state
import React, { useState } from 'react';

// Import CSS module for component styling
import s from './index.module.css';

// Define the InterestsForm component with props for title, data, and setData
const InterestsForm = ({ title, data, setData }) => { 

  // State for toggling input field visibility
  const [showInput, setShowInput] = useState(false); 

  // State for handling the input value
  const [inputValue, setInputValue] = useState(''); 

  // Function to add new interest tags to the list
  const handleAdd = () => { 
    // Check if input is not empty or whitespace
    if (inputValue.trim() !== '') { 
      setData([...data, inputValue.trim()]); // Add trimmed input to data array
      setInputValue(''); // Reset input field
    }
  };

  // Function to remove an interest tag by index
  const handleRemove = (index) => { 
    // Create a new array excluding the removed item
    setData(data.filter((_, i) => i !== index)); 
  };

  // Return the rendered JSX of the component
  return ( 
    <div className={s.interestsContainer}> {/* Wrapper div for interests section */}

      {/* Title and "Add" button group */}
      <div className={s.titleGroup}> 
        <h3 className={s.title}>{title}</h3> {/* Display the section title */}
        <button
          className={s.addButton} // Style for add button
          type="button" 
          onClick={() => setShowInput(!showInput)} // Toggle input field visibility
        >
          +
        </button>
      </div>

      {/* Input field for adding new interests */}
      {showInput && ( // Conditional rendering based on showInput state
        <div className={s.addGroup}> 
          <input
            type="text" // Text input for interest
            value={inputValue} // Bind input field to state
            onChange={(e) => setInputValue(e.target.value)} // Update state on change
            placeholder='Add a tag' // Placeholder text
          />
          <button type="button" onClick={handleAdd}> {/* Add button */}
            +
          </button>
        </div>
      )}

      {/* Display list of interest tags */}
      <ul className={s.interestsList}> 
        {data.map((item, index) => ( // Iterate over data array
          <li key={index} className={s.interestItem}> {/* List item for each tag */}
            <span>{item}</span> {/* Display the interest text */}
            <button
              className={s.removeButton} // Style for remove button
              type="button" 
              onClick={() => handleRemove(index)} // Remove item on click
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component to use it elsewhere
export default InterestsForm;
