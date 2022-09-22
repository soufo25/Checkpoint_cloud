import React from 'react';
import "./map.css";



function IntroPage(){
    return(
        <div>
        <div className = 'container'>
       <section class="bg-gray text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div>
                <h1>Become a <span class="text-warning">Web Developer</span></h1>
                <p class="lead my-4">We focus on teaching our students the fundamentals  
                    of the lastest and greatest technologies to prepare them for their
                     first dev role.</p>
                     <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Start The Enrollment</button>
            </div>
            <img class="img-fluid w-50" src="images/frontend-4342425_1280.png" alt=""/>
        </div>
       </section>
        </div>

        <div className = "container">
      <h1>Contacts Us</h1>
      <ul>
        <li>
          Email: Soufomedia@yahoo.com
        </li>
        <li>
          Phone Number : 0155 042 4018
        </li>
      <il className = 'map-h2'> Here is our Office:
       </il>
       <iframe className ='google-map' src="https://maps.google.com/maps?q=chicken%20maraei%20galal%20Kafr%20Nassar%20%20al%20-haram&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
      </ul>
      </div>
      </div>
    )
};


export default IntroPage;