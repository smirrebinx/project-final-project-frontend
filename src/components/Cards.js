/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
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
import Footer from './Footer';
import { InnerWrapper, StyledLink } from './GlobalStyling';

const Cards = () => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null); // State for selected treatment ID
  const { sticky, stickyRef } = useSticky();
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments.items);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const [treatmentItems, setTreatmentItems] = useState([]);

  const url = API_URL('treatments');

  useEffect(() => {
    const fetchTreatments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url); // Fetch treatments from the specified URL
        if (response.ok) {
          const data = await response.json(); // Extract the treatments data from the response
          console.log(data);
          dispatch(setItems(data.treatments)); // Update the state with the fetched treatments data
          setTreatmentItems(data.treatments);
        } else {
          throw new Error('Failed to fetch treatments'); // Throw an error if the response is not OK
        }
      } catch (error) {
        console.error(error); // Log any errors that occur during the fetch process
      } finally {
        setIsLoading(false); // Set the loading state to false, indicating the fetch process is complete
      }
      setTreatmentItems([]);
    };
    console.log(treatmentItems);

    fetchTreatments(); // Invoke the fetchTreatments function immediately after the component renders
  }, [dispatch, url]); // Re-run the effect if dispatch or url changes

  const handleTreatmentClick = (treatmentId) => {
    setSelectedTreatmentId(treatmentId); // Set the selected treatment ID

    // Pop up
    Swal.fire({
      icon: 'success',
      title: 'Treatment',
      html: `<p>You have selected the ${treatments.find((treatment) => treatment._id === treatmentId).name} treatment.</p>`,
      confirmButtonColor: 'var(--submit-button-color-two)'
    });
  };

  if (isLoading) {
    return <Loading />; // Render the Loading component while loading
  }

  // Find the selected treatment object
  const selectedTreatment = treatments.find((treatment) => treatment._id === selectedTreatmentId);
  console.log('Selected Treatment:', selectedTreatment);
  console.log(treatments);

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
            <StyledLink>
              <img src={treatment.icon} alt="Card Icon" />
              <StyledSecondHeadingCards>
                {/* {treatment.cut || treatment.dye || treatment.cutAndDye || treatment.styling} */}
                {treatment.name}
              </StyledSecondHeadingCards>
            </StyledLink>
          </Card>
        ))}
      </CardContainer>
      {selectedTreatment && (
        <InnerWrapper>
          <StyledParagraphBookingCards>Confirm your booking or choose another card</StyledParagraphBookingCards>
          <CardSelected type="button"><StyledLink to="/booking">Confirm {selectedTreatment.name}</StyledLink></CardSelected>
        </InnerWrapper>
      )}
      <Footer />
    </>
  );
};

export default Cards;