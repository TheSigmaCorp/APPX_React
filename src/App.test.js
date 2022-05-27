import { render, screen } from "@testing-library/react"
import App from "./App"


describe("Performing Test ...", () => {
    render(<App />);
    test("Check the sidebar Pages", () => {
        let childElement = screen.getByText("Pages");
        expect(childElement).toBeInTheDocument();
    })
    test("Checking if visual elements Exists", () => {
        let childElement = screen.getByText("Elements")
        expect(childElement).toBeInTheDocument();
    })

    test("What happens on Element Click", () => {
        let childElement = screen.getByText("Button")
        expect(childElement).toBeInTheDocument();
    })
})