<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Chuck Norris Jokes! game.
*** If you have any suggestions to improve the game or the README, please fork the repo and create a pull request,
*** or simply open an issue with your ideas. Happy coding!
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RubenBavaro/Chuck-Norris-Jokes-">
    <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="Chuck Norris Logo" width="220" height="120">
  </a>

  <h3 align="center">Chuck Norris Jokes!</h3>

  <p align="center">
    A web application built with HTML, CSS, and JavaScript to discover endless Chuck Norris jokes!
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#game-rules">Game Rules</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

**Chuck Norris Jokes!** is an interactive web application that leverages the official Chuck Norris API to fetch and display countless hilarious jokes.  
Users can choose a joke category from a dropdown menu or select the **"No Category"** option to receive a completely random joke.  
Simply click the **"Load Joke"** button to request a new joke, which will then be displayed in the designated area on the page.  
Enjoy discovering the unique and surreal humor of Chuck Norris!

<!-- GAME RULES -->
## Game Rules
- **Access:** Visit the generated GitHub page (https://rubenbavaro.github.io/Chuck-Norris-Jokes-) to start playing.
- **Select a Category:**  
  - A dropdown menu on the screen displays various categories (e.g., *Animal*, *Career*, *Celebrity*, etc.) along with the **"No Category"** option.
  - Select a specific category to get a joke related to that topic, or choose **"No Category"** for a random joke.
- **Load the Joke:**  
  - Click the **"Load Joke"** button to send a request to the Chuck Norris API.
  - If a category has been selected, a request will be made to the URL:  
    `https://api.chucknorris.io/jokes/random?category={category}`  
    replacing *{category}* with the chosen category.
  - If no category is selected, the request will be sent to:  
    `https://api.chucknorris.io/jokes/random`
- **Display the Joke:**  
  - Once the response is received, the application will display the `"value"` field (which contains the joke text) in the designated area on the page.
- **Have Fun and Share:**  
  - Keep clicking **"Load Joke"** to discover new jokes and be delighted by the inimitable humor of Chuck Norris!
  - Share your favorite jokes with friends and family!

<!-- BUILT WITH -->
## Built With

This application is built using:
* **HTML5** – For structuring the content.
* **CSS** – For styling and visual presentation.
* **JavaScript** – For fetching data from the API and handling interactivity.
