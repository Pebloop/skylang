<script lang="ts">
	import { onMount } from 'svelte';

	let inputText = '';
	let isRegistering = false;
	let character = [false, false, false, false, false, false];

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	function handleKeydown(event: KeyboardEvent) {
		if (isRegistering) {
			const key = event.key.toLowerCase();
		}
	}

	function startRegister() {
		isRegistering = true;
		character = [false, false, false, false, false, false];
	}

	function stopRegister() {
		isRegistering = false;
	}

	function toggleRegister() {
		isRegistering = !isRegistering;
		if (isRegistering) {
			startRegister();
		} else {
			stopRegister();
		}
	}
</script>

<div class="p-4">

	<div class="flex flex-row items-center justify-center mb-5">
		<button on:click={toggleRegister} class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
			{isRegistering ? 'Stop Recording' : 'Start Recording'}
		</button>
		<p class="font-sealang text-6xl border-2 w-16 h-16 text-center ml-5"></p>
	</div>

	<textarea
		placeholder=""
		class="border border-gray-300 rounded-lg p-2 w-full mb-4 h-64"
		on:click={stopRegister}
		bind:value={inputText}
	></textarea>
</div>

<style>
    textarea {
			font-family: sealang,serif;
  }

	.font-sealang {
		font-family: sealang, serif;
	}
</style>