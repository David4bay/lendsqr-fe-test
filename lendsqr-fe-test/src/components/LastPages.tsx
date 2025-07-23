import type { SyntheticEvent } from "react"

interface LastPagesType {
    remainingPages: number 
    handleViews: (args: SyntheticEvent<HTMLButtonElement>) => void
}

function LastPages(props: LastPagesType) {

    const { remainingPages, handleViews } = props

    return (
    <div className="page__style" style={{display: "flex",flexDirection: "row"}}>
        <button onClick={handleViews} className="page__style-button">1</button>
        <button onClick={handleViews} className="page__style-button">2</button>
        <button onClick={handleViews} className="page__style-button">3</button>
        <button onClick={handleViews} className="page__style-button-inactive">{remainingPages}</button>
    </div>
)
}

export default LastPages