<template>
  <div class="test">
    <button @click="trig">click</button>
    <p>{{trignum}}</p>
    <button
      @click="increase"
    >increase 1</button>
    <Test1 v-bind="testOpt" @updatetime="updateTime" @updatewel="updateWel" />
  </div>
</template>

<script>
import Test1 from './Test1';

export default {
  data () {
    return {
      obj: {
        a: 1
      },
      tant: 1,
      testOpt: {
        time: 1,
        wel: 'hello',
        dis: {
          wangji: 'sss'
        } 
      }
    }
  },
  watch: {
    // "obj" (v, o) {
    //   alert(v);
    // },
    obj: {
      deep: true,
      handler: function (v) {
        alert(v);
        console.log(v)
      }
    },
    tant (v, o) {
      console.log(`o ${o}`);
      console.log(`v ${v}`);
    }
  },
  props: {
    trignum: {
      type: Number,
      default: 0
    }
  },
  computed: {
    b () {
      return this.a + 1;
    }
  },
  components: {
    Test1
  },
  mounted () {
    // console.log(this.obj);
    // this.$on('trigtest', () => {
    //   alert(2);
    // });
    // setTimeout(() => {
    //   // this.obj = Object.assign({}, this.obj, { b: 1 });
    //   // this.obj = Object.assign({}, this.obj, { b: '2222' });
    //   // // this.obj.a = 2;
    //   // this.tant = 2;
    //   // console.log(this.obj);
    // }, 1000);
  },
  methods: {
    trig () {
      this.$emit('trigtest');
    },
    increase () {
      this.testOpt.wel = this.testOpt.wel === 'world' ? 'hello' : 'world';
    },
    updateTime(v) {
      this.testOpt.time = v;
    },
    updateWel (val) {
      this.testOpt.wel = val;
    }
  }
}
</script>
<style scoped>
</style>
