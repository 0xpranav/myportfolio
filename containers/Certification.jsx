import React from "react";
import CerificationCard from "../components/CertificationCard";
import { certificationInfo} from "../portfolio";
import { Container, Row, Col } from "reactstrap";

const Certification = () => {
	return certificationInfo && (
		<section className="section pb-75 section-shaped bgcolor">
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
							<i className="ni ni-paper-diploma text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Certification</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{certificationInfo.map((info) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.courseName}
							>
								<CerificationCard certificate={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			
		</section>
	);
};

export default Certification;
