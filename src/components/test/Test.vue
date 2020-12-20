<template>
  <div id="info">
    <button @click="getData">获取数据</button>
    <ul>
      <!--<li v-for="(item,index) in list" v-bind:key="index">-->
        <!--{{item.title}}-->
      <!--</li>-->
      <li>{{actId}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        actId: ''
      };
    },
    methods: {
      getData: function () {
        this.$axios.get('https://www.baidu.com/', {
          headers: {
            'Access-Control-Allow-Origin': true,
            'withCredentials': true,
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
        // let api = 'http://localhost:8001/activiti/runtime/getId';
        // // 此处推荐使用箭头函数。
        // this.$http.get(api).then((res) => {
        //   this.actId = res.body.result;
        // }, (err) => {
        //   console.log(err);
        // });
      }
    },
    mounted () {
      this.getData();
    }
  };
</script>
