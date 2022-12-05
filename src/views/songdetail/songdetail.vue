<template>
  <div class="songerlist"  v-loading.fullscreen.lock="loading" v-if="!p">
    <div class="left">
      <div class="imgs">
        <img :src="data.img300" alt="">
      </div>
      <div class="text">
        <h2>歌单介绍</h2>
        <span>{{ data.info }}</span>
      </div>
      <button>下载该歌单</button>
    </div>
    <div class="right">
      <div class="title">
        <h3>{{ data.name }}</h3>
        <div class="user">
          <div>
            <img :src="data.uPic" alt="">
          </div>
          <span>{{ data.userName }}</span>
        </div>
        <span>{{ data.tag }}</span>
        <div class="buttons">
          <button>播放全部</button>
          <button>添加</button>
          <button>收藏</button>
          <button>分享</button>
          <button>评论</button>
        </div>
      </div>
      <div class="center">
        <el-table :data="tableData" stripe style="width: 100%" align="center"
        @cell-mouse-enter="flag"
        @cell-mouse-leave="flags = false">
          <el-table-column label="序号 歌曲" v-slot="{ row, $index }" >
            <span :style="{ marginRight: '20px' }">{{ $index + 1 }}</span>{{ row.name }}
          </el-table-column>
          <el-table-column prop="artist" label="歌手" />
          <el-table-column label="时长" v-slot="{ row }">
            {{ row.songTimeMinutes }} <el-button :style="{ marginLeft: '10px' }" v-show="flags == row.name" @click="play(row.rid)">播放
            </el-button>
          </el-table-column>
        </el-table>
      </div>
        <audio controls="controls" autoplay height="100" :src="playMusic" type="audio/mp3"></audio>
    </div>
  </div>
  <el-empty v-if="p">
    <el-button type="primary">点击刷新</el-button>
  </el-empty>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: '',
      tableData: [],
      flags: false,
      playMusic:'',
      p:false,
      loading:true,//加载中
    };
  },
  // 该组件已被路由缓存所以需要使用acrivated代替created
  activated() {
    this.axiosGetSongDeail()
  },
  methods: {
    async axiosGetSongDeail() {
      this.loading = true
      let { data } = await axios.get(`http://101.43.173.17:9090/api/www/playlist/playListInfo?pid=${this.$route.query.id}&pn=1&rn=30`)
      this.data = data.data
      this.tableData = data.data.musicList
      this.loading = false
    },
    async play(rid){
      let {data} = await axios.get(`https://appi.kuwo.cn/api/wechat/v2/music/src/${rid}?format=mp3%7Caac`)
      this.playMusic = data.data.url
    },
    flag(x){
      this.flags = x.name
    }
  }
}
</script>

<style lang="less" scoped>
.songerlist {
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: 1240px;
  height: auto;

  .left {
    width: 220px;
    height: auto;

    .imgs {
      width: 100%;
      height: 220px;
      background: rgb(210, 210, 210);

      img {
        width: 100%;
      }
    }

    .text {
      margin: 20px 0px;

      h2 {
        margin-bottom: 20px;
      }
    }

    button {
      cursor: pointer;
      width: 220px;
      height: 40px;
      border: none;
      border-radius: 30px;
      background-color: #FFE443;
      font-size: 18px;
    }
  }

  .right {
    width: 800px;
    height: auto;

    .title {
      margin-top: 40px;

      h3 {
        margin-bottom: 20px;
        font-size: 30px;
      }

      .user {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        div {
          margin-right: 10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 100%;
          }
        }
      }
    }

    .buttons {
      display: flex;
      margin-top: 50px;

      button {
        margin-right: 20px;
        min-width: 70px;
        height: 40px;
        border-radius: 50px;
        border: none;
        padding: 5px 20px;
        background-color: #FFE443;
      }
    }

    .center {
      margin-top: 20px;
    }
    audio{
      position: fixed;
      bottom: 20px;
      width: 500px;
      z-index: 2;
    }

    :deep(.el-table__row) {
      height: 60px;
    }
  }
}
</style>