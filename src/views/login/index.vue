<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录/注册"
      left-arrow
      @click-left="$router.back()"
    />
    <van-form @submit="onLogin">
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button
            class="send-btn"
            size="small"
            round
          >发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" type="info" block >登录</van-button>
      </div>
    </van-form>
    <span>
      13911111111 / 246810
      13611111111 / 246810
      13922222222 / 246810
    </span>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  methods: {
    async onLogin () {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      try {
        const { data } = await login(this.user)
        this.$toast.success('登录成功')
        this.$store.commit('setUser', data.data)
        this.$router.back()
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  .send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text{
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap{
    padding: 26px 16px;
    .login-btn{
      background-color: #6bd4fb;
      border: none;
      .van-button__text{
        font-size: 15px;
      }
    }
  }
}
</style>
