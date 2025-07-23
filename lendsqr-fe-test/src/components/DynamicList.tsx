import type { SyntheticEvent } from "react"

interface DynamicListType {
    listOfPages: number[]
    handleViews: (args: SyntheticEvent<HTMLButtonElement>) => void
    remainingPages: number
    currentPage: number
}

function DynamicList(props: DynamicListType) {

    const { listOfPages, handleViews, remainingPages, currentPage } = props

    return (
        <>
        {listOfPages.map((pages) => {
                                if (pages === listOfPages[listOfPages.length - 1]) {
                                    return (
                                        <div className="page__style" key={pages} style={{display: "flex",flexDirection: "row"}}>
                                            <button className="page__style-button" disabled>...</button>
                                            <button onClick={handleViews} className="page__style-button">{remainingPages}</button>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <button 
                                        key={pages} 
                                        onClick={handleViews}
                                        className={pages ===  currentPage ? "page__style-button-inactive" : "page__style-button"}  
                                        disabled={pages === currentPage}>
                                            {pages}
                                        </button>
                                    )
                                }
                            }
                        )}
        </>
    )
}

export default DynamicList