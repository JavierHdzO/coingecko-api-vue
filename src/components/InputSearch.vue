<template>
	<div class="content container">
		<div class="search" :class="{ active: active }">
			<input
				class="input"
				v-model="filter"
				:input="$emit('FilterValue', filter)"
				ref="srch"
				type="text"
				placeholder="Search..."
			/>
			<button class="btn" @click="isSearch">
				<i class="fas fa-search"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: false,
				filter: "",
			};
		},
		methods: {
			isSearch() {
				this.active = !this.active
				this.$refs.srch.focus()
			},
		},
	};
</script>

<style scoped>
	button {
		color: white;
	}

	.content {
		align-items: center;
		align-content: center;
		display: flex;
		height: 70px;
		justify-content: end;
		margin-right: 50px;
	}
	.search {
		position: relative;
		height: 50px;
		margin-left: 15px;
	}

	.search .input {
		background-color: #444444;
		border: 0;
		border-radius: 15px;
		color: #fff;
		height: 50px;
		padding: 5px;
		width: 50px;
		transition: width 0.3s ease;
	}

	.btn {
		background-color: #444444;
		border: 0;
		border-radius: 15px;
		cursor: pointer;
		font-size: 24px;
		height: 50px;
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		transition: transform 0.3s ease;
	}

	.btn:focus,
	input:focus {
		outline: none;
	}

	.search.active .input {
		width: 200px;
	}

	.search.active .btn {
		transform: translateX(198px);
	}
</style>
