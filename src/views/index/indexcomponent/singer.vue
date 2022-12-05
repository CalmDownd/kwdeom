<template>
    <div class="songer">
        <div class="top">
            <h1>歌手推荐</h1>
            <ul>
                <li v-for="item in son" :key="item"
                    :style="{ borderBottom: key == item.type ? '5px solid #FFE443' : '' }"
                    @click="key = item.type, singerObj.category = item.id">{{ item.type }}</li>
                <li @click="$router.push('/songer')">更多</li>
            </ul>
        </div>
        <div class="songer_s">
            <ul>
                <li v-for="item in soner" :key="item">
                    <div class="img">
                        <img :src="item.pic" alt="" />
                    </div>
                    <p>{{ item.name }}</p>
                    <span>{{ item.musicNum }}首歌曲</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            key: '华语',
            son: [
                {
                    type:'华语',
                    id:11
                },
                {
                    type:'欧美',
                    id:13
                },
                {
                    type:'日韩',
                    id:12
                },
                {
                    type:'组合',
                    id:16
                },
            ],
            soner: [],
            singerObj: {
                category: 11, //分类 0为分类
                prefix: '',  //首字 空为热门
                pn: 1,  //分页
                rn: 6  // 每页多少个
            }
        };
    },
    watch: {
        singerObj: {
            deep: 'true',
            handler() {
                this.axiaoGetSonger()
            }
        }
    },
    created() {
        this.axiaoGetSonger()
    },
    methods: {
        async axiaoGetSonger() {
            let { data } = await axios.get('http://101.43.173.17:9090/api/www/artist/artistInfo',
                { params: this.singerObj })
            this.soner = data.data.artistList
        }
    }

}
</script>

<style lang="less" scoped >
.songer {
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
        }
    }

    .songer_s {
        margin-bottom: 100px;
        height: 180px;
        width: 1240px;

        ul {
            display: flex;
            justify-content: space-around;

            li {
                padding: 10px;
                height: 150px;
                width: 150px;
                text-align: center;

                .img {
                    height: 150px;
                    width: 150px;
                    overflow: hidden;
                    border-radius: 50%;
                    margin-bottom: 20px;

                    img {
                        width: 100%;
                    }
                }

            }
        }
    }
}
</style>