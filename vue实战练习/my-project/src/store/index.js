export default {
    state: {
        searchText: '',
        searchCity: '',
        page: 0
    },
    setPage(newValue) {
        this.state.page = newValue
    },
    getPage() {
        return this.state.page
    }
}