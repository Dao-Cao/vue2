<template>
   <div>
       login
       {{$store.state.home.count}}
       <button @click="add">add</button>
   </div>
</template>

<script>
export default {
    methods:{
        //派发action
        add(){
            //
            this.$store.dispatch('add');
        }
    }
}
</script>

<style>

</style>