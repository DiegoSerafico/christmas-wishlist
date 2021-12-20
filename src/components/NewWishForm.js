import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useNavigate } from 'react-router-dom';

function NewWishForm(props) {
  let navigate = useNavigate();
  function handleAddNewWishForm(e) {
    e.preventDefault();
    props.onAddWish({
      name: e.target.name.value,
      image: e.target.image.value,
      url: e.target.url.value,
      price: e.target.price.value,
      description: e.target.description.value
    });
    navigate('/wishlist');
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleAddNewWishForm}
        buttonText='Add'
      />
    </React.Fragment>
  );
}

NewWishForm.propTypes = {
  onAddWish: PropTypes.func
}

export default NewWishForm;