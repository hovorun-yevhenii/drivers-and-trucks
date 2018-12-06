<template>
    <div class="login">
      <label class="login__item">Login
        <input class="login__input app-input" v-model="login" @input="clearErrors" type="text" placeholder="user">
        <span v-show="errors.login" class="login__error">{{ errors.login}}</span>
      </label>

      <label class="login__item">Password
        <input class="login__input app-input" v-model="password" @input="clearErrors" type="password" placeholder="user">
        <span v-show="errors.password" class="login__error">{{ errors.password }}</span>
      </label>

      <button class="login__button app-button" @click="submitHandler">sign in</button>
    </div>
</template>

<script>
  export default {
    name: "LoginPage",
    data () {
      return {
        login: '',
        password: '',
        errors: {
          login: false,
          password: false
        }
      }
    },
    methods: {
      clearErrors () {
        this.errors = {
          login: false,
          password: false
        }
      },
      validate () {
        if (!this.login) {
          this.errors.login = 'Login is required'
        } else if (this.login.length < 2) {
          this.errors.login = 'Login must be at least 4 characters long'
        }

        if (!this.password) {
          this.errors.password = 'Password is required'
        } else if (this.password.length < 2) {
          this.errors.password = 'Password must be at least 4 characters long'
        }
      },
      submitHandler () {
        this.validate();

        if (this.errors.login || this.errors.password) return;

        localStorage.setItem('truckInToken', 'token');

        this.$router.replace('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 288px;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0 auto;
    &__item {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      margin-bottom: 32px;
     }
  }
</style>
