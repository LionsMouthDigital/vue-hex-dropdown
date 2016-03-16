<template>
  <div id="app">
    <hex-dropdown label="Menu">
      <ul>
        <li><a href="#">Edit Profile</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </hex-dropdown>
  </div>
</template>

<script>
  import HexDropdown from './components/HexDropdown.vue'

  export default {
    components: {
      HexDropdown
    }
  }
</script>
