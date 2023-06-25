/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import treatments, { setSelectedTreatment } from 'reducers/treatments';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import {
  Card,
  CardContainer,
  CardIconContainer,
  CardSelected,
  StyledParagraphBookingCards,
  StyledSecondHeadingCards
} from './CardsStyling';
import { API_URL } from '../utils/urls';
import Loading from './Loading';
import useSticky from './useSticky';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { InnerWrapper, StyledLink } from './GlobalStyling';
import iconHaircut from '../assets/cardsvgs/cut_FILL0_wght100_GRAD0_opsz40.svg';
import iconHairDye from '../assets/cardsvgs/brush_FILL0_wght100_GRAD0_opsz48.svg';
import iconHaircutDye from '../assets/cardsvgs/your_trips_FILL0_wght100_GRAD0_opsz48.svg';
import iconHairStyling from '../assets/cardsvgs/auto_fix_FILL0_wght100_GRAD0_opsz48.svg';
import NavbarMenu from './NavbarMenu';

// Function to get the appropriate treatment icon based on the treatment name
const getTreatmentIcon = (treatmentName) => {
  switch (treatmentName) {
    case 'Haircut':
      return iconHaircut;
    case 'Hair Dye':
      return iconHairDye;
    case 'Haircut and Dye':
      return iconHaircutDye;
    case 'Hair Styling':
      return iconHairStyling;
    default:
      return null; // Return a default icon or handle unknown treatment names
  }
};

const Cards = () => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);
  const { sticky, stickyRef } = useSticky();
  const dispatch = useDispatch();
  const allTreatments = useSelector((state) => state.treatments.items);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const url = API_URL('treatments');

  useEffect(() => {
    // Fetch treatments from the server
    const fetchTreatments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          dispatch(treatments.actions.setItems(data.treatments));
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

  // Handler for when a treatment card is clicked
  const handleTreatmentClick = (treatmentId) => {
    const selectedTreatment = allTreatments.find((treatment) => treatment._id === treatmentId);
    setSelectedTreatmentId(treatmentId);
    dispatch(setSelectedTreatment(selectedTreatment));
    // Show success message when a treatment is selected
    Swal.fire({
      icon: 'success',
      title: 'Treatment',
      html: `<p>You have selected the ${selectedTreatment.name} treatment.</p>`,
      confirmButtonColor: 'var(--submit-button-color-two), var(box-shadow: var(--box-shadow))'
    });
  };

  return (
    <>
      {/* Sticky navigation */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky, 'menu-open': isMenuOpen })}>
        <StyledNavHeaderTwo>What Would You Like to Do?</StyledNavHeaderTwo>
        <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </StickyNavTwo>
      <div>
        {isLoading ? (
          // Display loading animation while treatments are being loaded
          <InnerWrapper>
            <Loading loader={isLoading} />
            <span>Loading...</span>
          </InnerWrapper>
        ) : (
          <>
            {/* Display treatment cards */}
            <CardContainer className={classNames({ 'menu-open': isMenuOpen })}>
              {allTreatments.map((treatment) => (
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
            {selectedTreatmentId && (
              <>
                {/* Display confirmation message and button for selected treatment */}
                <StyledParagraphBookingCards>Confirm your booking or choose another card</StyledParagraphBookingCards>
                <CardSelected type="button">
                  <StyledLink to="/login">Confirm {selectedTreatmentId.name}</StyledLink>
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
