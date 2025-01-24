/*
   what is the difference between an asynchronous function and a synchronous function?
*/

// ! Answer

function fetchData() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve("Data fetched successfully!"); 
     }, 1000);
   });
 }
 
 fetchData()
   .then(data => {
     console.log(data); 
   });
 
 console.log("This line executes immediately.");