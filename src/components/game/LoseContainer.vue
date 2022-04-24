<template>
    <base-container >
         <template #header>
            <p>اوه متاسفانه باختی</p>
        </template>
         <template #default>
            <p class="mb-5">حالا که باختی اگه میخوای ادامه بدی دکمه زیری رو بزن که بریم</p>
            <button @click="restartGame" class="btn-next">
                دوباره
            </button>
        </template>
    </base-container>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        let store = useStore();
        let restartGame = () => {
            store.dispatch("changeComponent" , "select")
            store.dispatch("setIsSelected" , false)
            store.dispatch("setSelectedId" , "")
        }
        return {
            restartGame
        }
    },
}
</script>