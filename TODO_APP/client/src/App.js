import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('pending');
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    // Clear input fields when closing the popup
    setTitle('');
    setDescription('');
  };

  const handleAddClick = () => {
    // Handle the "Add" button click, e.g., send data to the server
    // You can implement the logic to save the data or perform other actions here
    console.log('Title:', title);
    console.log('Description:', description);

    // Close the popup after adding the data
    closePopup();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);

  };

  useEffect(() => {
    // Define the API URL
    const baseURL = 'http://localhost:5000/api/todo/';

    // Make the API call using Axios
    axios
      .get(baseURL + "getTodoList")
      .then((res) => {
        setTodoList(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className='headerr'>
        <h1>TO-DO Tracker</h1>
      </div>

      <nav className="navbar">
        <button
          className={activeTab === 'pending' ? 'active' : ''}
          onClick={() => handleTabChange('pending')}
        >
          Pending Tasks
        </button>
        <button
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => handleTabChange('completed')}
        >
          Completed Tasks
        </button>
      </nav>
      <div className="container">
        {
          // isLoading ? (
          //   <p>Loading...</p>
          // ) : error ? (
          //   <p>Error: {error.message}</p>
          // ) : (
          <>
            (activeTab === 'pending') ?(
            <button className='btn' onClick={openPopup}>Add Task</button>

            )
            {showPopup && (
              <div className="popup">
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                />
                <label>Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                />
                <button className='btn' onClick={handleAddClick}>Add</button>
                <button className='btn-red' onClick={closePopup}>Cancel</button>
              </div>
            )}
            <div>
              <ul>
                {todoList.map((item) => (
                  <li className='listItem' key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          </>
          //)
        }
      </div>
    </div>
  );
}

export default App;
