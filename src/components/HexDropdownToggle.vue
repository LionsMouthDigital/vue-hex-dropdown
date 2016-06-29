<template>
  <button @click.prevent="$parent.open = !$parent.open" class="dropdown-toggle">
    <slot></slot>
  </button>
</template>
