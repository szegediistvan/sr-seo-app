<template>
  <v-app>
    <v-app-bar height="100" color="primary" elevation="2" clipped-left dark app>
      <div class="d-flex justify-space-between align-center" style="width: 100%;">
        <div class="logo d-flex align-center">
          <brand-icon class="mr-5" />
          <h1>SEO Elf</h1>
        </div>
        <v-avatar
          color="orange"
          size="50"
        >SZI</v-avatar>
      </div>
    </v-app-bar>

    <v-navigation-drawer dark fixed app class="navigation-menu">
      <Menu/>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container class="px-7 pt-7 pb-16" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer dark app class="justify-center">
        <small>Made with ❤️ by the SEO Elf team</small>
    </v-footer>
  </v-app>
</template>

<style lang="scss" src="./scss/index.scss"/>

<script>
import BrandIcon from '@/components/layout/BrandIcon'
import Menu from '@/components/layout/Menu'

export default {
  name: 'App',
  components: {
    Menu,
    BrandIcon
  }
}
</script>
