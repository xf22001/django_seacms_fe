<template>
<div class="navbar">
    <div class="hamburger-container">
        <div>
            <img src="/static/favicon.ico">
        </div>
        <div>
            <span>seacms</span>
        </div>
    </div>
    <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
                <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link to="/">
                    <el-dropdown-item> Home </el-dropdown-item>
                </router-link>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default
{
  components: {
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        margin-left: 30px;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color: transparent;
        &:hover {
            background: rgba(0, 0, 0, .025)
        }
        div {
            float: left;
            position: relative;
            height: 100%;
        }
        div img {
            width: 50px;
            height: 100%;
        }
    }
    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;
        &:focus {
            outline: none;
        }
        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;
            &.hover-effect {
                cursor: pointer;
                transition: background .3s;
                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }
        .avatar-container {
            margin-right: 30px;
            .avatar-wrapper {
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    cursor: pointer;
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
