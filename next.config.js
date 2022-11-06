
module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	},

	env:{
		NEXT_PUBLIC_SERVICE_ID : process.env.NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID : process.env.NEXT_PUBLIC_TEMPLATE_ID,
		NEXT_PUBLIC_PUBLIC_KEY : process.env.NEXT_PUBLIC_PUBLIC_KEY,
	},

};
