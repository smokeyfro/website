<script setup lang="ts">
import { NuxtLink } from '#components'
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'primary' | 'outline' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  disabled?: boolean
  block?: boolean
  target?: string
  href?: string
  //custom_class?: string
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'default',
  size: 'md',
})
const as = computed(() => {
  if (props.href) return NuxtLink
  else return 'button'
})
const buttonProps = computed(() => {
  if (props.href) return { to: props.href, target: props.target }
  else return { disabled: props.disabled, type: props.type }
})
</script>
<template>
  <component
    :is="as"
    v-bind="buttonProps"
    :class="[
      'btn',
      {
        'btn-default': variant === 'default',
        'btn-primary': variant === 'primary',
        'btn-outline': variant === 'outline',
        'btn-danger': variant === 'danger',
      },
      {
        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-md': size === 'md',
        'btn-lg': size === 'lg',
        'btn-xl': size === 'xl',
      },
      //custom_class,
    ]"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </component>
</template>