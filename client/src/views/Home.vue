<template>
  <div class="text-center">
    <div class="jumbotron m-0 rounded">
      <h2 class="mb-3">Welcome to the magical place of auth (hoth?)</h2>
      <p class="lead">Learning Javascript is fun!</p>
      <hr class="my-4"/>
        <router-link
          class="btn btn-primary mr-5 rounded-button"
          :to="{ name: 'signup' }"
          role="button">Sign Up</router-link>
        <router-link
          class="btn btn-primary rounded-button"
          :to="{ name: 'login' }"
          role="button">Log in</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>

<style>

.rounded {
  border-radius: .75rem!important;
}

.rounded-button {
  border-radius: .3rem!important;
}

</style>
