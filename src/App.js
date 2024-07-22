import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Award, People, ChatDots, Gear, Globe, Building } from 'react-bootstrap-icons';
import './App.css';

function App() {
  return (
    <div className="container container-top">
      <div className="container">
        <section className="text-center my-5">
          <h3>Your success is our success.</h3>
          <h3>See why we are trusted <span className="yellow-underline">by +500 schools</span></h3>

          <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 nomargin">
                    <p>Due to the current global situation, it is more difficult than ever to keep up with schools.</p>
                    <p>Studying from home is challenging for everyone and the exams in 2021 will not.</p>
                </div>
            </div>
          </div>
        </section>
    
        <div className="container container-section1">
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
      </div>

    
      <div className="container container-bottom">
        <section className="text-center my-5">
          <h2>It's easy to get started</h2>

          <div className="container pt-10px">
            <div className="row justify-content-center">
                <div className="col-8">
                  <p>We'll put some happy little leaves here and there. In nature, dead trees are just as normal as live trees. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.</p>
                </div>
            </div>
          </div>
        </section>

        <div className="container container-card">
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
          <button className="btn yellow-button "><b>Book your online tutoring</b></button>
        </div>
      </div>
    </div>
  );
}

export default App;
