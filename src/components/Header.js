import React from 'react'

function Header(props) {

  const headerStyle = {
    color: props.darkMode ? 'white' : 'red'
  }

  return (
    <div>
      <h1 style={headerStyle}>Christmas Wishlist</h1>
    </div>
  )
}

export default Header;