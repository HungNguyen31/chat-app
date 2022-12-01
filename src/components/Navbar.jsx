import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Hung Nguyen</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar