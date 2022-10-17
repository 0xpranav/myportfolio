import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: -25.344, lng: 131.031 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 4,
	  center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
	  position: uluru,
	  map: map,
	});
  }

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section bgcolor shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2 pb-3" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
							<div className="mt-1 mb-3 icon-shape bg-gradient-white shadow rounded text-info d-flex justify-content-center">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div>
							<div>

							</div>
							
						</Col> 
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white paratext">Let`s connect!</h2>
							<p className="lead text-white mt-3 ">
								Discuss a project or just a simple Hi, my inbox is open to all. 🙂
							</p>
        <section className="get-in-touch form-group">
		<Card className=" shadow mt-0">
   <form className="contact-form row">
      <div className="form-field col-lg-5  ">
         <input id="name" className="input-text js-input form-control mx-2 " Id="floatingName" type="text" required/>
		 <label className="label " For="floatingName">Name</label>
      </div>

      <div className="form-field col-lg-5  ">
         <input id="email" className="input-text js-input form-control mx-2 " Id="floatingEmail" type="email" required/>
		 <label className="label " For="floatingEmail">Email</label>
      </div>

      <div className="form-field col-lg-8 ">
	  <input id="subject" className="input-text js-input form-control mx-2 t" Id="floatingSubject" type="text" required/>
      <label className="label" For="floatingSubject">Subject</label>
      </div>

      <div className="form-field col-lg-8 ">
         <textarea id="message" className="input-text js-input form-control txtarea mx-2 " Id="floatingMsg" type="text" rows='10' required/>
		 <label className="label" For="floatingMsg">Message</label>
      </div>

      <div className="form-field col-lg-12 ml-3 d-flex justify-content-left">
         <input className="submit-btn btn" type="submit" value="Submit"/>
      </div>
   </form>
   </Card>
</section>

							
							
						</Col>
					</Row>
				</div>
			</Container>
			<div className="d-flex justify-content-center">
							<SocialLinks />
							</div>
				          
			<p className="text-white mt-3 d-flex justify-content-center">&copy; Pranav Garg copyright {(new Date()).getUTCFullYear()}</p>
		</Card>
		
	);
};

export default GithubProfileCard;
