<template>
  <v-card
    class="mx-auto text-center"
    :color="color"
    dark
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="87"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Utolsó 24 óra
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Megnézem az elemzést
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'HomeChart',
  props: {
    color: {
      required: true
    }
  },
  data: () => ({
    value: [
      423,
      446,
      675,
      510,
      590,
      610,
      760
    ]
  })
}
</script>
