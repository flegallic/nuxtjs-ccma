<template>
  <v-card
    class="d-flex justify-start navbar"
    :color="$vuetify.theme.dark ? 'blue lighten-8' : 'blue lighten-8'"
    flat
    tile >
    <v-card
      class="navbar-logo"
      outlined
      flat
      title
      color="transparent" >
      <v-img
      max-width="120"
      :src="require(`../static/logo.png`)" >
      </v-img>
    </v-card>
    <v-card
      class="navbar-title"
      outlined
      flat
      title
      color="transparent">
      <p color="white" >Cloud Cost Management and Optimization</p>
    </v-card>
  </v-card>
</template>

<style lang="scss">
.navbar{
  background: url('../static/banner.png') no-repeat center center;
  background-size: cover;
  background-color: blue;
  height: 140px;

  .navbar-logo{
    background-color: transparent; border:0; padding:24px 10px 0 20px;
  }
  .navbar-title{
    background-color: transparent; border:0; padding:60px 20px 0 10px; color:#fff;

    p{ color: #fff;}
  }
}
</style>