<template>
    <div class="songsort">
        <div class="top">
            <h1>排行榜</h1>
            <span @click="$router.push('/sort')">更多></span>
        </div>
        <div class="songlistBody">
            <div class="warp" v-for="item in songsort" :key="item">
                <div class="tops" @click="$router.push('/sort')">
                    <span>{{item.leader}}</span>
                    <i></i>
                    <img :src="item.musicList[0].albumpic" alt="">
                </div>
                <div class="center">
                    <ul>
                        <template v-for="x, index in item.musicList" :key="index">
                            <li v-if="index < 5">
                                <p >{{ x.name }}</p>
                                <span @click="$router.push('/songer')">{{ x.artist }}</span>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            songsort: [],
        };
    },
    created() {
        this.axioGetSongSort()
    },
    methods: {
        async axioGetSongSort() {
            let { data } = await axios.get('http://101.43.173.17:9090/api/www/bang/index/bangList')
            this.songsort = data.data
        }
    }
}
</script>

<style lang="less" scoped>
.songsort {
    width: 1240px;
    margin: 40px auto;

    .top {
        display: flex;

        span {
            cursor: pointer;
            margin-left: 20px;
            margin-top: 20px;
        }
    }

    .songlistBody {
        display: flex;
        justify-content: space-around;

        .warp {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.161);
            margin-top: 20px;
            width: 220px;
            height: auto;
            background-color: rgb(255, 255, 255);

            .tops {
                position: relative;
                height: 120px;
                width: 100%;
                overflow: hidden;
                cursor: pointer;
                span{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    font-size: 22px;
                    color: aliceblue;
                    z-index: 3;
                }
                i{
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,.3);
                    z-index: 2;
                }
                img {
                    width: 100%;
                    position: relative;
                    top: -80px;
                }
            }

            .center {
                ul {
                    padding: 20px;

                    li {
                        margin-bottom: 10px;
                        p {
                            cursor: pointer;
                            width: 100%;
                            text-overflow: -o-ellipsis-lastline;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            font-size: 20px;
                        }

                        span {
                            cursor: pointer;
                            font-weight: 200;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

}
</style>