<template>
    <h1>Vue World {{count}}</h1>
</template>
<script setup lang="ts">import { ref } from 'vue';

let count = ref(999);
</script>