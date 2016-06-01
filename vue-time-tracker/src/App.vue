<template>
<div id="wrapper">
  <nav class="navbar navbar-default">
    <div class="container">
      <a class="navbar-brand" href="#">
        <i class="glyphicon glyphicon-time"></i>
        计划表
      </a>
      <ul class="nav navbar-nav">
        <li><a href="#" v-link="{path:'/home'}">首页</a></li>
        <li><a href="#" v-link="{path:'time-entries'}">计划列表</a>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="col-sm-3">

      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>

</style>
