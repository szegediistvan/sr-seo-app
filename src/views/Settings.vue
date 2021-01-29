<template>
  <div class="settings-page">
    <h2 class="page-title">Beállítások</h2>
    <v-card>
      <v-card-text>
        <v-form>
          <form-group>
            <form-row label="Vezetéknév">
              <v-text-field
                outlined
                dense
                v-model="lastname"
              />
            </form-row>
            <form-row label="Keresztnév">
              <v-text-field
                outlined
                dense
                v-model="firstname"
              />
            </form-row>
          </form-group>
          <form-group>
            <form-row label="E-mail cím">
              <v-text-field
                outlined
                dense
                v-model="email"
              />
            </form-row>
          </form-group>
          <form-group>
            <form-row label="Webáruház url">
              <v-text-field
                outlined
                dense
                v-model="websiteUrl"
              />
            </form-row>
          </form-group>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      lastname: '',
      firstname: '',
      email: '',
      websiteUrl: ''
    }
  }
}
</script>
