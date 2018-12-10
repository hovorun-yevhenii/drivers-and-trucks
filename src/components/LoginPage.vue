<template>
    <div class="login">
      <label class="app-label">Login
        <input class="app-input"
               v-model="login" type="text"
               placeholder="user"
               name="login"
               v-validate="'required|min:4'"
               data-vv-validate-on="submit|blur"
               @keyup.enter="validateForm"
               autofocus>
        <span>{{ errors.first('login') }}</span>
      </label>

      <label class="app-label">Password
        <input class="app-input"
               v-model="password"
               type="password"
               placeholder="user"
               v-validate="'required|min:4'"
               data-vv-validate-on="submit|blur"
               @keyup.enter="validateForm"
               name="password">
        <span>{{ errors.first('password') }}</span>
      </label>

      <button class="app-button app-button--prime" @click="validateForm">sign in</button>
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
      validateForm () {
        this.$validator.validateAll().then((result) => {
          if(!result) return;

          localStorage.setItem('truckInToken', 'superSecureToken');
          this.$router.replace('/');
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    min-height: 80vh;
    margin: 0 auto;
  }
</style>
