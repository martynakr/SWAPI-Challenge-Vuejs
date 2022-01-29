<template>
    <div class="list">
        <Card buttonText="See more info" v-for="(item, i) in items" :key="i" :item="item" :id="item.url.split('/')[item.url.split('/').length -2]" name="Starship" :url="item.url" bgColor="#F6B841" hedColor="#001A45" label="Length"/>
    </div>
</template>

<script>
import Card from './Card.vue'
import ItemsService from '../services/ItemsService'

export default {
  components: { Card },
  name: 'StartshipsList',
  props: {
  },
  methods: {
  },

  data(){
      return {
          items: []
      }
  },

  created(){
      ItemsService.getItems("/starships").then(response => {
          const sorted = response.data.results.sort((a, b) => 
                parseInt(a.length.replace(/,/g,'') ) - parseInt(b.length.replace(/,/g,''))
          )
          this.items = sorted
      console.log(sorted, "sorted")
      }).catch(err => console.log(err))
  }
}
</script>

<style>
    .spaceshipsList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        margin-bottom: 60px;
    }
</style>