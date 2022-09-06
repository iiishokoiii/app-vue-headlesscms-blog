<template>
  <div class="container">
    <header>
      <h1>
        <router-link :to="`/`">
         My Blog
        </router-link>
      </h1>
    </header>
    <SideNav />
    <main>
      <router-view />
    </main>
    <footer>
      <small> copyright my name </small>
    </footer>
  </div>
</template>

<script setup>
import SideNav from '/src/components/SideNav';
</script>
<style>
.container {
  width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
}
header,
footer {
  grid-column: 1 / 3;
  text-align: center;
}
h1 {
  text-decoration: none;
}
</style>
