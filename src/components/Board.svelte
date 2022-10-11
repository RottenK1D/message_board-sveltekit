<script>
	export let data;
	$: ({ board } = data);
</script>

<section>
	{#each board as message}
		<div
			class="md:min-w-[500px] min-w-[300px] bg-[#b8c1ec] text-[#232946] flex flex-col rounded-md mt-10 p-5"
		>
			<h1 class="text-[24px] pb-3 font-bold">{message.title}</h1>
			<p class="text-[18px] pb-3">{message.text}</p>
			<p class="text-[16px] border-t-[1px] pt-1">{message.author}</p>
		</div>
	{/each}
</section>
