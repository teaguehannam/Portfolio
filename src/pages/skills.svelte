<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let time = 0.05;

	let Title1; 
	let Section1; 
	let Section2; 
	let Section3;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Section1, {duration: 0.5, opacity: 0, delay: 0.25})
		  .from(Section2, {duration: 0.5, opacity: 0})
		  .from(Section3, {duration: 0.5, opacity: 0})
		  
	});
</script>

<div class="Skills">

	<div class="Category Tech" bind:this={Section1}>

		<div class="Experienced">
			<div class="Subtitle">
				<h2>Experienced with</h2>
			</div>
			<div class="Box">
				<img src="/images/tech/svelte.png" alt="Svelte" />
				<p>Svelte</p>
			</div>
			<div class="Box">
				<img src="/images/tech/sass.png" alt="SASS" />
				<p>SASS</p>
			</div>
			<div class="Box Node">
				<img src="/images/tech/nodejs.png" alt="Node.js" />
				<p>Node.js</p>
			</div>
			<div class="Box">
				<img src="/images/tech/react.png" alt="React" />
				<p>React</p>
			</div>
			<div class="Box">
				<img src="/images/tech/python.png" alt="Python" />
				<p>Python</p>
			</div>
			<div class="Box">
				<img src="/images/tech/golang.png" alt="Go Lang" />
				<p>Go Lang</p>
			</div>
			<div class="Box Meh">
				<img src="/images/tech/csharp.png" alt="C#" />
				<p>C# for Unity</p>
			</div>
			<div class="Box">
				<img src="/images/tech/typeScript.png" alt="TypeScript" />
				<p>TypeScript</p>
			</div>
			<div class="Box">
				<img src="/images/tech/php.png" alt="PHP" />
				<p>LAMP stack</p>
			</div>
			<div class="Box">
				<img src="/images/tech/sqLite.png" alt="SqLite" />
				<p>SqLite</p>
			</div>
			<div class="Box">
				<img src="/images/tech/mongoDb.png" alt="MongoDb" />
				<p >MongoDB</p>
			</div>
			<div class="Box">
				<img src="/images/tech/postgres.png" alt="Postgres" />
				<p>Postgres</p>
			</div>
		</div>

	</div>
	

	<div class="Category Functionality" bind:this={Section2} >
		<div class="Title">
			<h3>Browser Functionality</h3>
		</div>
		<div class="Box">
			<img src="/images/functionality/cookies.png" alt="Cookies" />
			<p>Cookies</p>
		</div>
		<div class="Box">
			<img src="/images/functionality/jsonwebtoken.png" alt="JSON Web Token" />
			<p>Tokens</p>
		</div>
		<div class="Box">
			<img src="/images/functionality/localStorage.png" alt="Local Storage" />
			<p>Local Storage</p>
		</div>
		<div class="Box">
			<img src="/images/functionality/session.png" alt="Sessions" />
			<p>Sessions</p>
		</div>
	</div>
	
	<div class="Category Libraries" bind:this={Section3} >
		<div class="Title">
			<h3>Libraries</h3>
		</div>
		<div class="Box">
			<img src="/images/libraries/redux.png" alt="Redux" />
			<p>Redux</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/gsap.png" alt="GSAP" />
			<p>Greensock</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/express.png" alt="Express" />
			<p>Express</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/knex.png" alt="Knex" />
			<p>Knex.js</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/axios.png" alt="Axios" />
			<p>Axios</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/threejs.png" alt="Three.js" />
			<p>Three.js</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/rollup.png" alt="Rollup" />
			<p>Rollup</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/websocket.png" alt="Socket.io" />
			<p>and more...</p>
		</div>
	</div>

	<div class="Spacer"></div>

</div>

