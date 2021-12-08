<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useRoute } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const route = useRoute();
let layoutName = route.meta.layout || 'Default';
const layout = defineAsyncComponent(() =>
	import(`../src/layouts/${layoutName}.vue`)
);
</script>

<template>
	<component :is="layout">
		<router-view />
	</component>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
