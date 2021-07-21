<template>
  <div>Passing props to route component: {{ id }}</div>
</template>
<script>
export default {
  name: 'Detail',
  props: ['id']
}
</script>
