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
    <v-alert
      class="mt-16 d-flex align-center"
      text
      color="info"
    >
      Az oldalon még további <strong>10</strong> potenciálisan javítandó SEO probléma van. Válts <strong>PRÉMIUM</strong> csomagra és tudd meg mivel tehetnél többet!
      <onboarding/>
    </v-alert>
  </div>
</template>

<script>
import Onboarding from '@/components/Onboarding'

export default {
  name: 'Notifications',
  components: {
    Onboarding
  }
}
</script>
