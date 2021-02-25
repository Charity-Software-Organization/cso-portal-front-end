<template>
  <div id="nav">
    <h1>Footer</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <span>|</span>
    <NuxtLink to="/about">About</NuxtLink>
    <span>|</span>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
