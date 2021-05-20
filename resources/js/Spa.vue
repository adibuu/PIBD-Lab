<template>
    <div class="container">
        Spa component
        <br />
        <navigation />

        <router-view></router-view>
    </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";

export default {
    created() {
        axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.response.status === 401) {
                    localStorage.removeItem("isLogged");
                    this.$root.$emit("isLogged", false);
                    if (this.$route.path != "/login") {
                        this.$router.push({ name: "login" });
                    }
                }
                return Promise.reject(error);
            }
        );
    },

    components: {
        Navigation
    }
};
</script>
