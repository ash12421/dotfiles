import GridBackgroundDemo from "./page"

export default function hi() {
    return (
        <div className="flex flex-1 items-center justify-center">
            <GridBackgroundDemo>
                {Comp}
            </GridBackgroundDemo>
        </div>
    )
}

function Comp() {
    return (
        <p>Hello there</p>
    )
}