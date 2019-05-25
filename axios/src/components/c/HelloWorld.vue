<template>
  <div class="hello">
    <p>{{a}}</p>
    <p>{{b}}</p>
    <Test
      @trigtest="trigTest"
      :trignum="trigNum"
      :class="{'test-disable': isDisableBtn}"
    />
  </div>
</template>

<script>
// import getData from './../axios/index.js'
import Test from './Test';

export default {
  data () {
    return {
      a: 1,
      trigNum: 1,
      isDisableBtn: false,
    }
  },
  components: {
    Test
  },
  computed: {
    b () {
      return this.a + 1;
    }
  },
  mounted () {

    // getData('api/getdata', '', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // }).then(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // })
  },
  methods: {
    trigTest () {
      this.isDisableBtn = true;
      setTimeout(() => {
        this.isDisableBtn = false;
        this.trigNum++;
      }, 1000);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test-disable {
  pointer-events: none;
}
</style>
