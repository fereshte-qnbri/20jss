/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/
// const article = document.querySelector("article");


// ! Answer

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      createCards(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }
  
  function createCards(users) {
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const cardTitle = document.createElement('h2');
      cardTitle.innerText = user.name;
      card.appendChild(cardTitle);
  
      const cardContent = document.createElement('p');
      cardContent.innerText = `Company: ${user.company.name}`;
      card.appendChild(cardContent);
  
      userCards.appendChild(card);
    });
  }
  
  fetchData();