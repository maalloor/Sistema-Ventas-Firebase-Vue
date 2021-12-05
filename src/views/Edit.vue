<template>
    <div class="card card-body mt-4">
        <h3>Edit users</h3>
        <form @submit.prevent="update">
            <div class="form-group">
                <label>Reviewer ID</label>
                <input v-model="form.reviewerID" class="form-control" required />
            </div>

            <div class="form-group">
                <label>Reviewer Name</label>
                <input v-model="form.reviewerName" class="form-control" required />
            </div>

            <div class="form-group">
                <label>Overall</label>
                <input v-model="form.overall" class="form-control" type="number" required />
            </div>

            <button type="submit" class="btn btn-primary  mt-3">
                Update
            </button>
        </form>
    </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getElectronic, updateElectronic } from '@/firebase'
export default {
    setup() {
        const router = useRouter()
        const route = useRoute()
        const electronicId = computed(() => route.params.id)
        const form = reactive({ reviewerID: '', reviewerName: '', overall: 0 })
        onMounted(async () => {
            const electronic = await getElectronic(electronicId.value)
            console.log(electronic, electronicId.value)
            form.reviewerID = electronic.reviewerID
            form.reviewerName = electronic.reviewerName
            form.overall = electronic.overall
        })
        const update = async () => {
            await updateElectronic(electronicId.value, { ...form })
            router.push('/')
            form.reviewerID = ''
            form.reviewerName = ''
            form.overall = ''
        }
        return { form, update }
    }
}
</script>