import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
	Row,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	return (
		
			<Fade left duration={2000}>
			<CardBody className="">
					<Row className="d-flex justify-content-between align-items-center">
					<Col lg="3" className="pr-5">
					<img
							src={data.companylogo}
							style={{
								objectFit: "cover",
								left: 0,
								right: 0,
								top: "7rem",
								marginLeft: "auto",
								marginRight: "auto",
								width: "6rem",
								height: "6rem",
								borderRadius: "50%",
							}}
							className="shadow mb-3"
							alt={data.companylogo}
						/>
						<CardTitle tag="h4" className="mb-2 paratext">
							{data.company}
						</CardTitle>
						
					</Col>
					<Col lg="3" className="pr-5">
					<CardSubtitle tag="h5" className="mb-2 paratext">
							{data.role}
						</CardSubtitle>
						<CardSubtitle>{data.date}</CardSubtitle>
					</Col>
					<Col lg="6">
					<Card
					style={{ flex: 1 }}
					className="mb-3 border-0 text-center rounded"
				>
					<CardText
							tag="div"
							className="description my-3 text-left"
						>
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
				</Card>
					</Col>
					</Row>
				</CardBody>
			</Fade>
	);
};

export default ExperienceCard;
