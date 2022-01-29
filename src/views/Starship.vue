<template>
    <div>
        <router-link class ="link" to="/starships">Back to all starships ></router-link>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="cardContainer">
            <h1 class="title">{{item.name}}</h1>
            <h3>Model: {{item.model}}</h3>
            <p><strong>Max atmosphering speed:</strong> {{item.max_atmosphering_speed}}</p>
            <p><strong>Manufacturer:</strong> {{item.manufacturer}}</p>
            <p><strong>Starship class:</strong> {{item.starship_class}}</p>
            <p><strong>Crew:</strong> {{item.crew}}</p>
            <p><strong>Passengers:</strong> {{item.passengers}}</p>
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