import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { CardReview, StyledParagraph } from './GlobalStyling';

const Loading = ({ loader }) => {
  const userReviews = [
    // User reviews array
    '"I loved the result, my hair looks great and the staff is super nice and the atmosphere is so cosy."',
    '"I had an amazing experience at this salon! The hairstylist was extremely talented and understood exactly what I wanted."',
    '"The staff at this salon is top-notch! They were friendly, professional, and made me feel comfortable throughout my visit."',
    '"I highly recommend this hairdresser salon. The ambiance is relaxing, and the stylists are skilled and attentive."',
    '"The hairstylists here are true artists. They have a great eye for detail and are knowledgeable about the latest trends."',
    '"This salon offers exceptional customer service. From the moment I walked in, I felt welcomed and valued."',
    '"I\'ve been a loyal customer of this salon for years, and they never disappoint."',
    '"I\'m always impressed by the level of skill and creativity displayed by the hairdressers here."',
    '"The salon has a warm and inviting atmosphere. The decor is stylish, and the staff is friendly."',
    '"I had a complete transformation at this salon, and it exceeded my expectations."',
    '"This salon is a hidden gem! The hairstylists are talented and knowledgeable, and the prices are reasonable."',
    '"I had my wedding hair and makeup done at this salon, and they did an exceptional job."',
    '"I\'m thrilled with the color treatment I received at this salon."',
    '"The stylists here are not only skilled but also great communicators. I appreciate their expertise."',
    '"I recently got a balayage at this salon, and it turned out fantastic. I\'ve received so many compliments."',
    '"I have curly hair, and it\'s always challenging to find a stylist who knows how to handle it. Thankfully, I found this salon, and the hairstylist did wonders with my curls."',
    '"The salon offers a wide range of services, from haircuts and color treatments to styling and treatments. Whatever your hair needs, they have you covered."',
    '"I appreciate that the salon uses high-quality products. My hair feels healthier and more nourished after each visit."',
    '"The salon has a great online booking system that makes scheduling appointments a breeze. I love the convenience of being able to book my appointments anytime, anywhere."',
    '"The salon is always up-to-date with the latest trends and techniques."',
    '"I had a relaxing and enjoyable experience at this salon. The staff was friendly, the chairs were comfortable, and the overall vibe was calming."'
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (loader) {
      // Set interval to cycle through user reviews
      interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % userReviews.length);
      }, 9000);
    } else {
      setCurrentReviewIndex(0);
    }

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [loader, userReviews.length]);

  return (
    <div>
      {loader && (
        <>
          {/* Render the "Loading..." text */}
          <StyledParagraph>Loading...</StyledParagraph>
          {/* Display the current user review */}
          <CardReview>{userReviews[currentReviewIndex]}</CardReview>
          {/* Render a Lottie animation while loading */}
          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_60VYWWdg3U.json"
            className="lottie"
            loop
            autoplay
            speed={1}
            style={{ height: '10rem', width: '10rem' }}
            aria-label="Loading" />
        </>
      )}
    </div>
  );
};

export default Loading;
