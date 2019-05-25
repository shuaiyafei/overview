<template>
  <div>
    Test2
    {{time}}
    <Test3
      v-bind="$attrs"
      v-on="$listeners"
    />
    <a @click="updateTime">increate time</a>
  </div>
</template>

<script>
import Test3 from './Test3';

export default {
  props: {
    time: {
      type: Number,
      default: 0
    }
  },
  components: {
    Test3
  },
  data () {
    return {
    }
  },
  methods: {
    updateTime () {
      let time = this.time + 1;
      this.$emit('updatetime', time);
    }
  }
}
</script>



