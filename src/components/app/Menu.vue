<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            Estudio Django-Python-Vue
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        clipped-left
        color="primary"
        dark
        dense
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-toolbar-title>Vue js</v-toolbar-title>

    </v-app-bar>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "@vue/composition-api";
import {
  mdiCursorDefaultClick,
  mdiDirections,
  mdiLockPattern,
  mdiPackageVariantClosed,
  mdiPhone,
  mdiVuejs
} from '@mdi/js'

export default defineComponent({
  name: "Menu",
  setup() {
    const items = [
      {title: 'Ciclo de Vida', icon: mdiVuejs, path: '/life'},
      {title: 'Directivas', icon: mdiDirections, path: '/directivas'},
      {title: 'Componentes', icon: mdiPackageVariantClosed, path: '/componentes'},
      {title: 'Props', icon: mdiLockPattern, path: '/props'},
      {title: 'Emits', icon: mdiPhone, path: '/emits'},
      {title: 'Funciones', icon: mdiPhone, path: '/functions'},
      {title: 'Events', icon: mdiCursorDefaultClick, path: '/events'},

    ]
    const drawer = ref(true)

    return {
      items,
      drawer
    }
  }
})

</script>

<style scoped>

</style>