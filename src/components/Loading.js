import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { CardReview } from './GlobalStyling';

const Loading = ({ loader }) => {
  const userReviews = [
    '"I loved the result, my hair looks great and the staff is super nice and the atmosphere is so cosy"',
    '"I had an amazing experience at this salon! The hairstylist was extremely talented and understood exactly what I wanted. My hair turned out beautiful, and I couldn\'t be happier."',
    '"The staff at this salon is top-notch! They were friendly, professional, and made me feel comfortable throughout my visit. I left with a stunning new hairstyle that received many compliments."',
    '"I highly recommend this hairdresser salon. The ambiance is relaxing, and the stylists are skilled and attentive. I always leave feeling pampered and satisfied with the results."',
    '"The hairstylists here are true artists. They have a great eye for detail and are knowledgeable about the latest trends. I\'ve never been disappointed with my haircuts or color treatments."',
    '"This salon offers exceptional customer service. From the moment I walked in, I felt welcomed and valued. The stylists took the time to listen to my preferences and delivered outstanding results."',
    '"I\'ve been a loyal customer of this salon for years, and they never disappoint. The stylists are consistently talented, and the salon maintains a high level of cleanliness and professionalism."',
    '"I\'m always impressed by the level of skill and creativity displayed by the hairdressers here. They have a knack for understanding their clients\' desires and translating them into stunning hairstyles."',
    '"The salon has a warm and inviting atmosphere. The decor is stylish, and the staff is friendly. It\'s a great place to relax and trust the experts with your hair."',
    '"I had a complete transformation at this salon, and it exceeded my expectations. The hairstylist gave me a fresh new look that suited my face shape perfectly. I left feeling like a brand new person.',
    '"This salon is a hidden gem! The hairstylists are talented and knowledgeable, and the prices are reasonable. I always leave feeling like I got a high-end salon experience without breaking the bank."',
    '"I had my wedding hair and makeup done at this salon, and they did an exceptional job. The hairstylist created a stunning updo that stayed in place throughout the entire event. I felt like a princess."',
    '"I\'m thrilled with the color treatment I received at this salon. The hairstylist took the time to explain different options and helped me choose a shade that perfectly matched my skin tone. I love the result!"',
    '"The stylists here are not only skilled but also great communicators. They listen to your concerns and provide valuable advice on hair care and styling. I appreciate their expertise."',
    '"I recently got a balayage at this salon, and it turned out fantastic. The hairstylist blended the colors beautifully, and the transition was seamless. I\'ve received so many compliments."',
    '"I have curly hair, and it\'s always challenging to find a stylist who knows how to handle it. Thankfully, I found this salon, and the hairstylist did wonders with my curls. I\'ve never been happier with my hair."',
    '"The salon offers a wide range of services, from haircuts and color treatments to styling and treatments. Whatever your hair needs, they have you covered. It\'s a one-stop-shop for all things hair."',
    '"I appreciate that the salon uses high-quality products. My hair feels healthier and more nourished after each visit. It\'s evident that they prioritize the overall health of their clients\' hair."',
    '"The salon has a great online booking system that makes scheduling appointments a breeze. I love the convenience of being able to book my appointments anytime, anywhere."',
    '"The salon is always up-to-date with the latest trends and techniques. The hairstylists regularly attend training sessions and workshops, ensuring that they can provide the best services to their clients."',
    '"I had a relaxing and enjoyable experience at this salon. The staff was friendly, the chairs were comfortable, and the overall vibe was calming. It\'s the perfect place to unwind while getting your hair done."'
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % userReviews.length);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [userReviews.length]);

  if (loader) {
    return (
      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_60VYWWdg3U.json"
        className="lottie"
        loop
        autoplay
        speed={1}
        style={{ height: '30rem', width: '30rem' }}
        aria-label="Loading" />
    );
  }

  return <CardReview>{userReviews[currentReviewIndex]}</CardReview>;
};

export default Loading;
