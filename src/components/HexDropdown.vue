<template>
  <!-- Wrap in a div to prevent fragmentation. -->
  <div>
    <button @click="toggleDropdown">{{ label }}</button>
    <div v-show="active" :transition="effect">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // This shows/hides the dropdown's content.
      active: Boolean,
      effect: String,
      // This serves as the button text.
      label: {
        type:     String,
        required: true,
      },
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
