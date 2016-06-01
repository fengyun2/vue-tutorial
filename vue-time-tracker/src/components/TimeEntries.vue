<template>
  <div>
    <!-- `v-if`是vue的一个指令 -->
    <!-- `$router.path` 是当前路由对象的路径,会被解析为绝对路径,当`$router.path !== '/time-entries/log-time'`为`true`显示,`false`为不显示 -->
    <button v-if="$router.path !== '/time-entries/log-time'" v-link="'/time-entries/log-time'"
    class="btn btn-primary">
      创建
    </button>

    <div v-if="$router.path === '/time-entries/log-time'">
    <h3>创建</h3>
    </div>

    <hr>

    <!-- 下一级视图 -->
    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>还没有任何任务</strong></p>

      <div class="list-group">
        <!-- v-for 循环渲染 -->
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ timeEntry.totalTime }}
              </h3>

              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ timeEntry.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>
                {{ timeEntry.comment }}
              </p>
            </div>

            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)">X</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      // 事先模拟一个数据
      let existingEntry = {
        user: {
          name: '云仔',
          email: '1518550424@qq.com',
          image: 'http://image.so.com/z?ch=pet&t1=234&src=banner_pet&eid=t0166dc503e09655bd8.jpg'
        },
        comment: '我的备注',
        totalTime: 3.8,
        date: '2016-06-01'
      }

      return {
        timeEntries: [existingEntry]
      }
    },
    methods: {
      deleteTimeEntry (timeEntry) {
        // 这个方法用于删除某一项任务
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('确定要删除吗?')) {
          this.timeEntries.splice(index, 1)
          // 这里会派发到父组件上,执行父组件events里面的deleteTime方法
          this.$dispatch('deleteTime', timeEntry)
        }
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        // 继续向上派发
        return true
      }
    }
  }
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
