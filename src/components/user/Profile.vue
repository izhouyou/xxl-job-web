<template>
  <div>
    <!--所有元素必须不能放在根节点下-->
    <h1>个人信息</h1>
        {{$route.params.id}}
    {{id}}
    <div>
      <p>{{form.name}}</p>
      <p>hello</p>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['id'],
    name: 'Profile',
    beforeRouteEnter: (to, from, next) => {
      console.log('进入路由之前');// 在这里加载数据（axios）
      next(vm => {
        vm.getData();// 进入路由之前执行getData
      });
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('进入路由之后');
      next();
    },
    data: function () {
      return {
        form: {
          name: 'zhangsan',
          age: ''
        }
      };
    },
    methods: {
      getData: function () {
        console.log('hhhh');
        this.$axios({
          method: 'get',
          url: 'http://localhost:8080/static/mock/data.json'
        }).then(function (response) {
          // 将response.data这个数据库获得的对象数据封装到
          // 组件的data设置的集合中，然后在template里遍历显示
          if (response.status === 200) {
            alert('查询成功');
          }
          console.log('异步数据' + this.alldata);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  };
</script>

<style scoped>

</style>
