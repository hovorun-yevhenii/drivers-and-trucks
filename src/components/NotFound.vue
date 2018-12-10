<template>
    <div class="not-found">
      <p class="not-found__title">404</p>
      <p class="not-found__message">The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
      <router-link to="/" replace class="not-found__link">go home</router-link>
    </div>
</template>

<style lang="scss" scoped>
  .not-found {
    display: flex;
    flex-flow: column nowrap;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    &__title {
      margin-bottom: 48px;
      font-size: 64px;
      color: #fa7266;
      animation: pulse 4s forwards;
    }
    &__message {
      max-width: 340px;
      margin-bottom: 48px;
      text-align: center;
      line-height: 1.3;
      color: #aaa;
    }
    &__link {
      color: #66abfa;
      text-transform: uppercase;
    }
    @keyframes pulse {
      to {
        transform: scale(1.3);
      }
    }
  }
</style>
