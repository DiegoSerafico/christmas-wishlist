import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewWishForm(props) {
  function handleAddNewWishForm(e) {
    e.preventDefault();
    props.onAddWish({
      names: e.target.name.value,
      image: e.target.image.value,
      url: e.target.url.value,
      price: e.target.price.value,
      description: e.target.description.value
    });
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