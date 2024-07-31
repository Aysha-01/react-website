import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Person, Award, People, ChatDots, Gear, Globe, Building, Clock, Book } from 'react-bootstrap-icons';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="nav-menu-header">
        <div className="logo">
          <span className="lanterna">Lanterna</span>
          <span className="Education">education</span>
        </div>

        <nav className="navbar">
          <a  class="nav-underline" href="#how-it-works">How it works</a>
          <a  class="nav-underline" href="#tutors">Tutors</a>
          <a  class="nav-underline"href="#subjects">Subjects</a>
          <a  class="nav-underline"href="#prices">Prices</a>
          <a  class="nav-underline"href="#why-lanterna">Why Lanterna</a>
        </nav>

        <div className="nav-menu-right">
          <nav className="navbar">
            <a href="#login" className="login nav-underline"><Person className="person-icon"/>Login</a>
            <a href="#advisor" className="advisor-link" >Talk with an advisor</a>
            <a href="#book" className="booking btn btn-outline-secondary">Book now</a>
          </nav>
        </div>
      </header>

      <section className="header-down m-0 p-0 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 class="heading">Unlock your potential with online <span className="yellow-underline">IB & IGCSE tutoring.</span></h1>
            </div>
            <div className="col-md-6">
              <p class="sub">We are here to get the grades you need</p>
              <div className="row mt-3" >
                <div className="col-md-5">
                  <button className="btn yellow-button tutor"><b>Get matched with your tutor</b></button>
                </div>
                <div className="col-md-3">
                  <a href="#advisor" className="advisor">Talk with an advisor</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="image-section pb-0 mb-0">
        <img src="banner-image 1.png" alt=" studying" class="student-image"/>
      </section>

      <section className="gray-section">
        <div className="gray">
          <div className="gray-content">
            <People className="icons"/>
            <p className="gray-underline"></p>
            <p className="rating"><b>4.8 / 5</b></p>
            <p>on Trustpilot</p>
          </div>
          <div className="gray-content">
            <Book className="icons"/>
            <p className="gray-underline"></p>
            <p className="rating"><b>+10,000</b></p>
            <p>students helped</p>
          </div>
          <div className="gray-content">
            <Clock className="icons"/>
            <p className="gray-underline"></p>
            <p className="rating"><b>50,000</b></p>
            <p>hours taught</p>
          </div>
        </div>
      </section>
  
    
      <div className="container container-top">
        <section className="text-center my-5">
          <h3>Your success is our success.</h3>
          <h3>See why we are trusted <span className="yellow-underline">by +500 schools</span></h3>
          <div className="row justify-content-center">
            <div className="col-8 nomargin">
              <p>Due to the current global situation, it is more difficult than ever to keep up with schools.</p>
              <p>Studying from home is challenging for everyone and the exams in 2021 will not.</p>
            </div>
          </div>
        </section>

        <div className="container-section1">
          <section className="row text-center my-5">
            <div className="col-md-4 mb-4">
              <Award className="icon"/>
              <h5 className="t-font"><b>Top 1% Tutors</b></h5>
              <p className="d-text">Lorem ipsum dolor sit amet, with an online private tutor, staying on top of the material.</p>
            </div>
            <div className="col-md-4 mb-4">
              <People className="icon"/>
              <h5 className="t-font"><b>Best tutor matching</b></h5>
              <p className="d-text">Studying from home is challenging for everyone and the exams lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4 mb-4">
              <ChatDots className="icon"/>
              <h5 className="t-font"><b>Personalised support</b></h5>
              <p className="d-text">Lorem ipsum dolor sit amet, with an online private tutor, staying on top of the material.</p>
            </div>
            <div className="col-md-4 mb-4">
              <Gear className="icon"/>
              <h5 className="t-font"><b>Proven methodology</b></h5>
              <p className="d-text">Studying from home is challenging for everyone and the exams lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4 mb-4">
              <Globe className="icon"/>
              <h5 className="t-font"><b>Real life experience</b></h5>
              <p className="d-text">Lorem ipsum dolor sit amet, with an online private tutor, staying on top of the material.</p>
            </div>
            <div className="col-md-4 mb-4">
              <Building className="icon"/>
              <h5 className="t-font"><b>University relationships</b></h5>
              <p className="d-text">Lorem ipsum dolor sit amet, with an online private tutor, staying on top of the material.</p>
            </div>
          </section>
        </div>

        <div className="container-bottom">
          <section className="text-center my-5">
            <h2>It's easy to get started</h2>
            <div className="row justify-content-center">
              <div className="col-8">
                <p>We'll put some happy little leaves here and there. In nature, dead trees are just as normal as live trees. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.</p>
              </div>
            </div>
          </section>

          <div className="container-card">
            <section className="row my-5">
              <div className="col-md-4 mb-4">
                <div className="card card-size">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-Ipvqerjb43QQv_9ArpCxMDBC6DN53aXyV1_uv3T0PtR_wyy" alt="Book reading" className="image"/>
                  <div className="card-body">
                    <h5 className="card-title t-font"><b>Book a package that suits your needs!</b></h5>
                    <p className="card-text small-font">Live video so you and your tutor can easily discuss any topics proin.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card card-size">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaShY5EH9CwOFSNmeII3V-Xfi82CBLg-BiQo9qh30-nTf6Iyse" alt="search" className="image"/>
                  <div className="card-body">
                    <h5 className="card-title t-font"><b>We will choose a tutor that suits you perfectly</b></h5>
                    <p className="card-text small-font">Lorem ipsum dolor sit amet, with private tutor, staying on top of the material.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card card-size">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mQbTnFr9eXd_5XuqTZit2W5H8JWijU_6gp--5fJ1nlI45FGa" alt="video call" className=" image"/>
                  <div className="card-body">
                    <h5 className="card-title t-font"><b>Within hours you will be introduced to your tutor!</b></h5>
                    <p className="card-text small-font">Live video so you and your tutor can easily discuss any topics proin.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center my-4">
            <button className="btn yellow-button"><b>Book your online tutoring</b></button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
