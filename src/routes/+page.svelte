<script>
	import Board from '../components/Board.svelte';
	import Post from '../components/Post.svelte';
	export let data;
	export let form;
	let show;
	function toggle() {
		show = !show;
	}
</script>

<svelte:head>
	<title>Board</title>
	<meta name="description" content="RESTful SvelteKit message board" />
</svelte:head>

<body class="bg-[#232946] w-full">
	<nav class="text-center">
		<h1 class="px-5 py-5 text-[32px] text-[#fffffe] font-bold uppercase ">Message Board</h1>
	</nav>

	<div class="flex flex-col justify-center items-center">
		<button
			class="text-center text-[18px] text-[#232946] cursor-pointer bg-[#eebbc3] m-4 px-5 transition ease-in-out delay-250 hover:scale-110 focus:outline-none"
			on:click={toggle}
		>
			leave a comment
		</button>
		<div>
			{#if show}
				<Post {form} />
			{/if}
		</div>
	</div>
	<div class="flex justify-center items-center">
		<div>
			<Board {data} />
		</div>
	</div>
</body>
