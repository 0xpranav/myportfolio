import emoji from "react-easy-emoji";

export const greetings = {
	name: "Pranav Garg",
	title: "Hi, I'm Pranav",
	description:
		" A Problem Solver & Self taught Full Stack web3 developer based in India, creating a better web for everyone.",
	resumeLink:
		"https://drive.google.com/file/d/1P2NHCbB460ozCBgjiY3I0Ze2l-8n_f8z/view?usp=sharing",
};

export const openSource = {
	githubUserName: "0xpranav",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/pranav-garg-667992173/",
	github: "https://github.com/0xpranav",
	instagram: "https://www.instagram.com/prnv__oldsport/",
	facebook: "https://www.facebook.com/pranavgarg899",
	twitter: "https://twitter.com/0xprnv",
	email: "0xpranav@gmail.com"
};

export const skillsSection = {
	title: "🛡️ Arsenal 🛡️",
	subTitle:
		"Tech & Stack",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"➡️ Build attractive pages using React.js, Bootstrap, Argon."
				),
				emoji("➡️ Build reactive websites using Next.js & Express.js."),
				emoji(
					"➡️ Build RESTful APIs in Node.js, Spring."
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:bootstrap",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Spring-icon",
					fontAwesomeClassname: "logos:spring",
				},
			],
		},
		{
			title: "Cloud Infra & Database",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("➡️ Experience of working on open source projects on github."),
				emoji(
					"➡️ Hosting and maintaining websites on virtual machine instances along with integration of databases."
				),
				emoji(
					"➡️ Build Data integration applications IBM-MQ"
				),
				emoji(
					"➡️ Graphql API's for web3 application."
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "MongoDb",
					fontAwesomeClassname: "logos:mongodb-icon",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "Vercel",
					fontAwesomeClassname: "logos:vercel-icon",
				},
				{
					skillName: "Graphql",
					fontAwesomeClassname: "logos:graphql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "bi:git",
				},
				{
					skillName: "IBM-MQ",
					fontAwesomeClassname: "carbon:ibm-mq",
				},
				
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"➡️ Experience in developing Smart Contract using Solidity & Ethereum."
				),
				emoji(
					"➡️ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat & Alchemy."
				),
				emoji(
					"➡️ Experience of using Openzeppelin Smart Contract Standards & Chainlink VRF."
				),
				emoji(
					"➡️ Build DAO for crypto investment & monitoring."
				),
				emoji(
					"➡️ Build DeFi Dapps & games using ceramic network & polygon."
				),
				emoji(
					"➡️ Build NFT marketplace using ERC-721 standard."
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Ethersjs",
					fontAwesomeClassname: "logos:ethers",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
				{
					skillName: "Remix",
					fontAwesomeClassname: "logos:remix",
				},
				{
					skillName: "Hardhat",
					fontAwesomeClassname: "logos:hardhat-icon",
				},
				{
					skillName: "Chainlink",
					fontAwesomeClassname: "simple-icons:chainlink",
				},
				{
					skillName: "Truffle",
					fontAwesomeClassname: "logos:truffle-icon",
				},
				{
					skillName: "IPFS",
					fontAwesomeClassname: "simple-icons:ipfs",
				},
				{
					skillName: "Openzeppelin",
					fontAwesomeClassname: "simple-icons:openzeppelin",
				},
				
				
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		picSrc: "/img/icons/common/sgsits.png",
		schoolName: "SGSITS Indore",
		subHeader: "B.Tech 'EE'",
		duration: "2017 - 2021",
		desc: "work on developing a holistic personality for my future endeavors.",
		grade: "Grade A",
		descBullets: [
			"Study basics of electronics & microprocessing.",
			"Built advanced bidirectional charger EV's.",
			"Learn Web Development & DSA.",
		],
	},
];

