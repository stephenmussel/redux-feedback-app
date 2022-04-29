# Redux Feedback App



#### _Duration: Two-Day Sprint_
<br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />


<!-- ABOUT THE PROJECT -->
## About
<br />

Add story. What problem did you solve? How did you solve it?

A single-page application that takes feedback and stores user inputs in Redux. You can review your answers and go back to make changes before submitting. An admin page is included that allows you to view all submissions with the ability to flag and delete each individual user feedback.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
<br />

* [React.js](https://reactjs.org/)
* [Redux](http://redux.js.org)
* [Axios](http://npmjs.com/package/axios)
* [Material-UI](https://mui.com/)
* HTML5
* CSS3
* [Express.js](http://expressjs.com)
* [Node.js](https://nodejs.org/en)
* [PostgreSQL](https://postgresgl.org)

<p align="right">(<a href="#top">back to top</a>)</p>
<br />


<!-- GETTING STARTED -->
## Getting Started

Use the following instructions to set up a local version.

### Prerequisites
<br />

- [Node.js](http://node.js.org/en)
- [PostgreSQL](http://postgresql.org)

### Installation
<br />

Clone the repo:
  ```
  git clone git@github.com:stephenmussel/redux-feedback-app.git
  ```

Create your database and tables in PostgreSQL using the provided `data.sql` file.

Install dependencies:

  ```
  npm install
  ```

Start server using `port: 5000`:

  ```
  npm run server
  ```

Now that the server is running, open a new terminal with `cmd + t` and start your app using `port: 3000`.

```
npm run client
```

`localhost:3000` should automatically open up in your browser. Otherwise, open up a new browser tab and type `localhost:3000` 


<p align="right">(<a href="#top">back to top</a>)</p>
<br />


<!-- USAGE EXAMPLES -->
## Usage
<br />

![Preview Gif](/public/images/redux-feedback-app.gif)
<br />

1. The first page will ask: `How you are feeling?`. Enter a number between 1 and 5. A response outside of this range will prompt you to provide the correct response. If left empty, you will be asked to provide a response.  

![Page 1](/public/images/pageOne.jpg)
<br />

2. The next two pages (`understanding? support?`) have the same parameters.  

![Page 2](/public/images/pageTwo.jpg)
<br />

3. The fourth page: `Any comments to leave?` does not require a response and you can move to the next without providing one.

4. At this point you've noticed that you can go `Back` and edit your previous responses. Your previous responses will be displayed for convenience.

5. After the `Comments` page, you can `Review` your responses and make any last minute changes.

![Page 5](/public/images/pageFive.jpg)
<br />

6. After you submit your feedback, you are directed to a `Thank you!` page and have another chance to provide new feedback.

![Page 6](/public/images/pageSix.jpg)
<br />



<p align="right">(<a href="#top">back to top</a>)</p>
<br />


<!-- CONTACT -->
## Contact  

[LinkedIn](https://www.linkedin.com/in/phaydara-vongsavanthong/)  
[GitHub](https://github.com/stephenmussel)  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Google](http://www.google.com)
* [Markdown](https://www.markdownguide.org/basic-syntax/)
* [Material-UI](https://mui.com/)
* [MDN](https://developer.mozilla.org/en-US/)

<!-- 
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
-->

<p align="right">(<a href="#top">back to top</a>)</p>
<br />


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- 
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
-->