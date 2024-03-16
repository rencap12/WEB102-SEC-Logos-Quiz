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


const Cards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);
  const [prevIndices, setPrevIndices] = useState([]);
  const [currentCards, setCurrentCards] = useState(cardPairs);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleCheck = () => {
    if (userInput.toLowerCase() === cardPairs[currentCardIndex].schoolName.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect, try again.");
    }
}

  
  // Function to update mastery level of the current card
  const updateMasteryLevel = () => {
   cardPairs[currentCardIndex].masteryLevel++;
   // You might want to update the cardPairs state or perform other actions here
    setCurrentCards(cardPairs);
  };

  
  console.log("current card level", cardPairs[currentCardIndex].masteryLevel);

  const handleNextCard = () => {
    const newIndex = currentCardIndex + 1;
    if (newIndex < cardPairs.length) {
        setPrevIndices(prevIndices => [...prevIndices, currentCardIndex]);
        setCurrentCardIndex(newIndex);
        setShowFront(true); // Show front of card by default for new card
    } else {
        // If reached the end of the array, handle as needed
        // For example, reset to the beginning of the array
        setCurrentCardIndex(0);
        setShowFront(true); // Show front of card for the first card
    }
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
    const currentCardLevel = cardPairs[currentCardIndex].masteryLevel;
    if (currentCardLevel === 1) {
      return "red";
    } else if (currentCardLevel === 2) {
      return "yellow";
    } else if (currentCardLevel >= 3) {
      return "green";
    } else {
      return ""; // Default color
    }
  };

  return (
    <div className="my-cards" >
      <div className="card" onClick={toggleCardSide} style={{ backgroundColor: getColorClass() }}>
        {showFront ? (
          <img src={currentCards[currentCardIndex].logo} alt="School Logo" />
        ) : (
          <p>{currentCards[currentCardIndex].schoolName}</p>
        )}
      </div>
      <div>
        User Input: {userInput}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button className="nextButton" onClick={handleCheck}>Check</button>
      <div>
        <button className="prevButton" onClick={handlePreviousCard}>Previous</button>
        <button className="nextButton" onClick={handleNextCard}>Next</button>
        <button className="markButton" onClick={updateMasteryLevel}>Confident on this Logo? Click me to mark the card!</button>
      </div>
    </div>
  );
};
export default Cards;
