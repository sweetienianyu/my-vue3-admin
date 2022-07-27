<template>
  <div id="register">
    <a-form>
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
        <div class="">
            <a-select>
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
            </a-select>
        </div>
        <a-input v-model:value="formState.email" placeholder="账户:admin"></a-input>
      </a-form-item>
      <div>
        <div class="verify-code"></div>
        <div class="get-code-btn"></div>
      </div>
      
      <div>
        <a-button>注册</a-button>
        <div class="">使用已有账户登录</div>
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
  phone_number: "",
  verify_code: ""
});
</script>

<style lang="scss" scoped>
.custom {
    padding: 12px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .forget-password {
        color: blue;
        font-size: 14px;
    }
}
</style>