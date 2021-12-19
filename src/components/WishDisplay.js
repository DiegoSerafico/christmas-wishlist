import React from 'react'

function WishDisplay(props) {
  const WishDisplayStyle = {
    border: '1px solid black',
    display: 'inline-block',
    width: '100%',
    height: '700px'
  }

  const paragraphStyle = {
    fontSize: '40px'
  }

  const {wish} = props

  return (
    <React.Fragment>
      <div style={WishDisplayStyle}>
        <h1>{wish.name}</h1>
        <hr />
        <img src={wish.image} alt='Product' />
        <a style={paragraphStyle} href={wish.url}>Sold Here</a>
        <p style={paragraphStyle}><strong>Price:</strong> ${wish.price}</p>
        <p style={paragraphStyle}><strong>Description:</strong> {wish.description}</p>
      </div>
    </React.Fragment>
  )
}

export default WishDisplay;
