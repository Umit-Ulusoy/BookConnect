import {render, screen} from "@testing-library/react"

import Login from "../pages/Login"

test("register should be succesful", () => {
    render(<Login/>)
})



const usernameInput = screen.getByLabelText("Username")
const passwordInput = screen.getByLabelText("Password")
const submitButton = screen.getByRole("Button")



