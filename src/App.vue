<template>
    <component :is='IsComponent'></component>
</template>

<script>
import SelectOption from "@/components/select-option/SelectOption.vue"
import GameBox from "@/components/game/GameBox.vue"
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    components : {
      SelectOption,
      GameBox
    },
    setup(){
      let store = useStore()
      let ShowComponent = computed(() => store.getters.ShowComponent)
      let IsComponent = computed(() => {
        if(ShowComponent.value == "select"){
          return SelectOption
        }else{
          return GameBox
        }
      })
      return {
        ShowComponent,
        IsComponent
      }
    }
}
</script>

<style lang="scss">

</style>
