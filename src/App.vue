<script>
export default {
  name: 'App',
}
</script>   

<template>
  <main class="main-cards-page">
    <router-view />
  </main>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

*{
  box-sizing: border-box;
}

#app{
  width: 100%;
}

.main-cards-page {
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
  height: 100%;
}

main {
  width: 100%;
  height: 100%;
}
</style>