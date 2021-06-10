<template>
    <div class="container">
        <error />
        Spa component
        <br />
        <navigation />

        <router-view></router-view>
    </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Error from "./components/Error.vue";
export default {
    inject: ["auth"],
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
    },
    components: {
        Navigation,
        Error
    }
};
</script>
