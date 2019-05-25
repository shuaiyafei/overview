<template>
  <div>
    <h1>{{dis.wangji}}</h1>
    <h2>Test1</h2>
    <!-- {{a}}{{a}}{{a}} -->
    <Test2 v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Test2 from './Test2';

export default {
  props: {
    dis: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  // props: {
  //   obj: {
  //     type: Object,
  //     default: () => {
  //       return {}
  //     }
  //   }
  //   a: {
  //     type: Number,
  //     default: 0
  //   }
  // },
  components: {
    Test2
  },
  mounted() {
    // console.log(this.a);
  }
}
</script>



