export const projectDetails = {
	'chrono-core': {
		repoLink: 'https://github.com/ubemacapuno/chrono-core',
		demoLink: '',
		description: `<p>As a PC building enthusiast and gamer, I developed ChronoCore to keep tabs on my computer's performance mid-game. It uses Python to track GPU, CPU, and RAM usage on my Windows gaming desktop, and sends this data through a TypeScript WebSocket server to a React interface displayed on my Raspberry Pi touchscreen.</p> 
			
		<p>This setup lets me see my desktop's resources in real-time, ensuring optimal gaming performance. It's a fun blend of my hobbies, making gaming even more enjoyable.</p>`,
		image: '',
		title: 'Chrono Core'
	},
	'svelte-step-bro': {
		repoLink: 'https://github.com/ubemacapuno/svelte-step-bro',
		demoLink: 'https://stepbro.vercel.app/',
		description:
			'<p>Svelte STEP Bro offers a free CAD viewing solution, enabling direct browser rendering of STEP files without costly licenses. Leveraging WASM via <a href="https://github.com/kovacsv/occt-import-js" target="_blank" rel="noreferrer noopener">occt-import-js</a> for STEP to JSON conversion, it ensures Three.js compatibility, making it a unique tool for engineers and machinists. This SvelteKit application simplifies viewing and sharing 3D models, merging modern web tech with SvelteKit to make complex 3D CAD data easily accessible online.</p>',
		image: '/images/svelte-step.jpg',
		title: 'Svelte STEP Bro',
		hasImageBorder: true
	},
	'rep-log': {
		repoLink: 'https://github.com/ubemacapuno/rep-log',
		demoLink: 'https://rep-log.vercel.app/',
		description: `<p>RepLog is an intuitive workout tracker, offering a simple UI to log and monitor exercises across various categories like Push, Pull, Lift, Cardio, and Abs.</p>
			
		<p>Designed for convenience, RepLog securely stores data locally in your browser and also supports importing and exporting workouts as JSON into local storage, enhancing data management and accessibility. Perfect for enhancing your fitness regime hassle-free!</p>`,
		image: '/images/rep-log.png',
		title: 'RepLog'
	},
	'foodie-blog-sveltekit': {
		repoLink: 'https://github.com/ubemacapuno/foodie-blog-sveltekit',
		demoLink: 'https://foodie-blog-sveltekit.vercel.app/',
		description: `
		<p>FoodieBlog is a streamlined SvelteKit app for food enthusiasts, offering a simple way to save and rate recipes free from ad clutter. Move beyond tedious searches on traditional recipe sites; this app provides a clear space to log both homemade and restaurant dishes.</p> 
		
		<p>It features MongoDB for storage, SvelteKit form actions for easy recipe management, Authjs for secure login, and an OpenAI-powered AI chatbot for an interactive experience. Ideal for those seeking a hassle-free cooking and dining record-keeping platform.</p>`,
		image: '/images/foodie-blog.jpg',
		title: 'FoodieBlog'
	},
	'capa-tracker-sveltekit': {
		repoLink: 'https://github.com/ubemacapuno/capa-tracker-sveltekit',
		demoLink: 'https://capa-tracker.netlify.app/',
		description: `<p>
		Before transitioning to software, I worked in pharmaceutical and medical device industries, focusing on CAPA (Corrective And Preventive Action) for compliance. Leveraging this background, I created CAPA Tracker, a SvelteKit app for efficient CAPA record management—enabling easy creation, updates, and deletions to reduce process gaps. </p>
		
		<p>Built with SvelteKit, DaisyUI, and MongoDB, and featuring secure Auth.js authentication plus an OpenAI-powered chatbot, CAPA Tracker enhances regulatory adherence and streamlines workflows in key industries.</p>
    `,
		image: '/images/capa-tracker.jpg',
		title: 'CAPA Tracker'
	},
	'pokemon-pi-dashboard': {
		repoLink: 'https://github.com/ubemacapuno/pokemon-pi-dashboard?tab=readme-ov-file',
		demoLink: 'https://pi-dash.vercel.app/',
		description: `<p>The Pokémon Pi Dashboard is a fun and interactive way to check the weather. It is a weather app incorporating Pokémon sprites to represent the current weather conditions. </p>
		
		<p>The app is built with React + Vite, hosted on Vercel, and uses the OpenWeatherMap API to fetch weather data. The app is designed to be displayed on my personal Raspberry Pi with a 7" touchscreen, but it is responsive and can also be viewed on any device with a browser.</p>`,
		image: '/images/pokemon-pi-dashboard.jpg',
		title: 'Pokémon Pi Dashboard'
	}
}
