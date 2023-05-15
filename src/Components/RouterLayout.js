import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { Provider } from "react-redux"
import store from "../store/store"



export const RouterLayout = () => {
    return (
        <Provider store={store}>
            <div>
                <Navigation />
            </div>

            <main>
                <Outlet />
            </main>
        </Provider>
    )
}