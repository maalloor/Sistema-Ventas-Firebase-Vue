<template>
    <CreateElectronic />
    <ListElectronics />
</template>

<script>
import CreateElectronic from '@/components/CreateElectronic.vue'
import ListElectronics from '@/components/ListElectronics.vue'
export default {
    name: 'Home',
    components: { CreateElectronic, ListElectronics }
}
</script>