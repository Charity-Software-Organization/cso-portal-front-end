<template>
  <button
    class="cso-button"
    :class="[size ? 'cso-button--' + size : '',{
      'is-plain':plain
    }]"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'CsoButton',
  props: {
    size: {
      type: String,
      default: '',
      validator: value => ['', 'small', 'mini'].includes(value)
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.cso-button {
  display: inline-block;
  background-color: $yellow;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 14px 28px;
  text-align: center;
  vertical-align: middle;
  text-transform: capitalize;
  color: $black-1;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: 0.3s;
  &:hover {
    background-color: $dark-blue;
    color: $white;
  }

  &.is-plain{
    background-color: transparent;
    color: $black-1;
    border: 2px solid $yellow;
    &:hover{
      background-color: $yellow;
      color: $white;
    }
  }

  &--small {
    font-size: 14px;
    padding: 12px 24px;
  }

  &--mini {
    font-size: 12px;
    padding: 10px 20px;
  }
}
</style>
