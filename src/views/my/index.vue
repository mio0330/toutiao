<template>
  <div class="my-container">
    <van-cell-group v-if="user" class="my-info">
      <van-cell center class="base-info" :border="false">
        <van-image class="avatar" slot="icon" round fit="cover" :src="currentUser.photo" />
        <div slot="title" class="name">{{ currentUser.name }}</div>
        <van-button
          class="updata-btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid :border="false" class="data-info">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.art_count }}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.follow_count }}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.like_count }}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.fans_count }}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <div v-else class="not-login">
      <div @click="$router.push('/login')">
        <van-icon class-prefix="toutiao" name="shouji" size="88px"/>
      </div>
      <div class="text">
        登录/注册
      </div>
    </div>
    <van-grid class="nav-grid" :column-num="2">
      <van-grid-item class="nav-gird-item" icon-prefix="toutiao" icon="shoucang" text="收藏" />
      <van-grid-item class="nav-gird-item" icon-prefix="toutiao" icon="lishi" text="历史" />
    </van-grid>
    <van-cell is-link title="消息通知" to="/"/>
    <van-cell is-link title="小智同学" to="/"/>
    <van-cell
      v-if="user"
      class="logout-cell"
      title="退出登录"
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCurrentUser } from '@/api/user'

export default {
  name: 'MyIndex',
  data () {
    return {
      currentUser: {}
    }
  },
  computed: {
    // 将容器中的user映射到本地,判断是否登录了
    ...mapState(['user'])
  },
  created () {
    this.loadCurrentUser()
  },
  methods: {
    onLogout () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          // 清空用户登陆状态
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },

    async loadCurrentUser () {
      const { data } = await getCurrentUser()
      this.currentUser = data.data
    }
  }
}
</script>

<style lang="less" scoped>
.my-container {
  .my-info {
    background: url("./1.png") no-repeat;
    background-size: cover;
    .base-info {
      box-sizing: border-box;
      background-color: unset;
      height: 115px;
      padding-top: 38px;
      padding-bottom: 11px;
      .avatar {
        box-sizing: border-box;
        height: 66px;
        width: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .name {
        font-size: 15px;
      }
      .updata-btn {
        height: 16px;
        font-size: 10px;
        color: #666666;
      }
    }
    .data-info {
      .data-info-item {
        height: 65px;
      }
      .text-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .count {
          font-size: 18px;
          font-weight:bold
        }
        .text {
          margin-left: 5px;
          font-size: 11px;
          font-weight:bold
        }
      }
    }
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }
  .not-login {
    height: 180px;
    background: url('./1.png') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 15px;
      font-weight: bolder;
    }
  }
  /deep/ .nav-grid {
    margin-bottom: 4px;
    .nav-gird-item {
      height: 70px;
      .toutiao{
        font-size: 22px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      .van-grid-item__text {
        font-size: 14px;
        color: #333333;
      }
    }
  }
  .logout-cell {
    margin-top: 4px;
    text-align: center;
    color: #d86262;
  }
}
</style>
