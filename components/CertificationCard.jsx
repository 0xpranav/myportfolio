import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const CertificationCard = ({ certificate }) => {
	return (
		<Fade left duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
						<div  className="d-flex justify-content-start">
						<div className="pr-3">
						<img
								src ={certificate.picSrc}
								style={{ width: "100px" }}
								alt={certificate.provider}
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</div>
						<div>
						<h5 className="text-info">
								{certificate.courseName}
							</h5>
								<h6>{certificate.provider}</h6>
							<Badge color="info" className="mr-1">
								{certificate.issueDate}
							</Badge>
							
							<Badge color="primary" className="mr-1">
									<a href={certificate.link} target="_blank" rel='noreferrer'>Show Credential  </a>
									<i className="fa fa-external-link" aria-hidden="true"></i>
								</Badge>
							</div>
						</div>
						
						<div></div>
							
							<p className="description mt-3">{certificate.desc}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default CertificationCard;
