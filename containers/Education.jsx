import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";

const Education = () => {
	return educationInfo && (
		<section className="section pb-75 section bgcolor">
		<div className="shape shape-style-1 shape-primary ">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
			<Container>
				<div className="d-flex px-3">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-hat-3 text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Education</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{educationInfo.map((info) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.schoolName}
							>
								<EducationCard education={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			
		</section>
	);
};

export default Education;
