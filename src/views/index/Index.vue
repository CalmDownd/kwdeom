<template>
    <!-- 导航 -->
    <div class="titleNav">
        <div class="mianNav">
            <ul>
                <li v-for="item in nav" :key="item">
                    <router-link :to="item.path">{{item.classify}}</router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- 缓存路由 -->
    <router-view v-slot="{Component}">
         <keep-alive>
            <component :is="Component"></component>
         </keep-alive>
    </router-view>
    <!-- <router-view></router-view> -->
</template>

<script>
export default {
    data() {
        return {
            nav:[
                {
                    path:'index',
                    classify:'推荐'
                },
                {
                    path:'/sort',
                    classify:'排行榜'
                },
                {
                    path:'/songer',
                    classify:'歌手'
                },
                {
                    path:'/d',
                    classify:'歌单'
                },
                {
                    path:'/m',
                    classify:'mv'
                },
            ]
        }
    },
}
</script>

<style lang="less" scoped>
    .router-link-active{
        border-bottom: 5px solid #FFE443;
    }
.titleNav {
    width: 100%;
    .mianNav {
        display: flex;
        align-items: center;
        width: 1240px;
        height: 50px;
        margin: 0 auto;

        ul {
            margin-left: 225px;
            display: flex;
            align-items: center;
            height: 50px;
            li {
                margin: 0 20px;
                cursor: pointer;
                font-size: 18px;
            }
        }
    }
}
</style>