<template>
  <el-container>
    <el-aside><Aside></Aside></el-aside>
    <el-container>
      <router-link to="/about">Go to about</router-link>
      <router-link to="/test">Go to test</router-link>
      <router-link to="/home">Go to home</router-link>
      <el-header><Header></Header></el-header>
      <el-main><Main></Main></el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </el-container>
</template>
<script>
  // @ is an alias to /src
  import Header from '@/components/container/Header.vue'
  import Aside from '@/components/container/Aside.vue'
  import Main from '@/components/container/Main.vue'
  import Footer from '@/components/container/Footer.vue'

  export default {
    name: 'index',
    components: {
      Header,
      Aside,
      Main,
      Footer
  },
  data: function() {
  return {
    };
}
}
</script>
