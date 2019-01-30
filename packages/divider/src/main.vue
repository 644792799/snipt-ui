<template>
  <transition name="sn-divider-trans">
    <div 
      class="sn-divider"
      :class="[directionClass, orientationClass, dashedClass]">
      <!-- <slot> -->
        <span class="sn-divider-inner-text" v-if="description">{{description}}</span>
      <!-- </slot> -->
    </div>
  </transition>
</template>

<script>
  const ORIENTATION_MAP = {
    'left': 'sn-divider-with-text-left',
    'right': 'sn-divider-with-text-right',
    'center': 'sn-divider-with-text'
  };

  const DIRECTION_MAP = {
    'horizontal': 'sn-divider-horizontal',
    'vertical': 'sn-divider-vertical'
  };

  export default {
    name: 'SnDivider',
    props: {
      description: {
        type: String,
        default: ''
      },
      dashed: {
        type: Boolean,
        default: false
      },
      orientation: {
        type: String,
        default: ORIENTATION_MAP.center
      },
      direction: {
        type: String,
        default: DIRECTION_MAP.horizontal
      }
    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    computed: {
      directionClass(){
        return DIRECTION_MAP[this.direction] || DIRECTION_MAP.horizontal;
      },
      orientationClass(){
        return ORIENTATION_MAP[this.orientation] || ORIENTATION_MAP.center;
      },
      dashedClass(){
        return this.dashed ? 'sn-divider-dashed' : '';
      }
    }
  };
</script>