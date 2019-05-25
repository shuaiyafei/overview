<template>
  <div>
    <slot :name="slotType"></slot>
    <button @click="toggle">click</button>
  </div>
</template>

<script>
import mixin from '../mixin';

export default {
  data () {
    return {
      slotType: 'slot1'
    }
  },
  mixins: [mixin],
  mounted() {
    this.test1();
    console.log(this);
    
  },
  methods: {
    toggle() {
      let val = this.slotType;
      let currentVal = '';
      switch(val) {
        case 'slot1':
          currentVal = 'slot2';
          break;
        case 'slot2':
          currentVal = 'slot3';
          break;
        case 'slot3':
          currentVal = 'slot4';
          break;
        case 'slot4':
          currentVal = 'slot5';
          break;
        default:
          currentVal = 'slot1';
          break;
      }
      this.slotType = currentVal;
    }
  }
}
</script>



