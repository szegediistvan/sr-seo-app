<template>
  <div class="404-page-builder-page">
    <h2 class="page-title">404-es hiba figyelő</h2>

    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="pa-3"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      ></v-skeleton-loader>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'PageBuilder404',
  inject: {
    theme: {
      default: {
        isDark: false
      }
    }
  }
}
</script>

<style scoped>

</style>
