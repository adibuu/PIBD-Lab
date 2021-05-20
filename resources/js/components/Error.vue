<template>
    <div v-if="isError">
        <div class="modal-content">
            <h3>Upps, coś poszło nie tak!</h3>
            <h6 class="text-justify">{{ message }}</h6>
            <div class="d-flex mt-3">
                <button @click.prevent="hide" class="btn btn-light mr-3">
                    Ukryj
                </button>
                <a href="/" class="btn btn-light">Strona główna</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.$root.$on("error", this.handleError);
    },
    beforeDestroy() {
        this.$root.$off("error");
    },
    data() {
        return {
            isError: false,
            message: ""
        };
    },
    methods: {
        hide() {
            this.isError = false;
        },
        handleError(err) {
            this.isError = true;
            if (err.response) {
                this.message = `${err.response.statusText} - ${err.response.status}`;
            } else {
                this.message = "HTTP Error!";
            }
            console.log(err);
        }
    },
    watch: {
        $route(to, from) {
            this.hide();
        }
    }
};
</script>

<style scoped></style>
