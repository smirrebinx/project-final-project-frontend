/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from 'reducers/treatments';
import classNames from 'classnames';
import { Card, CardContainer, StyledSecondHeadingCards } from './CardStyling';
import { API_URL } from '../utils/urls';
import Loading from './Loading';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import Footer from './Footer';
import { StyledLink } from './GlobalStyling';

const Cards = () => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null); // State for selected treatment ID
  const { sticky, stickyRef } = useSticky();
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments.items);
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
    setSelectedTreatmentId(treatmentId); // Set the selected treatment ID
  };

  if (isLoading) {
    return <Loading />; // Render the Loading component while loading
  }

  // Find the selected treatment object
  const selectedTreatment = treatments.find((treatment) => treatment._id === selectedTreatmentId);

  return (
    <>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>What Would You Like to Do?</StyledNavHeaderTwo>
      </StickyNavTwo>
      <CardContainer>
        {treatments.map((treatment) => (
          <Card
            key={treatment._id}
            onClick={() => handleTreatmentClick(treatment._id)}
            className={classNames({ selected: treatment._id === selectedTreatmentId })}>
            <StyledLink
              to={{
                pathname: '/booking',
                state: { treatmentId: treatment._id } // Pass the treatment ID as state
              }}>
              <img src={treatment.icon} alt="Card Icon" />
              <StyledSecondHeadingCards>
                {treatment.cut || treatment.wash || treatment.cutAndWash || treatment.styling}
              </StyledSecondHeadingCards>
            </StyledLink>
          </Card>
        ))}
      </CardContainer>
      {selectedTreatment && (
        <div>
          <p>You have selected the {selectedTreatment.name} treatment.</p>
          <StyledLink to="/booking">Go to booking</StyledLink>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cards;
