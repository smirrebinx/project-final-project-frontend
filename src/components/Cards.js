/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from 'reducers/treatments';
import { Card, CardContainer, StyledSecondHeadingCards } from './CardStyling';
import { API_URL } from '../utils/urls';
// GET treatments from backend /treatments

// POST click on treatment

// reducer treatments useState, map

const Cards = () => {
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments.items);

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

  return (
    <CardContainer>
      {treatments.map((treatment) => (
        <Card key={treatment._id}>
          <img src={treatment.icon} alt="Card Icon" />
          <StyledSecondHeadingCards> {treatment.text}</StyledSecondHeadingCards>
        </Card>
      ))}
    </CardContainer>
  )
}

export default Cards;