<template>
    <v-container>

        <v-row justify="center">

            {{ nombre }}

            <v-col cols="9" >
                <v-card class="mt-4" v-for="usuario in usuarios" :key="usuario.id" >
                    <v-card-title>
                        {{ usuario.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ usuario.username }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        @click="imprimirUsario($event,usuario)"
                        elevation="2"
                        >Guardar</v-btn>
                    </v-card-actions>
                </v-card>
                <!-- <v-card >
                    <v-card-title>
                        Formulario de contacto
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                        v-model="nombre"
                        label="Nombre"
                        hide-details="auto"
                        ></v-text-field>
                        <v-text-field
                        v-model="primerApellido"
                        label="Primer apellido"
                        hide-details="auto"
                        ></v-text-field>
                        <v-text-field
                        v-model="segundoApellido"
                        label="Segundo apellido"
                        hide-details="auto"
                        ></v-text-field>
                        <v-text-field
                        v-model="correo"
                        label="Correo electrónico"
                        hide-details="auto"
                        ></v-text-field>
                        <v-text-field
                        v-model="numero"
                        label="Número de teléfono"
                        hide-details="auto"
                        ></v-text-field>

                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        @click="guardar"
                        elevation="2"
                        >Guardar</v-btn>
                    </v-card-actions>
                </v-card> -->
                
            </v-col>
           
            <!-- <v-text-field label="Another input"></v-text-field> -->
        </v-row>

    </v-container>
    
</template>
<script lang="ts">
import { defineComponent,watch,ref,computed,onMounted,onUpdated } from '@vue/composition-api';

interface Address{
    street:string;
    suite:string;
    city:string;
    zipecode:string;
}

interface User{
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
    completed:boolean;
    address:Address;
}

export default defineComponent({
    setup(){

        const nombre = ref<String>('');
        const primerApellido = ref<String>('');
        const segundoApellido = ref<String>('');
        const correo = ref<String>('');
        const numero = ref<String>('');

        const usuarios = ref<Array<User>>([]);
        

        const nombreCompleto = computed(() => `${nombre.value} ${primerApellido.value} ${segundoApellido.value}`);

        const getUsuario = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            usuarios.value = await response.json() as Array<User>;
        };


        const imprimirUsario = (evt:Event,usuario:User) => {
            console.log(evt);
        }

        onMounted(async() => {
            await getUsuario();

            setTimeout(() => {
                nombre.value = 'Hola mundo';
            }, 1000);
        });

        onUpdated(() => {
            console.log('Se renderizo el componente');
        });

        //


        return {
            nombre,
            primerApellido,
            segundoApellido,
            correo,
            numero,
            imprimirUsario,
            usuarios
            // miFuncion
            // miFuncion
        };
    }

})
</script>