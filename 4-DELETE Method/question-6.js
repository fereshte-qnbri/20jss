//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


//*End of story :)

const YOUR_API_BASE_URL = 'https://your-mockapi-url.com/api/users'; 

// 1. Delete Family Members

async function deleteUser(userId) {
  try {
    const response = await fetch(`${YOUR_API_BASE_URL}/${userId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error(`Error deleting user: ${response.statusText}`);
    }

    console.log(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

const familyIds = [1, 2, 3]; 

familyIds.forEach(id => deleteUser(id));




// 2. Delete Employees with Even IDs

async function deleteEvenEmployees() {
  try {
    const response = await fetch(YOUR_API_BASE_URL);
    const employees = await response.json();

    for (const employee of employees) {
      if (employee.id % 2 === 0) { 
        await deleteUser(employee.id); 
      }
    }
  } catch (error) {
    console.error('Error fetching or deleting employees:', error);
  }
}

deleteEvenEmployees();