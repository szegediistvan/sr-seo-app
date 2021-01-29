<template>
  <div class="301-checker-page">
    <h2 class="page-title">301 Checker</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Active Url
          </th>
          <th class="text-left">
            Redirection numbers
          </th>
          <th class="text-left"></th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in redirectionList"
          :key="item.activeUrl"
        >
          <td><strong>{{ item.activeUrl }}</strong></td>
          <td>{{ item.redirections }}</td>
          <td>
            <v-icon :color="`${limit > item.redirections ? 'green' : 'red'}`">
              mdi-{{ limit > item.redirections ? 'check-box-outline' : 'minus-box-outline'}}
            </v-icon>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Checker301',

  data () {
    return {
      limit: 3,
      redirectionList: [
        {
          activeUrl: '/soos-duro-kagylo-400-g',
          redirections: 2
        },
        {
          activeUrl: '/soos-premio-4-tojasos-preselt-csiga-200-g',
          redirections: 4
        },
        {
          activeUrl: '/delikat-etelizesito-250-g',
          redirections: 1
        },
        {
          activeUrl: '/orientsultkrumpli-fuszerso-20-g',
          redirections: 5
        },
        {
          activeUrl: '/kotanyi-klasszikus-sultkrumpli-fuszerso-20-g',
          redirections: 3
        },
        {
          activeUrl: '/kotanyi-chili-chipotle-fustolt-malom-36-g',
          redirections: 0
        },
        {
          activeUrl: '/kotanyi-himalaja-so-malom-88-g',
          redirections: 3
        },
        {
          activeUrl: '/pacific-sutesallo-dzsem-sargabarack-500-g',
          redirections: 1
        },
        {
          activeUrl: '/aranynektar-viragmez-uveges-500-g',
          redirections: 2
        },
        {
          activeUrl: '/hame-szilvalekvar-300-g',
          redirections: 0
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
