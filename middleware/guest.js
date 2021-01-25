export default function ({$router, store, redirect }) {
    if (store.state.auth.loggedIn) {
        redirect('/')
    }
}