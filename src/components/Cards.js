/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from 'reducers/treatments';
import { Link } from 'react-router-dom';
import { Card, CardContainer, StyledSecondHeadingCards } from './CardStyling';
import { API_URL } from '../utils/urls';
import Loading from './Loading';

const Cards = () => {
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments.items);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isTreatmentSelected, setIsTreatmentSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  const url = API_URL('treatments');

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          dispatch(setItems(data.treatments)); // Update the action call
        } else {
          throw new Error('Failed to fetch treatments');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTreatments();
  }, [dispatch, url]);

const handleTreatmentClick = (treatmentId) => {
  const clickedTreatment = treatments.find((t) => t._id === treatmentId);
  setSelectedTreatment(clickedTreatment);
  setIsTreatmentSelected(true);
  console.log(clickedTreatment);
};

  if (isLoading) {
    return <Loading />; // Render the Loading component while loading
  }

if (isTreatmentSelected && selectedTreatment) {
  const selectedTreatmentText = selectedTreatment.text;
  return <div>{selectedTreatmentText} Information</div>; // Display the selected treatment text
}

return (
  <CardContainer>
    {treatments.map((treatment) => (
      <Card key={treatment._id}>
        <Link to="/booking" onClick={() => handleTreatmentClick(treatment._id)}>
          <img src={treatment.icon} alt="Card Icon" />
          <StyledSecondHeadingCards>
            {treatment.cut || treatment.wash || treatment.cutAndWash || treatment.styling}
          </StyledSecondHeadingCards>
        </Link>
      </Card>
    ))}
  </CardContainer>
);
};

export default Cards;
