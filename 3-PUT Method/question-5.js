//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */
const YOUR_API_BASE_URL = 'https://your-mockapi-url.com/api/users';
const userId = 1;

const updatedUser = {
  firstName: "Lufy",
  lastName: "monkey. D",
  phoneNumber: "(945) 635-3854"
};

async function updateUser() {
  try {
    const response = await fetch(`${YOUR_API_BASE_URL}/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    });

    if (!response.ok) {
      throw new Error(`Error updating user: ${response.statusText}`);
    }

    const updatedUserData = await response.json();
    console.log('User updated successfully:', updatedUserData);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

updateUser();


//*To be continue...