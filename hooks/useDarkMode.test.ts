import rewire from "rewire"
const useDarkModeFile = rewire("./useDarkMode")
const useDarkMode = useDarkModeFile.__get__("useDarkMode")
// @ponicode
describe("useDarkMode", () => {
    test("0", () => {
        useDarkMode()
    })
})
