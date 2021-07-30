<template>
  <div>
    Directivas

    <v-row>
      <v-col v-for="( dir , i) of directivas" cols="3">
        <v-card>
          <v-card-text>
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            {{ i }} {{ dir.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    {{ directivas }}
    <div v-pre>
      {{ directivas }}
    </div>
    <v-data-table
        :items="directivas"
        hide-default-footer
        item-key="name"
        ref="tabla"
        class="elevation-1"
        @click.native="hola()"
    >
      <template v-slot:item="{ item }">

        <tr>
          <td> {{ item.text }}</td>
          <td>{{ item.ejemplo }}</td>
        </tr>
      </template>
    </v-data-table>

    <div v-text="message"></div>
    vif {{ vif }}
    <div v-if="vif" v-html="html"></div>
    <div v-else> AMIR</div>
    <br>
    <br>
    <br>
    <br>

    {{ show }}
    <div v-on:click="hola"
         v-show="show"
         @click="hola">Victor
    </div>
    <v-btn @click="show=!show">
      SHOW
    </v-btn>
    <v-btn @click="vif=!vif">
      V-IF
    </v-btn>
  </div>
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
  name: "Directivas",
  setup() {
    const directivas = ref([
      {
        text: 'v-model',
        ejemplo: ``
      },
      {
        text: 'v-text',
        ejemplo: ``
      },
      {
        text: 'v-html',
        ejemplo: ``
      },
      {
        text: 'ref & v-ref',
        ejemplo: ``
      },
      {
        text: ' v-show',
        ejemplo: ``
      },
      {
        text: ' v-if',
        ejemplo: ``
      },
      {
        text: '  v-else-if',
        ejemplo: ``
      },
      {
        text: ' v-else',
        ejemplo: ``
      },
      {
        text: 'v-transition',
        ejemplo: ``
      },
      {
        text: 'v-for',
        ejemplo: ``
      },
      {
        text: 'v-pre',
        ejemplo: ``
      },

    ])

    const tabla = ref(null)
    const show = ref<boolean>(false)
    const vif = ref<boolean>(false)

    const message = 'Hola'
    const html = `
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    `

    onMounted(() => {

    })
    const hola = () => {
      console.log('hola')
    }
    return {
      directivas,
      message,
      html,
      hola,
      show,
      tabla,
      vif
    }
  }
})
</script>

<style scoped>

</style>