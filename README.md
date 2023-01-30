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
  * [Manual Testing](#manual-testing)
  * [Issues Discovered](#issues-discovered)
  * [Lighthouse Score](#lighthouse-testing)
  * [W3C Validation Score](#w3c-validation)
  * [JSHint Score](#jshint-validation)

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
A Favicon logo that appears on the browser tab. 
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
* [Responsive Design Checker](https://responsivedesignchecker.com/)
* Font Awesome: For different social media icons.
* Coolors: To generate a colour palette for the website. 
* Google DevTools: To test changes to the website along with responsiveness. Also used to measure colour contrast and to emulate vision deficiency. 
* Am I Responsive: Viewing website on different devices.
* [BIRME](https://www.birme.net/?): To resize images and convert to WebP
* Balsamiq: Creating a Wireframe. 
<br>

## Testing 
### Responsive Testing 
The website's responsivity was tested using ChromDev Tools and Responsive Design Checker by emulating devices of different sizes. The website was responsive on all major devices. 
<details>
    <summary>Example screenshots from Responsive Design Checker(Mobile, Monitor, and Tablet)</summary>
    
![Screenshot of a mobile emulation from  Responsive Design Checker](/readme-images/responsive-design-checker.png)
![Screenshot of a monitor emulation from  Responsive Design Checker](/readme-images/responsive-design-checker-monitor.png)
![Screenshot of a tablet emulation from  Responsive Design Checker](/readme-images/responsive-design-checker-tablet.png)
</details>
<br>
Along with that, the website was manually tested using: 

* Macbook air(2560x1600)
* iPhone 11 (320x568)

### User Goals Testing
The table outlines first-time users goals and whether they were accomplished or not.
| First-time User Goals| How was it addressed | Accomplished
| ------ | --------- | -----------
| I want to play this quiz to test my knowledge reagrding the MCU. | The quiz questions are relevant to the MCU. | Yes
| I want to see how I am performing as I play.| The quiz has a score tracker that keeps track of the score long with the questions that were correct and incorrect. Users can also see how far along they are in the game by looking at the progress bar.| Yes
| I want the instructions to be clear and gameplay to be smooth. | The webiste has a section where users can find the rules of the game and the physical user interaction during the game is kept to a minimum so the user can focus more on the question. The only time a user touches the screen is when they want to choose an answer. | Yes
| I want to see the right answer highlighted if I answer wrong. | Upon answering the question, the user can check whether they got the answer correct or incorrect. If the user gives an incorrect answer, the correct answer is highlighted along with the answer they chose. In case the answer is correct, only their selected option is shown. | Yes 

<br>

The table outlines returning users goals and whether they were accomplished or not.
| Returning User Goals| How was it addressed | Accomplished
| ------ | --------- | -----------
| I want to play this game at different levels. | The game offers three levels to play from, each with their own set of questions. | Yes
| I want the questions to be in a random order.| The quiz questions are displayed in a random order everytime a user plays the game. | Yes
|I want the game to be responsive on multiple devices. | The game site is responsive and can be played on various devices. | Yes
<br>


### Manual Testing

The table below outlines tetsing done on different sections of the website. Testing done in order of flow of the site. 
|Expectation| How was it tested| Result
| -------- | ----------- | ---------------
| The rules section can be displayed or hidden by pressing appropriate buttons.| By clicking the 'rules' button, the rules should be displayed and by pressing the 'Understood' button, the rules section should be closed. | The buttons work as intended when the user clicks them.
| The level buttons should lead to the appropriate game questions. | By clicking all the game buttons to see if the questions shown are from a predetermined list of questions and of different difficulty. | The questions displayed are indeed in accordance with the pre determined questions when the user chooses a level. 
| Users should have enough time between the current question and next question. | By playing the game and making sure the time gap is enough to review the current question. | The quiz has a good time lag between the current and next question. 
| The questions are randomly presented to the user| By playing the game more than once at same level to see the order of the questions. | The questions are randomised for all levels when the user plays. 
| The correct and incorrect answer is shown for the user to compare if the user gets the answer wrong. | By answering questions and checking if the correct and incorrect answer are highlighted. | The user is shown the incorrect and correct answer if they answer wrong upon clicking one of the answer options.
| The result area is updated after answering each question. | By playing the quiz, the score, correct, and incorrect values should increase/decrease based on the answer. | The results are indeed updated depending on the answer when the user clicks one of the options they believe to be correct. 
| The progress bar accurately represents the user's journey. | By looking at the progress bar as the game is played. The progress bar should fill based on the number of questions viewed. | The progress bar works since it shows an accurate representation of how many questions have been viewed by the user in terms of percentages as the user goes through the quiz. 
| The result section should show the user's final score. | By playing the game and then checking the score. | The result section accurately shows the score that the user got in the game. 
| The image in the result section should change based on user's score.| By playing the game and getting different scores based on score range to see if the image is updated. | The image indeed changes based on how the user scored.
| The user should be able to play the game again if they wish to. | By checking if the play again button works. | The play again button when clicked, refreshes the user score and brings the user back to the main screen to play the game at the same or different level. 

### Issues discovered
|Bug|Solve|Discovered by
|-----|---------|-----
|Lack of Hover effect after the first round. | Add the hover element back in the reset function. | Me.
| Images won't appear after the quiz in the deployed version. | Change the syntax for file source. | Me.
| Text was moving out of the answer box. | Change the style for answer buttons by decreasing padding. | Me.
| Same ID was accidently used twice. | Remove the unnecessary ID tag. | W3C validator.
|  Box shadow effect was missing. | Change the values for the Box Shadow since it had the wrong value. | W3C validator.
| Issues with displaying and updating question. | The code was missing a question index/counter to increase and update the questions. | Tutor support. 
| Undefined variables were present. | Define the variables using let keyword to make the code more coherent and in-accordance with JS syntax. | JSHint. 
| The reset function was not working properly since there were still highlights from previous question. | Change the position of the function call. | Me. 
| The text was blue for answer options on iPhone. | Specify the color for all major elements. This was just an iOS issue. | Me.
| Had issues with checking answer for check answer function. | It was an issue with the equality(not strict) and some answer options had an extra whitespace. | Me.
| Elements were not being hidden properly. | Double check the style rule and assignment of that rule. | Me. 
| Decrementing score by 1 point for every wrong answer was not very logical. | Changed the code and rule to ensure that 10 points were added/removed based on the answer. | Me.
|Uncaught TypeError when displaying questions. | No errors in functionality but to solve this, an if statement was used to ensure that the variable question was defined. | DevTools. 
| Uncaught TypeError for some buttons. | Ensure that the right element was targeted and changed the position in the script. | Me.
| Heading elements were not sequential, affected accesibility. | Change from H3 to H2 for sub heading| W3C Validator. 

<br>

### Known Bugs 
* On mobile phones, the hover effect stays on the option selected on the previous question. Its only registered as an answer if the user clicks on that option again. Due to time constratints it has not been addressed adequately. This occurence so far has been seen on the iPhone.
* There is an error regarding the permission policy which is related to github pages and seems uncontrollable. 
 <details>
    <summary>Permission policy error</summary>

    ![Screenshot of the unresolved error](/readme-images/unresolved-error.png)
</details> 


<br>

### W3C Validation score 
<details>
    <summary>W3C HTML validation</summary>
    
![Verification for HTML code](/readme-images/w3c-html.png)
</details>
<br>
<details>
    <summary>W3C CSS validation</summary>
    
![Verification for CSS code](/readme-images/w3c-css.png)
</details>
<br>


### Lighthouse Score
<details>
    <summary>Desktop</summary>
    
![Lighthouse score for desktopn](/readme-images/desktop-lighthouse.png)
</details>
<br>
<details>
    <summary>Mobile</summary>
    
![Lighthouse score for mobile](/readme-images/mobile-lighthouse.png)
</details>
<br>


### JSHint Score
The table shows the result for all the JS files used in this project. 
| File name | Result
| ---|---|
|script.js | Passed
|questions.js | Passed

## Deployment & Local Development 
### Deployment 
The website was deployed on Github pages using Github. Since the project was built using Gitpod, Git version control was used to commit changes and push them to Github project repository. To deploy the project: 
1. Log in with your Github account or make one if you don't have one. 
2. Find the repository: mcu_quiz
3. Click the setting button that is on the menu bar. 
4. Look for the code and automation menu and click the pages option. 
5. Make sure  the source is set to **Deploy from a branch**. 
6. Set the branch to **main** and set the folder next to it to **/(root)**. 
7. Click save. After a couple of minutes, you should have a URL of the page at the beginning of the pages section. 
<br>

### Local Development  
1. Log in with your Github account or make one if you don't have one. 
2. Find the repository: mcu_quiz.
3. Click on the **Code** button next to Gitpod. 
4. Download the zip file and run extract it on your device. Now you can use it in your preffered code editor. 
<br>

As an alternative to downloading, you can fork or clone the project repository. 
#### Fork
1. Log in with your Github account or make one if you don't have one. 
2. Find the repository: mcu_quiz.
3. Click the Fork button on the top right corner. 
<br>

#### Clone 
1. Log in with your Github account or make one if you don't have one. 
2. Find the repository: mcu_quiz.
3. Click the **Code** button next to the Gitpod button and **copy** the HTTPS link. 
4. Open the terminal. 
5. Make sure that the current directory is the one where you want the cloned repository to be. 
6. Use the command ```git clone``` and paste the link. 
7. Press Enter. Now the repository is cloned. 
<br>

## Credits 
### Code Used
* The Code Institute student template. [The Template](https://github.com/Code-Institute-Org/gitpod-full-template). 
* [Youtube](https://www.youtube.com/watch?v=_LYxkClHnV0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5) videos from James Quick.
* [Stack Overlflow](https://stackoverflow.com/questions/28977320/how-do-i-get-the-bullet-points-of-a-ul-to-center-with-the-text) which helped with aligning the bullet points. 
<br>

### Content 
* All the content was written by @ARcKP98
<br>

### Media 
* The image of Captain America was taken from [Toppng](https://toppng.com/free-image/comic-captain-america-PNG-free-PNG-Images_76911). 
* The image of Hulk was taken from [PNGItem](https://www.pngitem.com/middle/JRhboT_cartoon-characters-green-colour-hd-png-download/). 
* The image of Stan Lee was taken from [Yahoo](https://sports.yahoo.com/stan-lee-documentary-coming-disney-221840285.html?guce_referrer=aHR0cHM6Ly9sZW5zLmdvb2dsZS5jb20v&guce_referrer_sig=AQAAAFgRHu_7ClKSfR6RsdL0c1-_wsDqsvOnP6qM0zSloEifMPZBwF7gXHMVeIJiJVWH8Y8cWze_sVkrVaaIlB2hkQ8Jbg3B_zWn-wr5sT5Y_mEVpBADIXWeLo7vP-JCj48y4xgMx1FWEQrwUhx-ERRlhw7aCEhuPTHqYPdJYxNdaRid&guccounter=2). 
* The logo for the website was created using [favicon](https://favicon.io/).
<br>

### Acknowledgments
* Code Institute for their curriculum. 
* Adegbenga Adeye, my CI mentor for feedback on the project.  
* The tutor suport. 







