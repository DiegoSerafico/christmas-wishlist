import React from 'react'
import ReusableForm from './ReusableForm'
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

function EditWishForm (props) {
  let navigate = useNavigate();
  function handleUpdateWishForm(e) {
    e.preventDefault();
    props.onUpdateWish({
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
        formSubmissionHandler={handleUpdateWishForm}
        buttonText='Update'
       />
    </React.Fragment>
  )
}

EditWishForm.propTypes = {
  onUpdateWish: PropTypes.func
}

export default EditWishForm
