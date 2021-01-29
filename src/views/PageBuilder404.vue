<template>
  <div class="404-page-builder-page">
    <h2 class="page-title">404-es hiba figyelő</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            URL
          </th>
          <th class="text-left">
            Hiba
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in errors"
          :key="item.activeUrl"
        >
          <td><strong>{{ item.activeUrl }}</strong></td>
          <td>
            <v-chip
              color="red"
              dark
            >
              <v-icon>
                mdi-alert
              </v-icon>
            </v-chip>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-alert
      class="mt-16 d-flex align-center"
      text
      color="info"
    >
      A weboldal urljei közül <strong>{{errors.length}}</strong> darab fut 404-es hibára. Válts <strong>PRÉMIUM</strong> csomagra és tudd meg mivel tehetnél többet!
      <onboarding/>
    </v-alert>
  </div>
</template>

<script>
import Onboarding from '@/components/Onboarding'

export default {
  name: 'PageBuilder404',
  data () {
    return {
      errors: [
        {
          activeUrl: '/soos-duro-kagylo-400-g'
        },
        {
          activeUrl: '/soos-premio-4-tojasos-preselt-csiga-200-g'
        },
        {
          activeUrl: '/delikat-etelizesito-250-g'
        },
        {
          activeUrl: '/orientsultkrumpli-fuszerso-20-g'
        }
      ]
    }
  },
  components: {
    Onboarding
  }
}
</script>
