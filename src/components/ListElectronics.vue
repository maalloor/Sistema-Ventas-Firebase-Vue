<template>
    <div class="card mt-4">
        <table class="table m-0">
            <thead>
                <tr>
                <th scope="col">Reviewer ID</th>
                <th scope="col">Reviewer Name</th>
                <th scope="col">Overall</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, reviewerID, reviewerName, overall } in electronics" :key="id">
                    <td>{{ reviewerID }}</td>
                    <td>{{ reviewerName }}</td>
                    <td>{{ overall }}</td>
                    <td>
                        <router-link :to="`/edit/${id}`">
                            <button class="btn btn-primary btn-sm me-2">
                                Edit
                            </button>
                        </router-link>
                        <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useLoadElectronics, deleteElectronic } from '@/firebase'
export default {
    setup()
    {
        const electronics = useLoadElectronics()
        return { electronics, deleteElectronic }
    }
}
</script>