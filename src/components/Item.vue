<template>
  <li>
    {{ user.name }}
  </li>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType} from "@vue/composition-api";
import Item from "./Item.vue"
import {User} from "@/models/Users";

export default defineComponent({
  name: "Item",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    }
  },
  setup(props) {
    onMounted(() => {
      console.log('Item Montado', props.user.name)
    })
  }
})
</script>

<style scoped>

</style>