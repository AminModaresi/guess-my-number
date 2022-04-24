<template>
    <div @click="SelectedItem" class="select-item" :class="{ 'is-select': ShowIsSelected && ShowSelectedId == id }">
        <p>{{ nameItem }}</p>
        <p>{{ renge }}</p>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
    props: {
        id: {
            type: Number,
            require: true
        },
        nameItem: {
            type: String,
            require: true
        },
        renge: {
            type: String,
            require: true
        }
    },
    setup(props) {
        let store = useStore();
        let isSelect = ref(false)
        let SelectedItem = () => {
            isSelect.value = ShowIsSelected;
            store.dispatch("setIsSelected" , isSelect)
            store.dispatch("setSelectedId" , props.id)
        }

        let ShowIsSelected = computed(() => {
            return store.getters.ShowIsSelected
        })

        let ShowSelectedId = computed(() => {
            return store.getters.ShowSelectedId
        })

        return {
            isSelect,
            SelectedItem,
            ShowIsSelected,
            ShowSelectedId
        }
    }
}
</script>

<style lang="scss" scoped>
.select-item {
    text-align: center;
    border: 2px solid #1111;
    * {
        cursor: pointer !important;
    }
}
.is-select{
    border-color: rgba(108, 228, 71, 0.644);
}
</style>