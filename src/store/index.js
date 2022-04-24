import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedId : "",
    isSelected : false,
    component : "select",
  },
  getters: {
    ShowSelectedId: state => state.selectedId,
    ShowIsSelected: state => state.isSelected,
    ShowComponent: state => state.component,
  },
  mutations: {
    setSelectedId(state, id) {
      state.selectedId = id
    },
    setIsSelected(state, isSelected) {
      state.isSelected = isSelected
    },
    changeComponent(state, component) {
      state.component = component
    }
  },
  actions: {
    setSelectedId(context, id) {
      context.commit('setSelectedId', id)
    },
    setIsSelected(context, isSelected) {
      context.commit('setIsSelected', isSelected)
    },
    changeComponent(context, component) {
     context.commit('changeComponent', component)
    }
  },
  modules: {
  }
})
