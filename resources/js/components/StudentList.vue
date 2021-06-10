<template>
    <div>
        <table>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Nr indeksu</th>
                <th>E-mail</th>
                <th>Wiek</th>
                <th>Płatność</th>
                <th colspan="2">
                    <button v-on:click="$emit('create')">Dodaj</button>
                </th>
            </tr>
            <tr
                v-for="st in students"
                :key="st.id"
                :class="{ mark: st.id == selected }"
            >
                <td>{{ st.first_name }}</td>
                <td>{{ st.last_name }}</td>
                <td>{{ st.index }}</td>
                <td>{{ st.email }}</td>
                <td>{{ st.age }}</td>
                <td>{{ st.paid ? "✔️" : "❌" }}</td>
                <td><button v-on:click="$emit('edit', st)">Edytuj</button></td>
                <td><button v-on:click="$emit('delete', st)">Usuń</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ["students", "student"],
    computed: {
        selected() {
            return this.student?.id;
        }
    }
};
</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}
th {
    text-align: center;
}
td {
    padding: 5px;
}
.mark {
    background-color: yellow;
}
</style>
