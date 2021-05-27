<template>
    <div v-if="isError" class="mymodal">
        <div class="modal-content">
            <h3>Upps, coś poszło nie tak!</h3>
            <h6>{{ message }}</h6>
            <div class="d-flex mt-3 center-buttons">
                <button @click.prevent="hide" class="btn btn-light mr-3">
                    Ukryj
                </button>
                <a href="/" class="btn btn-light">Strona główna</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.center-buttons {
    align-items: center;
    justify-content: center;
}
.modal-content {
    text-align: center;
    background-color: #ffb0b0;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}
.mymodal {
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
<script>
export default {
    inject: ["eventBus"],
    created() {
        this.eventBus.$on("error", this.handleError);
    },
    beforeDestroy() {
        this.eventBus.$off("error");
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
