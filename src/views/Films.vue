<template>
    <div class ="films">
        <router-link class ="link" to="/starships">See Starships</router-link>
        <div class="header">
          <Header title="Films" :style="{color: '#242424'}"/>
          <img class="img" src="../assets/icons/yoda.svg"/>
        </div>
        <FilmList/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import FilmList from '../components/FilmsList.vue'

export default {
  components: { Header, FilmList },
  name: 'Films',
  created() {
    document.body.style.backgroundColor = "#75934e";
  },
}
</script>

<style>
  @import '../assets/css/Global.css';
</style>