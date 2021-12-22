import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useNavigate } from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';

function NewWishForm(props) {

  const firestore = useFirestore();
  let navigate = useNavigate();

  function handleAddNewWishForm(e) {
    e.preventDefault();
    navigate('/wishlist');
    // e.target.image.value returns image data
    // TODO: Host this image
    // set image = url to hosted image

    // TODO: Given url - scrape webpage and get price & image url
    return firestore.collection('wishItems').add(
      {
        name: e.target.name.value,
        imageUrl: e.target.image.value,
        url: e.target.url.value,
        price: e.target.price.value,
        description: e.target.description.value
      }
    );
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