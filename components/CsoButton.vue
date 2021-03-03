<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-02 22:04:14
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:21:10
-->
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
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0.875rem 1.75rem;
  text-align: center;
  vertical-align: middle;
  text-transform: capitalize;
  color: $black-1;
  cursor: pointer;
  border-radius: 0.3125rem;
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
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }

  &--mini {
    font-size: 0.75rem;
    padding: 0.625rem 1.25rem;
  }
}
</style>
