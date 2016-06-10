<template>
  <div class="dropdown">
    <button @click.prevent="toggleDropdown" class="dropdown-toggle">{{ label }}</button>
    <div v-show="active" :transition="effect" class="dropdown-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // This shows/hides the dropdown's content.
      active:          Boolean,
      autoActive:      Boolean,
      autoActiveWidth: {
        type:    Number,
        default: 960
      },
      effect: String,
      // This serves as the button text.
      label:  {
        type:     String,
        required: true,
      },
    },

    created() {
      if (this.autoActive && window.innerWidth >= this.autoActiveWidth) {
        this.active = true;
      }
    },

    methods: {
      /**
       * Toggle the dropdown content's visibility.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      toggleDropdown() {
        this.active = !this.active;
      }
    }
  }
</script>
