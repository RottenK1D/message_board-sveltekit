<section>
	<form method="POST" action="?/create" class="flex flex-col md:min-w-[500px] min-w-[300px]">
		<input
			class="bg-[#fffffe] text-[#232946] focus:outline-none p-3 rounded-t-md"
			type="text"
			name="title"
			placeholder="Title"
		/>
		<textarea
			class=" bg-[#fffffe] text-[#232946] focus:outline-none border-y-2 p-3"
			types="text"
			cols="30"
			rows="10"
			name="text"
			placeholder="Tell some story"
		/>
		<input
			class="bg-[#fffffe] text-[#232946] focus:outline-none p-3 rounded-b-md"
			type="text"
			name="author"
			placeholder="Author"
		/>
		<div class="flex justify-center">
			<button
				class="text-[18px] text-[#232946] cursor-pointer bg-[#eebbc3] m-4 px-5 transition ease-in-out delay-250 hover:scale-110 focus:outline-none"
				>post</button
			>
		</div>
	</form>
</section>
