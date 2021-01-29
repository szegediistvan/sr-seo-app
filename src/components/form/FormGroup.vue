<template>
  <div class="admin-form-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    label: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.admin-form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .admin-form-row {
    flex: 0 0 100%;
  }

  @media only screen and (min-width: 768px) {
    .admin-form-row {
      flex: 1;
      margin-right: 10px;
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
