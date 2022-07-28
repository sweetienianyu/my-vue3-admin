<template>
  <div id="register">
    <a-form size="large" :model="formState">
      <a-form-item
        name="Email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email" placeholder="邮箱"></a-input>
      </a-form-item>
      <a-form-item
        name="Password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" placeholder="请至少输入6个字符， 请不要使用容易被猜到的密码"></a-input-password>
      </a-form-item>

      <a-form-item
        name="Confirm"
        :rules="[{ required: true, message: 'Please input your confirm password!' }]"
      >
        <a-input v-model:value="formState.confirm_pwd" placeholder="确认密码"></a-input>
      </a-form-item>

      <a-form-item
        name="Phone"
        :rules="[{ required: true, message: 'Please input your phone number!' }]"
      >
        <div class="phone-inner-wrapper">
            <a-select class="phone-area" v-model:value="formState.phone_area_code">
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
            </a-select>
            <a-input v-model:value="formState.phone_number" placeholder="手机号"></a-input>
        </div>
      </a-form-item>
      <div class="code-inner-wrapper">
        <a-input class="verify-code" v-model:value="formState.verify_code" placeholder="验证码"/>
        <a-button class="get-code-btn" type="primary">获取验证码</a-button>
      </div>
      <div class="btn-area">
        <a-button type="primary" block class="register-btn">注册</a-button>
        <div class="exist-login">使用已有账户登录</div>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { UserOutlined, LockOutlined } from "@ant-design/icons-vue"

const formState = ref({
  email: "",
  password: "",
  confirm_pwd: "",
  phone_area_code: "+86",
  phone_number: "",
  verify_code: ""
});
</script>

<style lang="scss" scoped>
.phone-inner-wrapper {
    display: flex;
    align-items: center;
}
.phone-area {
    width: 80px;
}
.code-inner-wrapper {
    display: flex;
    align-items: center;
}
.btn-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.register-btn {
    width: 120px;
}
.exist-login {
    color: blue;
}
</style>