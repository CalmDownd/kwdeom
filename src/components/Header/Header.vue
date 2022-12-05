<template>
    <div class="warp">
        <div class="nav">
            <div class="logo">
                <router-link to="/">
                    <img src="./images/logo.7bf8751.png" alt="">
                </router-link>
            </div>
            <div class="nav_ul">
                <ul>
                    <li v-for="item in navList" :key="item">
                        <router-link :to="item.path">{{ item.navName }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="login">
                <span>登录</span>
                <b>/</b>
                <span>注册</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: '发现音乐',
            // '发现音乐', '', '', '', '', '', '更多'
            navList: [
                {
                    path: '/',
                    navName: '发现音乐'
                },
                {
                    path: '/down',
                    navName: '下载客户端'
                },
                {
                    path: '/music',
                    navName: '音乐现场'
                },
                {
                    path: '/vip',
                    navName: 'VIP会员'
                },
                {
                    path: '/ting',
                    navName: '酷我畅听'
                },
                {
                    path: '/er',
                    navName: '酷我耳机'
                },
            ]
        };
    },
}
</script>

<style lang="less" scoped>
.router-link-active {
    background-color: #FFE443;
}

.warp {
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #666;

    .nav {
        display: flex;
        align-items: center;
        margin: 0 auto;
        height: 100%;
        width: 1240px;

        .logo {
            height: 50px;

            img {
                height: 100%;
            }
        }

        .nav_ul {
            ul {
                margin-left: 20px;
                display: flex;
                height: 80px;
                width: 900px;

                li {
                    padding: 0 20px;
                    height: 100%;
                    cursor: pointer;
                    line-height: 80px;
                    font-size: 20px;
                    font-weight: 400;
                }

            }
        }

        .login {
            span {
                cursor: pointer;
                line-height: 100px;
                font-size: 16px;
            }

            b {
                font-weight: 400;
            }
        }
    }
}
</style>