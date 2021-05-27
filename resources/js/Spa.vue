<template>
    <div class="container">
        Spa component
        <br />
        <navigation />
        <error />

        <router-view></router-view>
    </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";

export default {
    inject: ["auth"],
    components: {
        Navigation
    },
    created() {
        axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.response.status === 401) {
                    this.auth.reset();
                }
                return Promise.reject(error);
            }
        );
    }
};
</script>
