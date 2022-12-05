<template>
    <!-- 轮播图 -->
    <div class="bannder">
        <div class="block text-center" m="t-4">
            <el-carousel trigger="click" height="301px">
                <el-carousel-item v-for="item in bannder" :key="item">
                    <img :src="item.pic" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            bannder: [],
        };
    },
    created() {
        this.axiosGteBanner()
    },
    methods: {
        async axiosGteBanner() {
            let { data } = await axios.get('http://101.43.173.17:9090/api/www/banner/index/bannerList')
            this.bannder = data.data
        }
    }
}
</script>

<style lang="less" scoped>
.bannder {
    margin: 0 auto;
    margin-bottom: 80px;
    width: 1240px;
    height: 301px;

    .text-center {
        img {
            width: 100%;
        }
    }
}
</style>