# The Marvelous Quiz
The Marvelous quiz is a fun and easy to play quiz that tests users knowledge about the very popular Marvel Cinematic Universe(MCU). The quiz is another way to learn new things about the MCU that you might not have noticed before and might find surprsing. The quiz is suited for users at all levels since it has three different levels to choose from. To try the quiz yourself, simply visit this [link](https://arckp98.github.io/mcu-quiz/) for the live project.

![The landing page on different devices](/readme-images/project-overview.png)
<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>
<br>

---
## Contents
* [User Experience](#user-experience)
  * [Client Objective](#client-objective)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features](#general-features)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Libraries and Programs Used](#libraries-and-programs-used)

* [Testing](#testing)
  * [Responsive Testing](#responsive-testing)
  * [Issues Discovered](#issues-discovered)
  * [Lighthouse Score](#lighthouse-testing)
  * [W3C Validation Score](#w3c-validation)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [Fork](#fork)
    * [Clone](#clone)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)
------
## User Experience
### Client Objective
The MCU started in 2008 and ever since then has been growing rapidly. For context, the first 29 MCU movies have made 27.3 Billion Dollars worldwide making it the highest grossing franchise of all time ([source](https://www.investopedia.com/highest-grossing-movie-franchises-5085228#:~:text=The%20highest%2Dgrossing%20movie%20franchise,are%20both%20owned%20by%20Disney.)). The aim of this website is to allow users to play an interactive quiz about the well known Marvel Cinematic universe(MCU). The site is a fun alternative to test your knowledge and learn about the Marvel Universe. To test their knowledge about this franchise, the quiz should provide enough questions that test users on as many topics as possible, making it a **fun** yet **challenging** quiz. 

### User Stories
New User
* I want to play this quiz to test my knowledge reagrding the MCU. 
* I want to see how I am performing as I play.
* I want the instructions to be clear and gameplay to be smooth. 
* I want to see the right answer highlighted if I answer wrong. 

Returning User 
* I want to play this game at different levels.
* I want the questions to be in a random order. 
* I want the game to be responsive on multiple devices.

## Design 
### Colour scheme 
The colour pallete was created using [Coolors](https://coolors.co/).
![Colour scheme for the quiz](/readme-images/mcu-quiz-colour-scheme.png)

### Typography 
All the fonts for the project were sourced from [Google Fonts](https://fonts.google.com/).
The headings in this project use the font **Aldrich**. 
The body elements use the font **Scada**. 
The back up font is **Sans-serif**. The font combination was generated using [Font-joy](https://fontjoy.com/). 

### Imagery 
The quiz has three images that appear at the end of the quiz. All images are credited in the [Media](#media) section of this file. 
<details>
    <summary>Picture 1</summary>

![Picture of Stan Lee used in the game.](/assets/images/stanl.webp)
</details>
<br>
<details>
    <summary>Picture 2</summary>
    
![Picture of Captain America used in the game.](/assets/images/cap.webp)
</details>
<br>
<details>
    <summary>Picture 3</summary>
    
![Picture of Hulk used in the game.](/assets/images/hulk.webp)
</details>
<br>

### Wireframes 
<details>
    <summary>Wireframe 1: Welcome and Rules section(Desktop)</summary>
    
![Wireframe of the welcome and rules section created using Balsamiq](/readme-images/wireframe/welcome-page.png)
![Wireframe of the welcome and rules section created using Balsamiq](/readme-images/wireframe/rules-screen.png)
</details>
<br>
<details>
    <summary>Wireframe 2: The Game section(Desktop)</summary>
    
![Wireframe of the game section created using Balsamiq](/readme-images/wireframe/game-page.png)
</details>
<br>
<details>
    <summary>Wireframe 3: The Results section(Desktop)</summary>
    
![Wireframe of the results section created using Balsamiq](/readme-images/wireframe/results-screen.png)
</details>
<br>
<details>
    <summary>Wireframe 4: Welcome and Rules section(Mobile)</summary>
    
![Wireframe of the results section created using Balsamiq](/readme-images/wireframe/welcome-page-mobile.png)
![Wireframe of the results section created using Balsamiq](/readme-images/wireframe/rules-screen-mobile.png)
</details>
<br>
<details>
    <summary>Wireframe 5: The Game section(Mobile)</summary>
    
![Wireframe of the results section created using Balsamiq](/readme-images/wireframe/game-page-mobile.png)
</details>
<br>
<details>
    <summary>Wireframe 6: The Results section(Mobile)</summary>
    
![Wireframe of the results section created using Balsamiq](/readme-images/wireframe/results-screen-mobile.png)
</details>
<br>

## Features 
### General Features 
The website is made up of 4 sections. Each section has the following features: 
A Favicon that appears on the browser tab. 
![Favicon](/readme-images/favicon-view.png)
<br>

The main heading and sub-heading. 
![Headings that appear in all sections.](/readme-images/main-headings.png)
All sections of this website are responsive, more about this in [Testing](#testing) section. 

The website starts with a **Welcome menu** where the user can start playing immediately by picking a difficulty level. There are three difficulty levels: Easy, Medium, and Excelsior(Hard). The term Excelsior was chosen instead of hard because it is a common phrase used by the creator of Marvel Comics, Stan Lee. 
![Screenshot of the welcome menu on different devices](/readme-images/welcome-section.png)
<br>

If the user would like some clarity regarding how the game works, they can refer to the **Rules** section. 
![Screenshot of the rules section on different devices](/readme-images/rules-section.png)
<br>

After selecting a difficulty, the user is taken to the **Game section**. The user can then start playing by selecting the answers as they appear. Here, the user can check their performance by looking at the points they have scored, the number of correct/incorrect questions they have answered, and a progress bar to see how far they are in the quiz. 
![Screenshot of the game section on different devices](/readme-images/game-section.png)
<br>

Once the user is done with answering all the questions, they are taken to the **Result section** where they can check their score. The image underneath the score changes according to the score the user gets out of 100. If the score is ≥ 30, there will be a picture of the Hulk. If the score is ≥ 60, there will be a picture of Captain America. If the score is ≥ 70, there will be a picture of Stan Lee. Here the player can choose to play again by pressing the play again button which will take them to the home screen where they can try a different level. 
![Screenshot of the results section on different devices](/readme-images/results-section.png)
<br>

### Future Implementations
I would like to add more functionality and features to the website to improve the user experience by including:
* Add a timer. Adding the timer could add a sense of urgency where the user would have to think fast to answer the question before runnig out of time. 
* Add background music. The user can choose whether or not they want to play the quiz with the theme song of the MCU. This could make the quiz more entertaining. 
* Add a character wiki using an API. An API could be used to pull information about various Marvel characters which can be displayed in a seperate section of the website. The user can then choose to read more about certain characters of their choice. 
* Save high scores. Although this is supposed to be a fun super casual game, adding this functioanlity can allow multiple users to play on the same device and save their scores locally for comparison or individuals could just save their scores to measure their performance. 

### Accessibility
To ensure accesibility, the site is: 
* The colour contrast meets the minimum requirement since the rating is AA. 
* Aria-label were used where required to make the website screen-reader friendly.
* Using semantic HTML.
* Having an alternative font as Sans-serif for users who might have difficulty with chosen fonts. 
* The site was tested for vision deficiencies using the Rendering tool from Chrome DevTools by emulating various deficiencies. 

## Technologies Used 
### Languages Used
* HTML 5 
* CSS 3
* JavaScript ES6

### Libraries and Programs Used
* Google fonts: Import fonts to the website
* Gitpod: To edit code and READ.ME file along with storing pictures.
* Github: To host the project using Github pages and to store the project repository. 
* Git: To control versions of the website. 
* [Toppng](https://toppng.com/free-image/comic-captain-america-PNG-free-PNG-Images_76911), [PNGItem](https://www.pngitem.com/middle/JRhboT_cartoon-characters-green-colour-hd-png-download/), and [Yahoo](https://sports.yahoo.com/stan-lee-documentary-coming-disney-221840285.html?guce_referrer=aHR0cHM6Ly9sZW5zLmdvb2dsZS5jb20v&guce_referrer_sig=AQAAAFgRHu_7ClKSfR6RsdL0c1-_wsDqsvOnP6qM0zSloEifMPZBwF7gXHMVeIJiJVWH8Y8cWze_sVkrVaaIlB2hkQ8Jbg3B_zWn-wr5sT5Y_mEVpBADIXWeLo7vP-JCj48y4xgMx1FWEQrwUhx-ERRlhw7aCEhuPTHqYPdJYxNdaRid&guccounter=2) For images used in the quiz. 
* [Responsive design checker](https://responsivedesignchecker.com/)
* Font Awesome: For different social media icons.
* Coolors: To generate a colour palette for the website. 
* Google DevTools: To test changes to the website along with responsiveness. Also used to measure colour contrast and to emulate vision deficiency. 
* Am I Responsive: Viewing website on different devices.
* [BIRME](https://www.birme.net/?): To resize images and convert to WebP
* Balsamiq: Creating a Wireframe. 
<br>




