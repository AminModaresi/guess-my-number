<template>
    <base-container v-if="hads < 5">
        <template #header>
            <p>حالا حدس بزن</p>
        </template>
        <template #default>
            <p class="mb-5">الان نوبت اینه که حدس بزنی تعداد شانس شما هم {{ 5 - hads }} تا هست</p>
            <div class="mb-5">
                <span>حدس های شما : </span>
                <ul class="list">
                    <li v-for="(hadsItem, index) in hadsList" :key="index">
                        {{ hadsItem }} 
                    </li>
                </ul>
            </div>
            <p class="mb-5">راهنمایی به شما : {{ help }}</p>
            <div class="mb-5">
                <label class="mb-3 d-block" for="">عدد حدسی شما :</label>
                <input @keydown.enter="checkNumber" v-model.number="Usernumber" class="input-number" type="number">
            </div>
            <button :disabled="!Usernumber" @click="checkNumber" class="btn-next">
                انتخاب
            </button>
        </template>
    </base-container>
    <WinContainer v-else-if="winner" />
    <LoseContainer v-else />
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import WinContainer from '@/components/game/WinContainer.vue'
import LoseContainer from '@/components/game/LoseContainer.vue'
export default {
    components: {
        WinContainer,
        LoseContainer
    },
    setup() {
        let store = useStore()
        let randomNumber = ref("");
        let hads = ref(0);
        let hadsList = ref([])
        let Usernumber = ref("");
        let winner = ref(false)
        let help = ref("")
        let getRandom = (max) => Math.floor(Math.random() * max)
        let setRandomNumber = () => {
            let id = store.getters.ShowSelectedId;
            switch (id) {
                case 1:
                    randomNumber.value = getRandom(10)
                    break;
                case 2:
                    randomNumber.value = getRandom(20)
                    break;
                case 3:
                    randomNumber.value = getRandom(50)
                    break;
                case 4:
                    randomNumber.value = getRandom(100)
                    break;
                default:
                    break;
            }
        }
        let checkNumber = () => {
            hadsList.value.push(Usernumber.value)
            if (hads.value < 5) {
                if (Usernumber.value == randomNumber.value) {
                    winner.value = true
                    hads.value += 10;
                }else if(Usernumber.value > randomNumber.value){
                    help.value = "عدد بزرگی انتخاب کردی"
                }else if(Usernumber.value < randomNumber.value){
                    help.value = "عدد کوچیکی انتخاب کردی"
                }
            }
            hads.value += 1;
            Usernumber.value = ""
        }
        onMounted(() => {
            setRandomNumber()
        })
        return {
            checkNumber,
            Usernumber,
            hads,
            winner,
            hadsList,
            help
        }
    },
}
</script>

<style lang="scss" scoped>
.input-number::-webkit-outer-spin-button,
.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
.input-number[type=number] {
    -moz-appearance: textfield;
}

.input-number {
    border: 1px solid rgba(165, 209, 217, 0.7);
    background: rgba(165, 209, 217, 0.5);
    width: 100%;
    font-size: 1.3rem;
    padding: .5rem 1rem;
    outline: 0px;
}

.list {
    display: inline-flex;
    list-style: none;

    li {
        padding: 0 0.5rem;
    }
}
</style>
