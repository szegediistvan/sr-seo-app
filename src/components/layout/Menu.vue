<template>
  <v-list>
    <v-list-item
      v-for="([icon, text, route], i) in items"
      :to="route"
      :key="i"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'Menu',

  data: () => ({
    items: [
      ['mdi-home-outline', 'Kezdőlap', '/'],
      ['mdi-text-search', 'Analízis', '/observer'],
      ['mdi-shield-alert-outline', 'Értesítések', '/notifications'],
      ['mdi-shield-check-outline', '301 ellenőrzés', '301-checker'],
      ['mdi-note-remove-outline', '404-es hiba figyelő', '404-page-builder'],
      ['mdi-cog-outline', 'Beállítások', 'settings'],
      ['mdi-school-outline', 'Tudástár', 'academy']
    ]
  })
}
</script>