export const certificationInfo = [
	{
		picSrc: "/img/icons/common/iit.png",
		courseName: "Blockchain and its Application",
		provider: "IIT Kharagpur",
		issueDate: "May 2022",
		desc: "Advanced theory & application of blockchain using Ethereum & Hyperledger",
		link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS44S1349066702158147",
		descBullets: [
			"Various consensus mechanism.",
			"Development in Ethereum & Hyperledger.",
			"Blockchain Security.",
		],
	},
	{
		picSrc: "/img/icons/common/learnweb3.png",
		courseName: "Web3 Developer",
		provider: "LearnWeb3 Dao",
		issueDate: "Aug 2022",
		desc: "Full Stack development in web3 using Ethereum, Polygon, Harhhat & Metamask",
		link: "https://opensea.io/assets/matic/0x1ed25648382c2e6da067313e5dacb4f138bc8b33/0/",
		descBullets: [
			"Created ERC-20 based Cryptotoken.",
			"Developed Decentralized Autonomous Organizations (DAOs) for investing in NFT.",
			"Created a Defi based game using Chainlink VRF.",
			"Learn to use 'Hardhat' framework."
		],
	},
	{
		picSrc: "/img/icons/common/cognitive.png",
		courseName: "Blockchain Essentials",
		provider: "Cognitive Class",
		issueDate: "May 2022",
		desc: "Fundamentals of Blockchain Technology and its use cases in Idustry",
		link: "https://courses.cognitiveclass.ai/certificates/f5e7fb9cb3d0438d9679754fee9b0689",
		descBullets: [
			"Learn What is Blockchain.",
			"Hyperledger Project",
			"History of cryptography & encryption.",
		],
	},
	{
		picSrc: "/img/icons/common/udemy.png",
		courseName: "Full Stack web developer",
		provider: "Udemy",
		issueDate: "May 2022",
		desc: "Full Stack development using Node.js, react, MongoDb, next.js & heroku",
		link: "https://ude.my/UC-7966a0b7-2adf-46f9-a52e-99ac516e38d9",
		descBullets: [
			"Created a simple blog website.",
			"Created a 'to-do' web application.",
			"developed a NFT marketplace using Internet Computer Protocol.",
		],
	},
	{
		picSrc: "/img/icons/common/cognizant.png",
		courseName: "Ethereum Developer",
		provider: "Cognizant",
		issueDate: "May 2022",
		desc: "Writing Smart-Contracts in Solidity and Blockchain security using openzeppelin & remix.",
		link: "https://ude.my/UC-7966a0b7-2adf-46f9-a52e-99ac516e38d9",
		descBullets: [
			"learn Sollidity.",
			"Smart-Contract security using 'Openzeppelin libraries'.",
			"Project-'Asset-Tokenization using using smart-contract' "
		]
	},
	{
		picSrc: "/img/icons/common/udemy.png",
		courseName: "Engilsh Grammer & Structure",
		provider: "Udemy",
		issueDate: "Sep 2021",
		desc: "Sentence composition & writing & Fluency in verbal communication.",
		link: "https://ude.my/UC-7966a0b7-2adf-46f9-a52e-99ac516e38d9",
		descBullets: [
			"Sentence synthesis using verbs, conjuctions & various 'parts of speech'.",
			"Fluency in verbal communication.",
		]
	},
	
];

export const experience = [
	{
		role: "Programmer",
		company: "Cognizant",
		companylogo: "/img/icons/common/cognizant.svg",
		date: "Oct 2021 – Present",
		desc: "Worked on IBM BAW, Websphere MQ, javascript & spring boot, working in a team on creating a web application for testing codes with node.js & react",
		descBullets: [
			"Working for 'Humana.Inc' for simplifying CRM system.",
			"Created a leave management system using IBM BAW.",
		]
		
	},
];

export const projects = [
	
	{
		name: "NFT Whitelist-Dapp",
		desc: "This app allow 10 early birds to recieve my NFT for free.",
		github: "https://github.com/0xpranav/Whitelist-Dapp",
		link: "http://whitelist-dapp-0xpranav.vercel.app/"
	},
	{
		name: "NFT Collection",
		desc: "My own NFT collection on testnet.",
		github: "https://github.com/0xpranav/NFT-Collection",
		link: "http://nft-collection-0xpranav.vercel.app/"
	},
	{
		name: "FIP Coin",
		desc: "Solo project created for 'Supernova hackathon' on ICP blockchain.",
		github: "https://github.com/0xpranav/FIP-Coin",
	},
	{
		name: "Crypto ERC-20 Token",
		desc: "Crypto token created and 'Initial Coin  Offering' for our NFT holders.",
		github: "https://github.com/0xpranav/Initial_Coin_Offering",
		link: "http://initial-coin-offering-jade-one.vercel.app/"
	},
	{
		name: "DAO",
		desc: "NFT market investment DAO(decentralized autonomous organization).",
		github: "https://github.com/0xpranav/Crypto-DAO",
		link: "http://crypto-dao-one.vercel.app/"
	},
	{
		name: "Todo List",
		desc: "copy of 'Google Keep' on ICP blockchain.",
		github: "https://github.com/0xpranav/todolist",
	},
];

export const feedbacks = [
	{
		name: "Mithun HS",
		feedback:
			"Pranav is a great team player and have good knowledge of the technologies he is working upon,you can trust him with a project from start to finish.",
	},
	{
		name: "Hardik singh",
		feedback:
			"Pranav is a good asset specially working on web3 development, he has good understanding the merits & ptifalls of his field.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Pranav Garg",
	description:
		"Full Stack Web3 Developer",
	author: "Pranav Garg",
	image: "/img/icons/common/pranavpic.jpg",
	url: "",
	keywords: [
		"Pranav",
		"Pranav Garg",
		"@0xprnv",
		"0xpranav",
		"Portfolio",
		"Web Development",
		"Web3",
	],
}
