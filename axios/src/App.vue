<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- <p><span>count</span><span>{{count}}</span></p>
    <h4>{{countGetters}}</h4>
    <p><span>num</span><span>{{num}}</span></p>
    <h4>{{numGetters}}</h4>
    <p><span>name</span><span>{{name}}</span></p>
    <h4>{{nameGetters}}</h4>
    <h3>
      <button @click="updateCount">updateCount</button>
    </h3>
    <h2>
      <button @click="updateA">updateA</button>
    </h2> -->
    <!-- <my-component>
      <div
        class="box1"
        slot="slot1"
      ></div>
      <div
        class="box2"
        slot="slot2"
      ></div>
      <div
        class="box3"
        slot="slot3"
      ></div>
      <div
        class="box4"
        slot="slot4"
      ></div>
      <div
        class="box5"
        slot="slot5"
      ></div>
    </my-component> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

// import Child from './components/SlotChild'

export default {
  name: 'App',
  data () {
    return {
      a: 1
    };
  },
  components: {
  },
  watch: {
    a: (v, o) => {
      console.log('a', v);
    },
    b: (v, o) => {
      console.log(v)
    }
  },
  computed: {
    b () {
      return this.a + 1;
    },
    ...mapState([
      'count',
      'num',
      'name'
    ]),
    ...mapGetters([
      'countGetters',
      'numGetters',
      'nameGetters'
    ])
  },
  mounted () {
    console.log(this.$store);
    setTimeout(() => {
      this.a++;
      // this.increment(10);
    }, 2000);
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      updatename: 'updateName'
    }),
    updateCount () {
      this.increment(22);
    },
    updateA () {
      // this.$store.dispatch('increment', { count: 10 });
      this.aIncrement({
        amount: 10
      })
    },
    ...mapActions({
      aIncrement: 'increment'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box1 {
  width: 200px;
  height: 200px;
  background: red;
}
.box2 {
  width: 200px;
  height: 200px;
  background: yellow;
}
.box3 {
  width: 200px;
  height: 200px;
  background: lightblue;
}
.box4 {
  width: 200px;
  height: 200px;
  background: lightgreen;
}
.box5 {
  width: 200px;
  height: 200px;
  background: lightseagreen;
}
</style>
