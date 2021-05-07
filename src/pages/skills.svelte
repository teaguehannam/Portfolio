<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let time = 0.05;

	let Title1; let Title2; 
	let Title3; let Title4;
	let i1; let i2; let i3; let i4;
	let i5; let i6; let i7; let i8;
	let i9; let i10; let i11; let i12;
	let i13; let i14; let i15; let i16;
	let i17; let i18; let i19; let i20;
	let i21; let i22; let i23; let i24;
	let p1; let p2; let p3; let p4;
	let p5; let p6; let p7; let p8;
	let p9; let p10; let p11; let p12;
	let p13; let p14; let p15; let p16;
	let p17; let p18; let p19; let p20;
	let p21; let p22; let p23; let p24;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Title1, {duration: 0.5, height:0, opacity: 0, delay: 0.5})
		  .from(i2, {duration: time + 0.2, opacity: 0, y: -15})
		  .from(p2, {duration: time + 0.2, opacity: 0, y: -15})
		  .from(i3, {duration: time + 0.2, opacity: 0, y: -15})
		  .from(p3, {duration: time + 0.2, opacity: 0, y: -15})
		  .from(i1, {duration: time + 0.2, opacity: 0, y: -15})
		  .from(p1, {duration: time + 0.2, opacity: 0, y: -15})
		  .from(Title2, {duration: time + 0.2, opacity: 0})
		  .from(i4, {duration: time, opacity: 0, x: -100})
		  .from(p4, {duration: time, opacity: 0})
		  .from(i5, {duration: time, opacity: 0, x: -100})
		  .from(p5, {duration: time, opacity: 0, x: -100})
		  .from(i6, {duration: time, opacity: 0, x: -100})
		  .from(p6, {duration: time, opacity: 0})
		  .from(i9, {duration: time, opacity: 0, x: 100})
		  .from(p9, {duration: time, opacity: 0, x: 100})
		  .from(i8, {duration: time, opacity: 0, x: 100})
		  .from(p8, {duration: time, opacity: 0, x: 100})
		  .from(i7, {duration: time, opacity: 0, x: 100})
		  .from(p7, {duration: time, opacity: 0})
		  .from(i10, {duration: time, opacity: 0, x: -100})
		  .from(p10, {duration: time, opacity: 0, x: -100})
		  .from(i11, {duration: time, opacity: 0, x: -100})
		  .from(p11, {duration: time, opacity: 0, x: -100})
		  .from(i12, {duration: time, opacity: 0, x: -100})
		  .from(p12, {duration: time, opacity: 0, x: -100})
		  .from(Title3, {duration: time + 0.5, opacity: 0})
		  .from(i13, {duration: time, opacity: 0})
		  .from(p13, {duration: time, opacity: 0})
		  .from(i14, {duration: time, opacity: 0})
		  .from(p14, {duration: time, opacity: 0})
		  .from(i15, {duration: time, opacity: 0})
		  .from(p15, {duration: time, opacity: 0})
		  .from(i16, {duration: time, opacity: 0})
		  .from(p16, {duration: time, opacity: 0})
		  .from(Title4, {duration: time, opacity: 0})
		  .from(i17, {duration: time, opacity: 0})
		  .from(p17, {duration: time, opacity: 0})
		  .from(i18, {duration: time, opacity: 0})
		  .from(p18, {duration: time, opacity: 0})
		  .from(i19, {duration: time, opacity: 0})
		  .from(p19, {duration: time, opacity: 0})
		  .from(i20, {duration: time, opacity: 0})
		  .from(p20, {duration: time, opacity: 0})
		  .from(i21, {duration: time, opacity: 0})
		  .from(p21, {duration: time, opacity: 0})
		  .from(i22, {duration: time, opacity: 0})
		  .from(p22, {duration: time, opacity: 0})
		  .from(i23, {duration: time, opacity: 0})
		  .from(p23, {duration: time, opacity: 0})
		  .from(i24, {duration: time, opacity: 0})
		  .from(p24, {duration: time, opacity: 0})
	});
</script>

