/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from 'reducers/treatments';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import { Card, CardContainer, CardSelected, StyledParagraphBookingCards, StyledSecondHeadingCards } from './CardStyling';
import { API_URL } from '../utils/urls';
import Loading from './Loading';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { StyledLink } from './GlobalStyling';

const Cards = () => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);
  const { sticky, stickyRef } = useSticky();
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments.items);
  const [isLoading, setIsLoading] = useState(true);

  const url = API_URL('treatments');

  useEffect(() => {
    // Fetch treatments from the server
    const fetchTreatments = async () => {
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchTreatments();
  }, [dispatch, url]);

  const handleTreatmentClick = (treatmentId) => {
    setSelectedTreatmentId(treatmentId);

    // Show success message when a treatment is selected
    Swal.fire({
      icon: 'success',
      title: 'Treatment',
      html: `<p>You have selected the ${treatments.find((treatment) => treatment._id === treatmentId).name} treatment.</p>`,
      confirmButtonColor: 'var(--submit-button-color-two)'
    });
  };

  const selectedTreatment = treatments.find((treatment) => treatment._id === selectedTreatmentId);

  return (
    <>
      {/* Sticky navigation */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>What Would You Like to Do?</StyledNavHeaderTwo>
      </StickyNavTwo>
      <div>
        {isLoading ? (
          // Display loading animation while treatments are being loaded
          <Loading loader={isLoading} />
        ) : (
          <>
            {/* Display treatment cards */}
            <CardContainer>
              {treatments.map((treatment) => (
                <Card
                  key={treatment._id}
                  onClick={() => handleTreatmentClick(treatment._id)}
                  className={classNames({ selected: treatment._id === selectedTreatmentId })}>
                  <StyledLink>
                    {/* Update the image source to use the SVG file from the frontend */}
                    <img src={`/assets/cardsvgs/icon${treatment._id}.svg`} alt="Card Icon" />
                    <StyledSecondHeadingCards>{treatment.name}</StyledSecondHeadingCards>
                  </StyledLink>
                </Card>
              ))}
            </CardContainer>
            {selectedTreatment && (
              <>
                {/* Display confirmation message and button for selected treatment */}
                <StyledParagraphBookingCards>Confirm your booking or choose another card</StyledParagraphBookingCards>
                <CardSelected type="button">
                  <StyledLink to="/login">Confirm {selectedTreatment.name}</StyledLink>
                </CardSelected>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
