const MyNameApp = {
    data() {
        return {
            name: "Wendy",
            age: "27",
            student: "Administração"
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");