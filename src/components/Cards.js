/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from 'reducers/treatments';
import { Card, CardContainer, StyledSecondHeadingCards } from './CardStyling';
import { API_URL } from '../utils/urls';

const Cards = () => {
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments.items);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isTreatmentSelected, setIsTreatmentSelected] = useState(false);

  const url = API_URL('treatments');

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          dispatch(setItems(data.treatments));
        } else {
          throw new Error('Failed to fetch treatments');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTreatments();
  }, [dispatch, url]);

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment);
    setIsTreatmentSelected(true);
  };

  if (isTreatmentSelected && selectedTreatment) {
    const SelectedTreatmentText = treatments.find((treatment) => treatment._id === selectedTreatment._id).text;
    return <div>{SelectedTreatmentText}</div>; // Display the selected treatment text
  }

  return (
    <CardContainer>
      {treatments.map((treatment) => (
        <Card key={treatment._id} onClick={() => handleTreatmentClick(treatment)}>
          <img src={treatment.icon} alt="Card Icon" />
          <StyledSecondHeadingCards>{treatment.cut || treatment.wash || treatment.cutAndWash || treatment.styling}</StyledSecondHeadingCards>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Cards;
