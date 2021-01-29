<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        class="mx-6"
        v-bind="attrs"
        v-on="on"
      >Előfizetek</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Előfizetés</span>
      </v-card-title>
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
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Mégse
        </v-btn>
        <v-btn
          color="primary"
          @click="dialog = false"
        >
          Mentés
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Onboarding',
  data: () => ({
    dialog: false,
    lastname: '',
    firstname: '',
    email: '',
    websiteUrl: ''
  })
}
</script>
