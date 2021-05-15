<template>
    <div>
        Navigation
        <br />
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'login' }">Login</router-link> |
        <a @click.prevent="logout" href>Wyloguj</a> |
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    </div>
</template>
<script>
export default {
    methods: {
        async logout() {
            try {
                await axios.post("/api/logout");
                localStorage.removeItem("isLogged");
                if (this.$route.name != "home") {
                    this.$router.push({ name: "home" });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>
