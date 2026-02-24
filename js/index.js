function reorderCards(container, cardContainer, cards, cardIndex) {
  if (window.innerWidth > 700 || cards.length < 1) {
    return;
  }
  const progressBars = document.getElementsByClassName('progress-bar-container');
  if (progressBars != undefined) {
    for (let idx = 0; idx < progressBars.length; idx += 1) {
      progressBars[idx].remove();
    }
  }

  const progressBarContainerDiv = document.createElement("div");
  progressBarContainerDiv.classList.add("progress-bar-container");
  const progressBarDiv = document.createElement("div");
  progressBarDiv.classList.add("progress-bar");
  progressBarContainerDiv.appendChild(progressBarDiv);


  cardContainer.appendChild(cards[cardIndex]);
  container.appendChild(progressBarContainerDiv);

  setTimeout(() => {
    if (window.innerWidth < 700) {
      let nextCardIndex = cardIndex + 1;
      if (nextCardIndex >= cards.length) {
        nextCardIndex = 0;
      }
      const visibleCards = cardContainer.getElementsByClassName('card');
      for (let idx = 0; idx < visibleCards.length; idx += 1){
        visibleCards[idx].classList.add("card-vanish");
        setTimeout(() => {
          visibleCards[idx].remove();
        }, 150); // rotate after .5 seconds
      }
      reorderCards(container, cardContainer, cards, nextCardIndex);
    }
  }, 10000); // rotate after 10 seconds
}

// Initial check
if (window.innerWidth < 700) {
  const container = document.getElementsByClassName('container')[0];
  const cardContainer = document.getElementsByClassName('card-container')[0];
  const cards = Array.from(cardContainer.children);
  cardContainer.innerHTML = '';
  reorderCards(container, cardContainer, cards, 0);
}

// Add event listener to check on resize
window.addEventListener('resize', reorderCards);
