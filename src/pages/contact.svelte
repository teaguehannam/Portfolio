<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { message } from "../store/message.js";

	let messageTypes = ['casual', 'formal'];

	function handleSubmit() {
		if (typeof message.from==="undefined" || typeof message.message==="undefined" || message.from==="" || message.message==="") {
			alert("Fill out all inputs 😊");
		} else {
			// alert(`${message.type} type\nfrom ${message.from}\n${message.message}`);
			alert("Message sent!");
			message.type = "casual";
			message.from = "";
			message.message = "";

		}
	}

	let ContactC;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(ContactC, {duration: 0.26, opacity: 0, y: -355, x: 700, scaleX:0, scaleY:0,  ease: "sine.out"});
	});

</script>

<form class="Contact" on:submit|preventDefault={handleSubmit} bind:this={ContactC}>

	<div class="Title">
		<h4>Send </h4>
		<select class="MessageType" bind:value={message.type}>
			<option value={messageTypes[0]}>
				{messageTypes[0]}
			</option>
			<option value={messageTypes[1]}>
				{messageTypes[1]}
			</option>
		</select>
		<h4> message</h4>
	</div>
		
	<div class="Sender">
		<input type="Sender" placeholder="Your name or email" bind:value={message.from}/>
	</div>		

	<div class="Message">
		<p>Message:</p>
		<textarea type="text" 
			class="MessageInput" 
			bind:value={message.message}
			maxlength="4096" />
	</div>

	<div class="SubmitButton">
		<button class="ContactButton" type="submit">Send</button>
	</div>

</form>


