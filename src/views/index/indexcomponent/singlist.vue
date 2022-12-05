<template>
    <!-- 推荐歌单 -->
    <div class="songList">
        <div class="top">
            <h1>推荐歌单</h1>
            <ul>
                <li v-for="item in typeArr" :key="item" :class="{ active: flag == item.type }" @click="flag = item.type,rids=item.id,fullscreenLoading=true">{{ item.type }}
                </li>
                <li>更多</li>
            </ul>
        </div>
        <div class="conter" v-loading="fullscreenLoading">
            <el-row>
                <el-col v-for="(item, index) in gedan.slice(0, 5)" :key="item" :span="8" :offset="index > 0 ? 5 : 0">
                    <el-card :body-style="{ padding: '0px' }" shadow="never">
                        <img :src="item.img" class="image" @click="$router.push(`/songlist?id=${item.id}`)" />
                        <div class="box">
                            <h3 :style="{ margin: '10px' }" @click="$router.push('/songlist')">{{ item.name }}</h3>
                            <span :style="{ margin: '10px' }">{{ (item.listencnt > 10000 ? (item.listencnt /
                                    10000).toFixed(1) + '万' : item.listencnt)
                            }}</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            fullscreenLoading:true,
            typeArr: [
                {
                    type: '每日推荐',
                    id: 'rcm'
                },
                {
                    type: '翻唱',
                    id: 1848
                },
                {
                    type: '网络',
                    id: 621
                },
                {
                    type: '伤感',
                    id: 146
                },
                {
                    type: '欧美',
                    id: 35
                },
            ],
            rids:'rcm',
            gedan: [],
            flag: '每日推荐',
        };
    },
    created() {
        this.axiosGetSingList()
    },
    watch:{
        rids(){
            this.axiosGetSingList()
        }
    },
    methods: {
        async axiosGetSingList() {
            let { data } = await axios.get(`http://101.43.173.17:9090/api/www/rcm/index/playlist?id=${this.rids}&pn=1&rn=5`)
            this.gedan = data.data.list
            this.fullscreenLoading = false
        }
    }
}
</script>

<style lang="less" scoped>
.songList {
    margin: 0 auto;
    width: 1240px;

    .top {
        display: flex;
        margin-bottom: 40px;

        ul {
            margin-left: 50px;
            display: flex;

            li {
                cursor: pointer;
                font-size: 18px;
                margin: 20px 20px 0px;
            }

            .active {
                border-bottom: 5px solid #FFE443;
            }
        }
    }

}


.el-row {
    justify-content: space-around;

    .el-card {
        border: none;

        img {
            cursor: pointer;
            width: 100%;
        }

        .box {
            padding-top: 5px;
            height: auto;

            h3 {
                cursor: pointer;
            }
        }

        .el-card__body {
            width: 190px;
            padding: 0px;
        }
    }

    .el-col-8 {
        max-width: 230px;
    }

    .el-col-offset-5 {
        margin-left: 0px;
    }
}
</style>