<template>
  <button class="top-Panel_btn"></button>
</template>

<script>
export default {
name: 'TopPanelBtn',
}
</script>

<style lang="scss" scoped>

.top-Panel_btn {
	position: relative;
	padding: 0;
	border-radius: 50%;
	border: 2px solid white;
	transition: filter 0.3s ease-in-out;
	margin-right: 8px;
	box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.35);
	cursor: pointer;

	&:hover, &:focus{
		filter: brightness(1.2);
	}

	&:focus{
		outline: none;
	}

	&:first-child {
		margin-right: 30px;
	}

	&::before {
		content: '';
		position: absolute;
		top: 10%;
		left: 20%;
		width: 35%;
		height: 35%;
		border-radius: 50%;
		background-color: color(white);
	}
}
</style>
