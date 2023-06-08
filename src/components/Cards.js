import React from 'react';
import { Card, CardContainer, StyledSecondHeadingCards } from './CardStyling';
// import treatments from 'reducers/treatments';
// GET treatments from backend /treatments

// POST click on treatment

// reducer treatments useState, map

const Cards = () => {
  const cardData = [
    { icon: 'icon1.png', text: 'Cut' },
    { icon: 'icon1.png', text: 'Wash' },
    { icon: 'icon1.png', text: 'Cut & Wash' },
    { icon: 'icon1.png', text: 'Styling' }
  ];

  return (
    <CardContainer>
      {cardData.map((card) => (
        <Card key={card.id}>
          <img src={card.icon} alt="Card Icon" />
          <StyledSecondHeadingCards> {card.text}</StyledSecondHeadingCards>
        </Card>
      ))}
    </CardContainer>
  )
}

export default Cards;