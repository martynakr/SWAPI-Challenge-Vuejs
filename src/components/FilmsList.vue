<template>
    <div class="list">
        <Card buttonText="See more info" v-for="item in items" :key="item.episode_id" :item="item" :id="item.url.split('/')[item.url.split('/').length -2]" name="Film" bgColor='#69573C' color="#fff"/>
    </div>
</template>

<script>
import Card from './Card.vue'
import ItemsService from '../services/ItemsService'

export default {

  components: { Card },
  name: 'FilmsList',
  props: {
  },

  data(){
      return {
          items: []
      }
  },

  created(){
      ItemsService.getItems('/films').then(response => {
          const sorted = response.data.results.sort((a, b) => {
             return parseInt(b.release_date.slice(0, 4)) - parseInt(a.release_date.slice(0, 4))
          })
          this.items = sorted  
      }).catch(err => console.log(err))
  }
}
</script>

<style>
    @import '../assets/css/Global.css';
</style>
