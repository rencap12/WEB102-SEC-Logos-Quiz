// Cards.jsx
import React, { useState } from 'react';

const cardPairs = [
    { logo: "src/logos/alabama.png", schoolName: "University of Alabama", masteryLevel: 0 },
    { logo: "src/logos/arkansas.png", schoolName: "University of Arkansas", masteryLevel: 0 },
    { logo: "src/logos/auburn.png", schoolName: "Auburn University", masteryLevel: 0 },
    { logo: "src/logos/uf.png", schoolName: "University of Florida", masteryLevel: 0 },
    { logo: "src/logos/uga.png", schoolName: "University of Georgia", masteryLevel: 0 },
    { logo: "src/logos/kentucky.png", schoolName: "University of Kentucky", masteryLevel: 0 },
    { logo: "src/logos/lsu.png", schoolName: "Louisiana State University", masteryLevel: 0 },
    { logo: "src/logos/olemiss.png", schoolName: "University of Mississippi (Ole Miss)", masteryLevel: 0 },
    { logo: "src/logos/miss.png", schoolName: "Mississippi State University", masteryLevel: 0 },
    { logo: "src/logos/missouri.png", schoolName: "University of Missouri", masteryLevel: 0 },
    { logo: "src/logos/usc.png", schoolName: "University of South Carolina", masteryLevel: 0 },
    { logo: "src/logos/ten.png", schoolName: "University of Tennessee", masteryLevel: 0 },
    { logo: "src/logos/tam.png", schoolName: "Texas A&M University", masteryLevel: 0 },
    { logo: "src/logos/van.png", schoolName: "Vanderbilt University", masteryLevel: 0 }
  ];

const Cards = ({ masteryLevel }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);
  const [prevIndices, setPrevIndices] = useState([]);
  const [currentCards, setCurrentCards] = useState(cardPairs);

  // Function to update mastery level of the current card
  const updateMasteryLevel = (masteryLevel) => {
    const updatedCardPairs = [...currentCards]; // Create a copy of cardPairs
    updatedCardPairs[currentCardIndex].masteryLevel = masteryLevel; // Update mastery level of the current card
    // You might want to update the cardPairs state or perform other actions here
    setCurrentCards(updatedCardPairs);
    console.log('should change color');
  };

  const handleNextCard = () => {
    const newIndex = Math.floor(Math.random() * cardPairs.length);
    setPrevIndices(prevIndices => [...prevIndices, currentCardIndex]);
    setCurrentCardIndex(newIndex);
    setShowFront(true); // Show front of card by default for new card
  };

  const toggleCardSide = () => {
    setShowFront(!showFront);
  };

  const handlePreviousCard = () => {
    if (prevIndices.length > 0) {
      const prevIndex = prevIndices.pop();
      setCurrentCardIndex(prevIndex);
      setShowFront(true);
      setPrevIndices(prevIndices);
    }
  };

  const getColorClass = () => {
    const currentCard = currentCards[currentCardIndex];
    if (currentCard.masteryLevel === 1) {
      return "red";
    } else if (currentCard.masteryLevel === 2) {
      return "yellow";
    } else if (currentCard.masteryLevel >= 3) {
      return "green";
    } else {
      return ""; // Default color
    }
  };

  return (
    <div className= {`my-cards${getColorClass()}`}>
      <div className="card" onClick={toggleCardSide}>
        {showFront ? (
          <img src={currentCards[currentCardIndex].logo} alt="School Logo" />
        ) : (
          <p>{currentCards[currentCardIndex].schoolName}</p>
        )}
      </div>
      <button className="prevButton" onClick={handlePreviousCard}>Previous</button>
      <button className="nextButton" onClick={handleNextCard}>Next</button>
      <button className="markButton" onClick={updateMasteryLevel}>Confident on this Logo? Click me to mark the card!</button>
    </div>
  );
};

export default Cards;
