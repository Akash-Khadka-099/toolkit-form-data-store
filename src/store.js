import { configureStore } from "@reduxjs/toolkit"

import FormSlice from "./states/FormSlice"

const store = configureStore({
    reducer : {
        Form : FormSlice
    }
})


export default store;