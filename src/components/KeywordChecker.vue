<template>
  <div>
    <v-alert
      dense
      text
      border="left"
      :type="typeCheck"
    ><span v-html="message"></span></v-alert>
  </div>
</template>

<script>
export default {
  name: 'KeywordChecker',
  props: {
    valid: {
      required: true,
      default: false
    },
    successMessage: {
      required: true
    },
    errorMessage: {
      required: true
    }
  },
  computed: {
    typeCheck () {
      return this.valid ? 'success' : 'error'
    },
    message () {
      return this.valid ? this.successMessage : this.errorMessage
    }
  }
}
</script>
