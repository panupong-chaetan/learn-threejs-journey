<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@layer utilities {
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
}

html {
  font-family: 'Inter', sans-serif;
  /* font-size: 62.5%; */
  scroll-behavior: smooth;
}

body {
  /* font-size: 1.6rem; */
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

ul li,
button,
input,
textarea,
select,
a,
option {
  @apply focus:!outline-none focus-visible:!outline-none !outline-none;
}
</style>
