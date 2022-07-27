<template>
  <div id="login">
    <a-form>
      <a-form-item
        name="Username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="账户:admin">
          <template #prefix>
            <user-outlined type="user" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        name="Password"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input-password
          v-model:value="formState.password"
          placeholder="密码: admin or ant.design"
        >
        <template #prefix>
            <lock-outlined type="user" />
          </template>
        </a-input-password>
      </a-form-item>
      <div class="custom">
        <div class="auto-login">
            <a-checkbox>记住密码</a-checkbox>
        </div>
        <div class="forget-password">
            忘记密码
        </div>
      </div>
      <a-button type="primary" block>登录</a-button>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue"

const formState = ref({
  username: "",
  password: "",
});
// const labelCol = ref({ span: 4 })
// const wrapperCol = ref({ span: 14 })
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