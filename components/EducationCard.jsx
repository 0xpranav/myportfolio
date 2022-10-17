import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
	return (
		<Fade left duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
						<div  className="d-flex justify-content-start">
						<div className="pr-3">
						<img
								src ={education.picSrc}
								style={{ width: "100px" }}
								alt={education.schoolName}
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</div>
						<div>
						<h5 className="text-info">
								{education.schoolName}
							</h5>
								<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
						</div>

						</div>
							<p className="description mt-3">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EducationCard;
