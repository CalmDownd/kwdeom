<template>
  <!-- bannder -->
  <bannder/>
  <!-- 歌单 -->
  <singlist/>
  <!-- 排行榜 -->
  <singsort/>
  <!-- 歌手推荐 -->
  <singer/>
</template>

<script>
import bannder from './bannder.vue'
import singlist from './singlist.vue'
import singsort from './singsort.vue'
import singer from './singer.vue'
export default {
    components:{
        bannder,
        singlist,
        singsort,
        singer
    }
}
</script>

<style>

</style>