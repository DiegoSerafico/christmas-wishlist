import React from 'react';
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type='text'
        name='name'
        placeholder='Item Name' 
        />
        <br />
        <br />
        <input
        type='text'
        name='image'
        placeholder='Image URL' 
        />
        <br />
        <br />
        <input
        type='url'
        name='url'
        placeholder='Item URL'
        />
        <br />
        <br />
        <input
        type='number'
        name='price'
        placeholder='Price'
        min='0'  
        />
        <br />
        <br />
        <textarea
        name='description'
        placeholder='Describe your item'
        />
        <br />
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm
