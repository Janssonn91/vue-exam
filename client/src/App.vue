<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">Login and auth for beginners</a>
    </nav>
    <!-- Open what compnents the router-view match.
    Example: Home component which is startpage will come here beneeth.
    Inside Home, there are router-links for login/signup,
    those will open those component when "activated".-->
    <router-view class="container pt-2" />
  </div>
</template>

<style>

.container {
  max-width: 960px!important;
}

</style>
