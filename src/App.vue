<template>
  <div id="app">
    <h1>Hex Dropdown</h1>
    <hex-dropdown label="Menu">
      <ul>
        <li><a href="#">Edit Profile</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </hex-dropdown>

    <h2>Open on load</h2>
    <hex-dropdown label="Menu" active>
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
