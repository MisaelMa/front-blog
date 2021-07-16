<template>
  <!-- <hello-world /> -->
  <v-container>
      <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-list>
        <v-list-item-group >
          <v-list-item @click="imprimirHola">Formulario</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'

  export default Vue.extend({
    name: 'Home',
    data: function(){
      return ({

      });
    },
    components: {
      HelloWorld,
    },
    methods:{
      imprimirHola(evt:Event){
        // console.log(this.$router.push);
        this.$router.push({name:'Formulario'});
      }
      
    }
  })
</script>
