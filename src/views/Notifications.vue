<template>
  <div class="notifications-page">
    <h2 class="page-title">Értesítések</h2>
    <v-alert
      type="error"
      text
      border="left"
    >Túl sok elsődleges domain van beállítva!</v-alert>
    <v-alert
      type="success"
      text
      border="left"
    >Van egyedi domain beállítva!</v-alert>
    <v-alert
      type="error"
      text
      border="left"
    >SSL nincs megfelelően beállítva!</v-alert>
    <v-alert
      type="warning"
      text
      border="left"
    >Weboldala több mint 2000 sorból áll!</v-alert>
    <v-alert
      type="error"
      text
      border="left"
    >Weboldala no index, no follow beállításra van állítva! Így a keresőmotorok nem indexelik!</v-alert>
  </div>
</template>

<script>
export default {
  name: 'Notifications'
}
</script>

<style scoped>

</style>
