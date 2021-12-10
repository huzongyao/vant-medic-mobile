<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="手机号登录" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con">
      <div class="work-shop">
        <div class="align-center logo-box">
          <van-image src="static/img/login/logo2.png" class="top-logo"></van-image>
        </div>
        <div class="flex1 form-area">
          <div>
            <div class="input-phone">
              <van-icon name="static/img/login/change_phone.png" size="24px"></van-icon>
              <van-field v-model="loginInput.phone" placeholder="手机号码" size="large"
                         maxlength="11" clearable></van-field>
            </div>
            <div class="input-code">
              <van-icon name="static/img/login/change_verification_code.png" size="24px"></van-icon>
              <van-field v-model="loginInput.code" placeholder="请输入短信验证码" size="large"
                         class="flex1" maxlength="6" clearable>
                <template #button>
                  <van-button round type="info" size="small" plain>获取验证码</van-button>
                </template>
              </van-field>
            </div>
            <div class="agree-box">
              <van-checkbox v-model="agreeChecked" class="agree-check">
                我已阅读并同意<span class="agree-title">《健康用户许可协议》</span>及<span class="agree-title">《法律声明及隐私权政策》</span>
              </van-checkbox>
            </div>
            <div class="align-center">
              <van-button round class="login-btn" type="info" :disabled="!agreeChecked" @click="onLoginClick">登录
              </van-button>
            </div>
          </div>
          <div class="pwd-login">密码登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phone-login",
    data() {
      return {
        agreeChecked: true,
        loginInput: {
          phone: '',
          code: '',
        }
      }
    },
    mounted() {
      this._showAlert('手机号和验证码随便填！');
    },
    methods: {
      onLoginClick() {
        this._showLoading();
        setTimeout(() => {
          this._dismissLoading();
          let userInfo = {
            name: '前端君',
            phone: this.loginInput.phone,
          };
          this.$store.commit('setUserInfo', userInfo);
          this._saveUserInfo();
          this._routerBack();
        }, 1000);
      },
    },
  }
</script>

<style scoped lang="less">
  .agree-box {
    .agree-check {
      .agree-title {
        color: @blue;
      }
      align-items: start;
    }
    padding: 20px;
    font-size: 14px;
  }

  .work-shop {
    .form-area {
      .input-code {
        align-items: center;
        border-bottom: 1px solid #F1F1F1;
        display: flex;
        padding: 4px 0 4px 16px;
      }
      .input-phone {
        align-items: center;
        border-bottom: 1px solid #F1F1F1;
        display: flex;
        padding: 4px 0 4px 16px;
      }
      .login-btn {
        width: 88%;
        margin-top: 20px;
      }
      .pwd-login {
        padding: 24px 0;
        color: #009EE6;
        font-size: 16px;
        text-align: center;
      }
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    display: flex;
    height: calc(100vh - 46px);
    flex-direction: column;
  }

  .logo-box {
    .top-logo {
      height: 30px;
    }
    padding: 40px 0;
  }
</style>
