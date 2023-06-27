<template>
    <Card>
        <div id="wrapper"></div>
    </Card>
    <Card>
        <div id="wrapper2"></div>
    </Card>
</template>
<script>
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

export default {
    mounted() {
        new Grid({
            columns: ["Name", "Email", "Phone Number"],
            pagination: true,
            search: true,
            sort: true,
            resizable: true,
            data: [
                ["John", "john@example.com", "(353) 01 222 3333"],
                ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
                ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
                ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
                ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
            ]
        }).render(document.getElementById("wrapper"));
        new Grid({
            columns: ['Title', 'Director', 'Producer'],
            pagination: true,
            search: {
                server: {
                    url: (prev, keyword) => `${prev}?search=${keyword}`
                }
            },
            server: {
                url: 'https://swapi.dev/api/films/',
                then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])
            }
        }).render(document.getElementById("wrapper2"));
    }
}

</script>