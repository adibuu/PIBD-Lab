<template>
    <div class="container">
        Dashboard
        <div v-if="user">Zalogowany użytkownik: {{ user }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: null
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        async getUser() {
            try {
                let user = await axios.get("/api/user");
                this.user = user.data.name;
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>
