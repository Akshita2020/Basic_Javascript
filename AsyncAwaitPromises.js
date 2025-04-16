// Promise

// const getUser = (userName) => {
//   const API_URL = `https://api.github.com/users/${userName}`;
//   return fetch(API_URL).then((response) => response.json());
// };

// getUser("openai").then((val) => console.log(val));

// Async and await

// const getUser = async (userName) => {
//   const API_URL = `https://api.github.com/users/${userName}`;
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   return data;
// };

// getUser("openai").then((val) => console.log(val));

const getGithubUser = (username) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Not Found") {
          reject("User not found");
        } else {
          resolve(data);
        }
      })
      .catch((err) => {
        reject("Network Error: " + err.message);
      });
  });
};

getGithubUser("octocat")
  .then((val) => console.log("User Found:", val))
  .catch((err) => console.log("Error:", err));
