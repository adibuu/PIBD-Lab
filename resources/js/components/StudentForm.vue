<template>
    <form @submit.prevent="$emit('submit', form)">
        <div>
            <input type="text" v-model="form.first_name" placeholder="Imię" />
        </div>
        <div>
            <input
                type="text"
                v-model="form.last_name"
                placeholder="Nazwisko"
            />
        </div>
        <div>
            <input
                type="text"
                v-model="form.index"
                placeholder="Numer indeksu np. s123"
            />
        </div>
        <div>
            <input type="text" v-model="form.email" placeholder="Email" />
        </div>
        <div>
            <input
                type="number"
                step="1"
                v-model="form.age"
                placeholder="Wiek"
            />
        </div>
        <div>
            <input type="checkbox" v-model="form.paid" />
            <label>Student uiścił opłatę</label>
        </div>
        <div>
            <textarea
                v-model="form.description"
                cols="50"
                rows="5"
                placeholder="Opis"
            ></textarea>
        </div>
        <button type="submit">{{ student ? "Aktualizuj" : "Dodaj" }}</button>
    </form>
</template>

<script>
export default {
    props: {
        student: { type: Object }
    },
    data() {
        return {
            form: {
                first_name: this.student?.first_name || "",
                last_name: this.student?.last_name || "",
                index: this.student?.index || "",
                email: this.student?.email || "",
                age: this.student?.age || 18,
                description: this.student?.description || "",
                paid: this.student?.paid || false
            }
        };
    }
};
</script>
