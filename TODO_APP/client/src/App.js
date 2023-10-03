import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


// router.post('/addTodoItem', createTodoItem)
// router.get('/getTodoList', getTodoList)
// router.put('/updateTodoItem', updateTodoItem)
// router.delete('/deleteTodoItem', deleteTodoItem)

function App() {
  const baseURL = 'http://localhost:5000/api/todo/';
  const [todoList, setTodoList] = useState([]);
  const [filterTodoList, setFilterTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(true);
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


  const postData = () => {
    // POST request example
    const newPost = {
      title: title,
      description: description,
      status: true
    };

    axios
      .post(baseURL + 'addTodoItem', newPost)
      .then((res) => {
        closePopup();
        setTodoList(...todoList, res.data);
        updateFilterData(activeTab);
        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        closePopup();
        setError(error);
        setIsLoading(false);
      });
  };

  const updateData = (id) => {
    // PUT request example (update an existing resource)

    const newPost = todoList.filter((post) => post._id === id);
    newPost.status = false;

    axios
      .put(baseURL + '/' + id, newPost)
      .then((res) => {
        todoList.forEach((todo) => {
          if (todo._id === id) {
            todo.status = false
          }
        });
        setTodoList(todoList);
        updateFilterData(activeTab);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const deleteData = (id) => {
    // DELETE request example (delete an existing resource)
    axios
      .delete(baseURL + '/' + id)
      .then(() => {
        const updatedList = todoList.filter((post) => post._id !== id);
        setTodoList(updatedList);
        updateFilterData(activeTab);
      })
      .catch((err) => {
        setError(err);
      });
  };
  const updateFilterData = (tab) => {
    const filterTodoList = todoList.filter((item) => item.status === tab);
    setFilterTodoList(filterTodoList);
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    updateFilterData(tab);
  };

  useEffect(() => {

    axios
      .get(baseURL + "getTodoList")
      .then((res) => {
        setTodoList(res.data);
        setIsLoading(false);
        updateFilterData(activeTab);
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
          className={activeTab ? 'active' : ''}
          onClick={() => handleTabChange(true)}
        >
          Pending Tasks
        </button>
        <button
          className={activeTab === false ? 'active' : ''}
          onClick={() => handleTabChange(false)}
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
            {activeTab && (
              <button className='btn' onClick={openPopup}>Add Task</button>
            )}
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
                <button className='btn-blue' onClick={postData}>Add</button>
                <button className='btn-red' onClick={closePopup}>Cancel</button>
              </div>
            )}
            <div className="card-list">
              {filterTodoList.map((item) => (
                <div className="card" key={item._id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {activeTab && (
                    <>
                      <button className='btn' onClick={updateData}>Done</button>
                      <button className='btn-red' onClick={deleteData}>Delete</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
          //)
        }
      </div >
    </div >
  );
}

export default App;
