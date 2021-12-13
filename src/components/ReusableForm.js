import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm() {
  return (
    <React.Fragment>
      <form>
        <input
        type='text'
        name='title'
        placeholder='Item Title' 
        />
        <br />
        <br />
        <textarea
        name='description'
        placeholder='Describe your item'
        />
        <br />
        <br />
        <input
        type='url'
        name='link'
        placeholder='Item URL'
        />
        <br />
        <br />
        <button type='submit'>submit</button>
      </form>
    </React.Fragment>
  )
}

export default ReusableForm
