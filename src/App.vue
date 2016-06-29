<template>
  <div id="app">
    <h1>Hex Dropdown</h1>
    <hex-dropdown>
      <hex-dropdown-toggle>Menu</hex-dropdown-toggle>
      <hex-dropdown-panel transition="slide">
        <ul>
          <li><a href="#">Edit Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </hex-dropdown-panel>
    </hex-dropdown>

    <h2>Open on load</h2>
    <hex-dropdown open>
      <hex-dropdown-toggle>Menu</hex-dropdown-toggle>
      <hex-dropdown-panel>
        <ul>
          <li><a href="#">Edit Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </hex-dropdown-panel>
    </hex-dropdown>
  </div>
</template>

<script>
  import HexDropdown       from './components/HexDropdown.vue'
  import HexDropdownToggle from './components/HexDropdownToggle.vue'
  import HexDropdownPanel  from './components/HexDropdownPanel.vue'

  export default {
    components: {
      HexDropdown,
      HexDropdownToggle,
      HexDropdownPanel,
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }

  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }

  .slideOutUp {
    animation-name: slideOutUp;
  }

  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInDown {
    animation-name: slideInDown;
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
</style>
