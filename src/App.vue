<template>
  <h1>Coins Market</h1>
  <InputSearch
    @filter-value="filterValue"
  />
  <TableCoins
    :filter="filter"
  />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
  
export default {

  name: 'App',
  components:{
    InputSearch: defineAsyncComponent( () => import ('@/components/InputSearch')),
    TableCoins: defineAsyncComponent( () => import ('@/components/TableCoins.vue'))
  },

  data(){
    return {
      filter: ''
    }
  },

  methods:{
    filterValue( value ){
      this.filter = value
    }
  }

}
</script>

<style>
  body{
    
    background-image: linear-gradient(90deg, #171717, #444444 );
    color: #fff;
  }
</style>