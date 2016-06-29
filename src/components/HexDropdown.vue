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

<style>
  .dropdown:not(.is-open) .dropdown-panel {
    display: none;
  }

  @media (min-width: 800px) {
    .dropdown-panel {
      display: block;
    }
  }
</style>
