

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	},

	env:{
		REACT_APP_SERVICE_ID : process.env.REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID : process.env.REACT_APP_TEMPLATE_ID,
		REACT_APP_PUBLIC_KEY : process.env.REACT_APP_PUBLIC_KEY,
	},

};
