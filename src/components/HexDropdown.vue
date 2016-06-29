<template>
  <div :class="{ 'is-open': open, 'dropdown': true }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      open: Boolean,
    },
  }
</script>
