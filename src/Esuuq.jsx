import { useState } from "react"

function Esuuq() {

    const [isOpen, setOpen] = useState(false)

    
    // handle open button
    const handleOpenMenu = () => {
        setOpen(true)
    }
    const closeMenu = () => {
        setOpen(false)
    }

    return <div className="pl-10 pt-5  bg-orange-500 sm:flex justify-between sm:flex-row flex-col">
                <h1 className="text-black font-blod  text-[30px]">Tech <span class="text-white font-blod">Bookie</span></h1>

        <img  style={{display: isOpen == true ? "none" : ""}} onClick={handleOpenMenu} className=" ml-[230px] w-[40px] h-[40px] absolute right-3 top-4 text-4xl" src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" />
        <img  onClick={closeMenu} style={{display: isOpen == true ? "block" : ""}} className=" hidden  ml-[230px] w-[40px] h-[40px] absolute right-3 top-4 text-4xl" src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt="" />
        import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Samee waxa aad rabto marka la diro foomka
    console.log(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