<div class="Skills">

	<div class="Category Tech">

		<div class="Preference">
			<div class="Subtitle">
				<h2 bind:this={Title1}>Personal favorite stack</h2>
			</div>
			<div class="Icons">
				<div class="Box"  bind:this={i1}>
					<img src="/images/tech/svelte.png" alt="Svelte" />
					<p bind:this={p1}>Svelte</p>
				</div>
				<div class="Box"  bind:this={i2}>
					<img src="/images/tech/sass.png" alt="SASS" />
					<p bind:this={p2}>SASS</p>
				</div>
				<div class="Box Node"  bind:this={i3}>
					<img src="/images/tech/nodejs.png" alt="Node.js" />
					<p bind:this={p3}>Node.js</p>
				</div>
			</div>
		</div>

		<div class="Experienced">
			<div class="Subtitle">
				<p bind:this={Title2}>Also experienced with</p>
			</div>
			<div class="Box">
				<img src="/images/tech/react.png" alt="React" bind:this={i4} />
				<p bind:this={p4}>React</p>
			</div>
			<div class="Box">
				<img src="/images/tech/python.png" alt="Python" bind:this={i5} />
				<p bind:this={p5}>Python</p>
			</div>
			<div class="Box">
				<img src="/images/tech/golang.png" alt="Go Lang" bind:this={i6} />
				<p bind:this={p6}>Go Lang</p>
			</div>
			<div class="Box Meh">
				<img src="/images/tech/csharp.png" alt="C#"  bind:this={i7} />
				<p bind:this={p7}>C# for Unity</p>
			</div>
			<div class="Box">
				<img src="/images/tech/typeScript.png" alt="TypeScript"  bind:this={i8} />
				<p bind:this={p8}>TypeScript</p>
			</div>
			<div class="Box">
				<img src="/images/tech/php.png" alt="PHP"  bind:this={i9} />
				<p bind:this={p9}>LAMP stack</p>
			</div>
			<div class="Box">
				<img src="/images/tech/sqLite.png" alt="SqLite"  bind:this={i10} />
				<p bind:this={p10}>SqLite</p>
			</div>
			<div class="Box">
				<img src="/images/tech/mongoDb.png" alt="MongoDb"  bind:this={i11} />
				<p bind:this={p11}>MongoDB</p>
			</div>
			<div class="Box">
				<img src="/images/tech/postgres.png" alt="Postgres"  bind:this={i12} />
				<p bind:this={p12}>Postgres</p>
			</div>
		</div>

	</div>
	

	<div class="Category Functionality">
		<div class="Title">
			<h3 bind:this={Title3}>Browser Functionality</h3>
		</div>
		<div class="Box">
			<img src="/images/functionality/cookies.png" alt="Cookies" bind:this={i13} />
			<p bind:this={p13}>Cookies</p>
		</div>
		<div class="Box">
			<img src="/images/functionality/jsonwebtoken.png" alt="JSON Web Token" bind:this={i14} />
			<p bind:this={p14}>Tokens</p>
		</div>
		<div class="Box">
			<img src="/images/functionality/localStorage.png" alt="Local Storage" bind:this={i15} />
			<p bind:this={p15}>Local Storage</p>
		</div>
		<div class="Box">
			<img src="/images/functionality/session.png" alt="Sessions" bind:this={i16} />
			<p bind:this={p16}>Sessions</p>
		</div>
	</div>
	
	<div class="Category Libraries">
		<div class="Title">
			<h3 bind:this={Title4}>Libraries</h3>
		</div>
		<div class="Box">
			<img src="/images/libraries/redux.png" alt="Redux" bind:this={i17} />
			<p bind:this={p17}>Redux</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/gsap.png" alt="GSAP" bind:this={i18} />
			<p bind:this={p18}>Greensock</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/express.png" alt="Express" bind:this={i19} />
			<p bind:this={p19}>Express</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/knex.png" alt="Knex" bind:this={i20} />
			<p bind:this={p20}>Knex.js</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/axios.png" alt="Axios" bind:this={i21} />
			<p bind:this={p21}>Axios</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/threejs.png" alt="Three.js" bind:this={i22} />
			<p bind:this={p22}>Three.js</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/rollup.png" alt="Rollup" bind:this={i23} />
			<p bind:this={p23}>Rollup</p>
		</div>
		<div class="Box">
			<img src="/images/libraries/websocket.png" alt="Socket.io" bind:this={i24} />
			<p bind:this={p24}>Socket.io</p>
		</div>
	</div>

	<div class="Spacer"></div>

</div>

