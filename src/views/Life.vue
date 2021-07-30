<template>
  <!-- <hello-world /> -->
  <v-container>
    <v-row>
      <v-col cols="12" lg="10">
        <v-text-field v-model="name"
                      outlined
                      dense
                      label="Nombre"/>
      </v-col>
      <v-col lg="2">
        <v-btn @click="addUser">
          Agregar
        </v-btn>
      </v-col>
    </v-row>
    <List :users="users"></List>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  ref,
  onActivated
} from "@vue/composition-api";
import Lifecycle from "@/components/List.vue";
import List from "@/components/List.vue";
import {User} from "@/models/Users";

export default defineComponent({
  components: {
    Lifecycle,
    List
  },
  setup() {
    const name = ref<string>("")
    const users = ref<User[]>([
      {
        id: 1,
        name: "Amir"
      },
      {
        id: 2,
        name: "Alfredo"
      }
    ])
    const addUser = () => {
      users.value.push({
        id: Date.now(),
        name: name.value
      })
      name.value = ""
    }
    onMounted(() => {
      console.log('HOME Montando')
    })

    onBeforeUpdate(() => {
      console.log('HOME uPDATE')
    })
    return {
      users,
      name,
      addUser
    }
  }
})
</script>
