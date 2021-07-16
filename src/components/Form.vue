<template>
    <div>
        Hola
    </div>
</template>

<script>
import defineComponent from '@vue/composition-api';
export default defineComponent({
    setup(){

        nombre:String = 'Nombre';

        const miFuncion = () => {
            
        }

        return {
            nombre,
            miFuncion
        };
    }

})
</script>