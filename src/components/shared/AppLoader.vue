<template>
<transition name="fade">
  <div class="loader">
    <div class="loader__container">
      <svg width="100%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#66abfa" stroke-width="3"></circle>
        <circle cx="50" cy="50" r="20" fill="#FF6F60" stroke="none"></circle>
      </svg>
    </div>
  </div>
</transition>
</template>

<style lang="scss" scoped>
  .loader {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: hsla(6,50%,98%,.7);
    display: flex;
    z-index: 999;

    &__container {
      width: 85px;
      margin: auto;
      opacity: .7;
    }

    circle {
      transform-origin: center;
      animation: fade 2s infinite;
    }

    circle + circle {
      animation: scale .5s infinite alternate;
    }

    @keyframes scale {
      to {
        transform: scale(.8);
      }
    }

    @keyframes fade {
      to {
        opacity: 0;
      }
    }
  }
</style>
