<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
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

            <button type="submit" class="btn btn-success mt-3">
                Create Electronic
            </button>
        </form>
    </div>
</template>

<script>
import { createElectronic } from '@/firebase'
import { reactive } from 'vue'
export default {
    setup()
    {
        const form = reactive({ reviewerID: '', reviewerName: '', overall: 0 })
        const onSubmit = async () => {
            await createElectronic({ ...form })
            form.reviewerID = ''
            form.reviewerName = ''
            form.overall = 0
        }
        return { form, onSubmit }
    }
}
</script>