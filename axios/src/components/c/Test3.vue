<template>
  <div>
    <h3>Test3</h3>
    <button @click="updateWel">update wel</button>
    <p>{{wel}}</p>
  </div>
</template>

<script>
export default {
  props: {
    wel: {
      type: String,
      default: ''
    }
  },  
  data() {
    return {
    }
  },
  mounted() {
    this.$on('updatewel', (res) => {
      console.log(`res ${res}`);
    });
  },
  methods: {
    update() {
      this.wel = 2;
    },
    updateWel() {
      let wel = this.wel.repeat(2);
      this.$emit('updatewel', wel);
    }
  }
}
</script>



