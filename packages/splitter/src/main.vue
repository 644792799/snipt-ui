<template>
  <transition name="sn-splitter-trans">
    <div class="sn-splitter" >
      <slot>
        <p class="sn-alert__description" v-if="description">{{description}}</p>
      </slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SnSplitter',
    props: {
      description: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    computed: {
      
    }
  };
</script>