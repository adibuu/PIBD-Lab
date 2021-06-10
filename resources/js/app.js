/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Spa from "./Spa.vue";
import Vue from "vue";
import router from "./router";
import { Auth } from "./api/Auth";
require("./bootstrap");

const app = new Vue({
    el: "#app",
    template: "<spa/>",
    components: {
        Spa
    },
    router,
    data: {
        eventBus: new Vue()
    },
    provide() {
        return {
            eventBus: this.eventBus,
            auth: new Auth(this.eventBus, router)
        };
    }
});
