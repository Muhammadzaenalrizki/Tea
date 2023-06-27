import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Card from "./components/cards/Card.vue";
import router from "./router";

const app = createApp(App);
app.component("Card", Card);
app.use(router);

app.mount("#app");
