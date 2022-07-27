<template>
  <div id="user_layout">
    <div class="container">
        <div class="header">Ant Design</div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="footer">
            Copyright © 2018 vueComponent
        </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(["2"]),
    };
  },
});
</script>
<style lang="scss" scoped>
#user_layout {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
    min-width: 400px;
    margin: 0 auto;
}
.header {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
}
.content {
    padding: 20px 0px;
}
.footer {
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    color: #e3e3e3;
}

</style>