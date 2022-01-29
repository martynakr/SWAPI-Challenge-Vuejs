<template>
    <div class ="films">
        <router-link to="/starships">Starships</router-link>
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
  props: {
  },
  methods: {
  },
  created() {
    document.body.style.backgroundColor = "#75934e";
  },
}
</script>

<style>
  /* @import '.'; */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&family=Orbitron:wght@400;700;800&display=swap');

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 60px;
  }

  .header {
    display: flex;
    justify-content: center;
  }

</style>