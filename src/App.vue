<template>
  <!-- 头部组件 -->
  <Herder/>
  <router-view></router-view>
</template>

<script>
import Herder from './components/Header/Header.vue'
export default {
  components:{
    Herder,
  }
}
</script>

<style>

</style>