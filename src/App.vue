<template>
  <div id="app">
    <Header />
    <ButtonItem />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import ButtonItem from "./components/Button";
export default {
  name: "App",
  components: {
    Header,
    ButtonItem,
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
