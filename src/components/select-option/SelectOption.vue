<template>
    <base-container>
        <template #header>
            <p>
                انتخاب محدوده حدس
            </p>
        </template>
        <template #default>
            <p class="mb-5">
                شما میتوانید در سطح های مختلف انتخاب داشته باشید .
            </p>
            <div class="row">
                <div v-for="(selectItem , index) in  selectItems" :key="index" class="col-6 mb-5">
                    <SelectOptionItem :id="selectItem.id" :name-item="selectItem.nameItem" :renge="selectItem.renge"/>
                </div>
            </div>
            <button @click="changePage" :disabled="!ShowSelectedId" class="btn-next">
                انتخاب
            </button>
        </template>
    </base-container>
</template>

<script>
import SelectOptionItem from "./SelectOptionItem.vue"
import { computed } from "@vue/reactivity"
import { useStore } from "vuex"
export default {
    components : {
        SelectOptionItem
    },
    setup() {
        let store = useStore()
        let selectItems = [
            {id : 1 , nameItem : "سطح ساده" , renge : "۰ تا ۱۰"},
            {id : 2 , nameItem : "سطح متوسط" , renge : "۰ تا ۲۰"},
            {id : 3 , nameItem : "سطح سخت" , renge : "۰ تا ۵۰"},
            {id : 4 , nameItem : "سطح بسیار سخت" , renge : "۰ تا ۱۰۰"},
        ] 
        let ShowSelectedId = computed(() => {
            return store.getters.ShowSelectedId
        })
        let changePage = () => {
            store.dispatch('changeComponent' , 'game')
        }
        return {
            changePage,
            selectItems,
            ShowSelectedId,
        }
    },
}
</script>
