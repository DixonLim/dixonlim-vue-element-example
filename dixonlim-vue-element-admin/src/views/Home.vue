<template>
  <el-container>
    <el-header></el-header>
    <el-aside></el-aside>
    <el-main>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld :msg="helloWorldText"/>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function() {
  return {
      helloWorldText:'Hello ! This is a HelloWorld Components。',
    };
}
}
</script>
