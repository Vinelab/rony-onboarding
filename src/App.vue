<template>
  <div id="app" class="mdl-container container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1400px;
}
body{
  display: flex;
  justify-content: center;
}

</style>
