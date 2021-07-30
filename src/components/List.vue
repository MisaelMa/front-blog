<template>
  <ul>
    <Item v-for="(user,i) of users"
          :key="i"
          :user="user"></Item>
  </ul>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType} from "@vue/composition-api";
import Item from "./Item.vue"
import {User} from "@/models/Users";

export default defineComponent({
  name: "List",
  components: {
    Item
  },
  props: {
    users: {
      type: Array as PropType<User[]>,
    }
  },
  setup() {
    onMounted(() => {
      console.log('List Montando')
    })
  }
})
</script>

<style scoped>

</style>