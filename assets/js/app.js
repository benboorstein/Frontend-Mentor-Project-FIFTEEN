const App = {
    data() {
        return {
            toggle: false
        }
    },
    computed: {
        priceForBasicPlan() { return this.toggle ? '19.99' : '199.99' },
        priceForProfPlan() { return this.toggle ? '24.99' : '249.99' },
        priceForMasterPlan() { return this.toggle ? '39.99' : '399.99' }
    }
}

Vue.createApp(App).mount('#app')