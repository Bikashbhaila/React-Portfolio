import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bikash Bhaila</title>
        <link rel="stylesheet" type="text/css" href="assets/css/reset.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        <header id="masthead">
          <div className="container">
            <a href="index.html" id="logo">Bikash Bhaila</a>
            <nav>
              <a href="index.html">About</a>
              <a href="portfolio.html">Portfolio</a>
              <a href="contact.html">Contact</a>
            </nav>
          </div>
        </header>
        <div id="main-container" className="container">
          <section className="main-section">
            <h1>About Me</h1>
            <img src="assets/images/profile_pic.PNG" className="auth-image" alt="Bikash Bhaila" />
            <p>Hello, My name is Bikash Bhaila. I am an entry-level banking professional currently working at 
              Wells Fargo for its Wealth and Investment Management operational division. Having started out my careers in financial services
              industry, I have realized the importance of having IT background for professional advancement, which motivated me to join 
              full-stack web-development course at (UofM) University of Minnesota.</p>
            <br />
            <p>Originally from Nepal, I have always enjoyed nature, and my hobbies include outdoor activities such as camping, hiking 
              and fishing. I also enjoy indoor games such as pool and card and table games including poker.</p>  
          </section>
          <section className="sidebar">
            <div id="connect">
              <h2>Contact Info</h2>
              <a href="https://github.com/Bikashbhaila"><img src="assets/images/github.png" className="social" alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/bikash-bhaila-714b6664/"><img src="assets/images/linkedin.png" className="social" alt="LinkedIn" /></a>
              <a href="assets/images/resume.pdf"><img src="assets/images/resume.jpg" className="socialstack" alt="resume" /></a>
              <a href="mailto:bikashbhaila@gmail.com" style={{color: 'gray'}}>bikashbhaila@gmail.com</a>
              <h6> Ph: (612) 462-2239</h6>
            </div>
          </section></div>
        <footer>
          <div className="container">
            Copyright © 2020 Bikash Bhaila
          </div></footer>
      </div>
    )
  }
}
