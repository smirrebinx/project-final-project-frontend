/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from 'reducers/treatments';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import { Card, CardContainer, CardIconContainer, CardSelected, StyledParagraphBookingCards, StyledSecondHeadingCards } from './CardStyling';
import { API_URL } from '../utils/urls';
import Loading from './Loading';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { StyledLink } from './GlobalStyling';

import iconHaircut from '../assets/cardsvgs/cut_FILL0_wght100_GRAD0_opsz40.svg';
import iconHairDye from '../assets/cardsvgs/brush_FILL0_wght100_GRAD0_opsz48.svg';
import iconHaircutDye from '../assets/cardsvgs/your_trips_FILL0_wght100_GRAD0_opsz48.svg';
import iconHairStyling from '../assets/cardsvgs/auto_fix_FILL0_wght100_GRAD0_opsz48.svg';

const getTreatmentIcon = (treatmentName) => {
  switch (treatmentName) {
    case 'Haircut':
      return iconHaircut;
    case 'Hair Dye':
      return iconHairDye;
    case 'Haircut and Dye':
      return iconHaircutDye;
    case 'Hair styling':
      return iconHairStyling;
    default:
      return null; // Return a default icon or handle unknown treatment names
  }
};

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
          console.log(data); // Log the fetched data
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
                    <CardIconContainer>
                      <img src={getTreatmentIcon(treatment.name)} alt="Card Icon" />
                    </CardIconContainer>
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
