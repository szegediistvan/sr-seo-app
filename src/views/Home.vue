<template>
  <div class="home-page">
    <h2 class="page-title">Kezdőlap</h2>
    <v-row>
      <v-col md="6" cols="12">
        <home-chart color="orange"/>
      </v-col>
      <v-col md="6" cols="12">
        <home-chart color="green"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HomeChart from '@/components/home/HomeChart'
export default {
  name: 'Home',
  components: {
    HomeChart
  }
}
</script>
