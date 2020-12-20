// 登录页
import urlConfig from '@/common/js/config';

const logAddr = '';

export default {
  name: 'userInfo',
  data () {
    userId: '';
  },
  methods: {
    userInfo () {
      console.log('122222222222');
      this.http.get(urlConfig + logAddr).then(function (res) {
        this.userId = res.body.data;
      }, function () {
        console.log('异常');
      });
    }
  }
};
