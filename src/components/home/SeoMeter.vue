<template>
  <v-card height="100%" color="green">
    <v-card-title class="d-flex justify-space-between">
      <h3>SEO meter</h3>
      <h4>3/5</h4>
    </v-card-title>
    <v-card-text>
      <div class="text-center">
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-rating
            color="white"
            background-color="white"
            hover
            length="5"
            size="64"
            value="3"
          ></v-rating>
        </v-sheet>
      </div>
      <v-alert class="mt-5 mb-0 text-center">
        <div>Szeretnéd megtudni hogyan érheted el az 5/5-ös értéket? Válts <strong>PRÉMIUM</strong> csomagra és tudd meg mivel tehetnél többet!</div>
        <onboarding/>
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
import Onboarding from '@/components/Onboarding'

export default {
  name: 'SeoMeter',
  components: {
    Onboarding
  }
}
</script>
