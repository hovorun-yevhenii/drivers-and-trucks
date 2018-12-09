<template>
    <div class="login">
      <label class="app-label">Login
        <input class="app-input"
               v-model="login" type="text"
               placeholder="user"
               name="login"
               v-validate="'required|min:4'"
               autofocus>
        <span>{{ errors.first('login') }}</span>
      </label>

      <label class="app-label">Password
        <input class="app-input"
               v-model="password"
               type="password"
               placeholder="user"
               v-validate="'required|min:4'"
               name="password">
        <span>{{ errors.first('password') }}</span>
      </label>

      <button class="app-button login-btn" @click="submitHandler">sign in</button>
    </div>
</template>

<script>
  export default {
    name: "LoginPage",
    data () {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      submitHandler () {
        this.$validator.validateAll().then((result) => {
          if(!result) return;

          localStorage.setItem('truckInToken', 'token');

          this.$router.replace('/');
        })
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
  }
</style>
