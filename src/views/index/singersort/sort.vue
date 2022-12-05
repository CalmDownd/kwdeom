<template>
  <div class="sort">
    <div class="left">
      <div class="title">
        <span v-for=" item, index in typelist.slice(0, 3)" @click="sty = item.name, x = index, y = 0"
          :class="{ typeactive: sty == item.name }" :key="index">{{ item.name }}</span>
      </div>
      <div class="bang">
        <ul v-if="typelist.length">
          <li v-for="item, index in typelist[x].list.slice(0, 10)" :key="item.id" @click="y = index">
            <div class="bang_left">
              <img :src="item.pic" alt="">
            </div>
            <div class="bang_right">
              <h2>{{ item.name }}</h2>
              <span>{{ item.pub }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="rigth">
      <div class="title">
        <h1 v-if="typelist.length">{{ typelist[x].list[y].name }}</h1>
        <span>更新时间：{{tableData.pub}}</span>
      </div>
      <div class="buttons">
        <button>播放全部</button>
        <button>添加</button>
        <button>收藏</button>
        <button>分享</button>
      </div>
      <div class="center" v-loading="flag">
        <el-table :data="tableData.musicList" stripe style="width: 100%">
          <el-table-column label="序号" width="100px" v-slot="{ $index }">
            {{ $index + 1 }}
          </el-table-column>
          <el-table-column label="歌曲" v-slot="{ row }">
            <img style="height:80px;width:80px" :src="row.albumpic" alt="">
            {{ row.name }}
          </el-table-column>
          <el-table-column prop="artist" label="歌手" />
          <el-table-column prop="album" label="专辑" />
          <el-table-column prop="songTimeMinutes" label="时长" />
        </el-table>
      </div>
    </div>
  </div>
  <!-- <el-pagination background layout="prev, pager, next" :total="1000" /> -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [], //渲染的歌曲列表
      musicList: {
        bangId: 12,
        pn: 1,
        rn: 30
      },
      flag:true,
      typelist: '',
      sty: '官方',
      x: 0,//大榜
      y: 0,//小榜
    };
  },
  created() {
    this.axiosBang()
    this.axiosMusic()
  },
  methods: {
    // 获取排行榜列表
    async axiosBang() {
      let { data } = await axios.get('http://101.43.173.17:9090/api/www/bang/bang/bangMenu')
      this.typelist = data.data
      this.musicList.bangId = this.typelist[this.x].list[this.y].sourceid
    },
    // 获取歌曲列表
    async axiosMusic() {
      let { data } = await axios.get(`http://101.43.173.17:9090/api/www/bang/bang/musicList?`, {
        params: this.musicList
      })
      this.tableData = data.data
      this.flag = false
    }
  },
  watch: {
    musicList: {
      deep: 'true',
      handler() {
        this.flag = true
        this.axiosMusic()
      }
    },
    y() {
      console.log(this.y)
      this.musicList.bangId = this.typelist[this.x].list[this.y].sourceid
    },
    x() {
      this.musicList.bangId = this.typelist[this.x].list[this.y].sourceid
    }
  }
}
</script>

<style lang="less" scoped>
.sort {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 40px;
  width: 1240px;
  height: auto;

  .left {
    margin-right: 50px;
    margin-top: 50px;
    width: 300px;
    max-height: 1100px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);

    .title {
      margin-top: 10px;
      padding: 0px 5px;
      padding-bottom: 10px;
      border-bottom: 2px solid rgb(229, 229, 229);
      display: flex;
      justify-content: space-around;

      span {
        display: inline-block;
        font-size: 18px;
        cursor: pointer;
      }

      .typeactive {
        border-bottom: 2px solid #FFE443;
      }
    }

    .bang {
      margin-top: 5px;

      li {
        display: flex;
        align-items: center;
        padding: 0px 5px;
        height: 100px;
        width: 100%;
        cursor: pointer;

        .bang_left {
          margin-right: 10px;
          height: 80px;
          width: 80px;
          background-color: rgb(196, 196, 196);

          img {
            width: 100%;
          }
        }

        .bang_right {
          h2 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          span {
            font-size: 16px;
            color: #666;
          }
        }
      }
    }
  }

  .rigth {
    flex: 1;
    margin-top: 50px;

    .title {
      display: flex;
      flex-wrap: wrap;

      span {
        margin-top: 35px;
        margin-left: 20px;
      }

      h1 {
        font-size: 48px;
      }
    }

    :deep(.cell) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .buttons {
      display: flex;
      margin: 30px 0px;

      button {
        margin-right: 20px;
        min-width: 70px;
        height: 40px;
        border-radius: 50px;
        border: none;
        font-size: 20px;
        padding: 5px 20px;
        background-color: #FFE443;
      }
    }
  }
}
</style>