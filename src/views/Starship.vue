<template>
    <div>
        <router-link to="/starships">Back to all starships</router-link>
        <div class="cardContainer">
            <h1 class="title">{{item.name}}</h1>
            <h3>Model: {{item.model}}</h3>
            <p>Max atmosphering speed: {{item.max_atmosphering_speed}}</p>
            <p>Manufacturer: {{item.manufacturer}}</p>
            <p>Starship class: {{item.starship_class}}</p>
            <p>Crew: {{item.crew}}</p>
            <p>Passengers: {{item.passengers}}</p>
        </div>
    </div>
</template>

<script>
import ItemsService from "../services/ItemsService"

export default ({
    props: [],
    data() {
        return {
            item: {}
        }
    },
    created() {
        ItemsService.getItem("starships/", this.$route.params.id).then(response => this.item = response.data)
        document.body.style.backgroundColor = "#001A45";
    }
})
</script>

<style>
    @import '../assets/css/Global.css';
</style>