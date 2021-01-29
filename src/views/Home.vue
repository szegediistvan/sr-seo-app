<template>
  <div class="home-page">
    <h2 class="page-title">Kezdőlap</h2>
    <v-row>
      <v-col md="6" cols="12">
        <v-card color="amber">
          <v-card-text>
            <v-dialog
              v-model="dialog"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  src="../assets/seo-elemzes.png"
                  v-bind="attrs"
                  v-on="on"
                ></v-img>
              </template>

              <v-card>
                <v-card-text>
                  <v-img
                    src="../assets/seo-elemzes.png"
                  ></v-img>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <seo-meter/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" cols="12">
        <home-chart color="blue"/>
      </v-col>
      <v-col md="6" cols="12">
        <home-chart color="green"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HomeChart from '@/components/home/HomeChart'
import SeoMeter from '@/components/home/SeoMeter'
export default {
  name: 'Home',
  components: {
    HomeChart,
    SeoMeter
  }
}
</script>
