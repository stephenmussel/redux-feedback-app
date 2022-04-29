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


Instructors wanted to make sure their students were receiving the best education. They needed a simple way to collect and view student feedback. This information would allow them to adjust their teaching and content accordingly.

I created a single-page application that takes feedback and stores user responses in Redux. Users can review their responses and edit them  before submitting. The admin page allows the instructor to view all submissions. They also have the ability to flag and delete each individual user feedback.

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

A tab should automatically open up in your browser. Otherwise, open up a new browser tab and type `localhost:3000` 


<p align="right">(<a href="#top">back to top</a>)</p>
<br />


<!-- USAGE EXAMPLES -->
## Usage
<br />  


![Preview Gif](/public/images/redux-feedback-app.gif)
<br />

The first page asks: `How you are feeling?`. Enter a number between 1 and 5. A response outside of this range will prompt you to provide the correct response. If left empty, you will be asked to provide a response.  
<br />  

![Feeling](/public/images/pageOne.jpg)
<br />

The next two pages have the same parameters. 
<br /> 

![Understanding](/public/images/pageTwo.jpg)
<br />  

![Support](/public/images/pageThree.jpg)
<br />

The fourth page does not require a response and you can continue without providing one.  
<br />

![Comments](/public/images/pageFour.jpg)
<br />

At this point you've noticed that you can go `Back` and edit your previous responses. Previous responses will be displayed for your convenience.
<br />

After the `Comments` page, you can `Review` your responses and make any last minute changes.
<br />

![Review](/public/images/pageFive.jpg)
<br />

After you submit your feedback, you are directed to a `Thank you!` page and have another chance to provide new feedback.  
<br />

![Thank you](/public/images/pageSix.jpg)
<br />  

Additionally, an `Admin` page is provided. It displays all the feedback with the ability to delete and flag individual user feedback.  
<br />

![Thank you](/public/images/admin-preview.gif)
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

Thanks to [Prime Digital Academy](http://primeacademy.io) and my wife and our dog Laurel for their continued support and patience as I created this app.

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