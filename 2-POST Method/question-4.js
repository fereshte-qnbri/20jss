// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
// const users = [
//     {
//         firstName: "Grattan",
//         lastName: "Dalton"
//     },
//     {
//         firstName: "William",
//         lastName: "Dalton"
//     },
//     {
//         firstName: "Robert",
//         lastName: "Dalton"
//     },

// ];

const YOUR_API_BASE_URL = 'https://your-mockapi-url.com/api/users'; 

async function addUser(user) {
  try {
    const response = await fetch(YOUR_API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      throw new Error(`Error adding user: ${response.statusText}`);
    }

    const newUser = await response.json();
    console.log('User added successfully:', newUser);
  } catch (error) {
    console.error('Error adding user:', error);
  }
}
users.forEach(user => addUser(user));

/** WRITE YOUR CODE BELOW DOWN */

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  console.log('Submitted data:', { firstName, lastName, phoneNumber });

  signupForm.reset();
});