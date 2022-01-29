<template>
    <div class="item">
        <router-link class ="link" to="/films">Back to all films ></router-link>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="cardContainer">
            <h1 class="title">{{item.title}}</h1>
            <h3><strong>Director:</strong> {{item.director}}</h3>
            <p><strong>Release date:</strong> {{item.release_date}}</p>
            <p><strong>Produced by:</strong> {{item.producer}}</p>
            <p><strong>Opening crawl:</strong> "{{item.opening_crawl}}"</p>
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
        ItemsService.getItem("films/", this.$route.params.id).then(response => this.item = response.data)
        document.body.style.backgroundColor = "#75934e";
    }
})
</script>

<style>
    @import '../assets/css/Global.css';
</style>
