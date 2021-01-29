<template>
  <div class="admin-form-row">
    <div class="admin-form-row__label">
      <slot name="label">
        <v-label>{{ label }}</v-label>
      </slot>
    </div>
    <div class="admin-form-row__element">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormRow',
  props: {
    label: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.admin-form-row {
  margin-bottom: 16px;
}

.admin-form-row__label {
  margin-bottom: 5px;
}
</style>
