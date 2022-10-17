import React from "react";
import Lottie from "react-lottie";
const GreetingLottie = ({ animationPath,width,height }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
		width: width,
		height: height
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} 
			
			/>
		</div>
	);
};

export default GreetingLottie;
