<template>
  <div id="app" v-loading.fullscreen.lock="$store.state.loading">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
