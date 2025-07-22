import type { SyntheticEvent, Dispatch, SetStateAction } from "react"
import React from "react"

interface PagesPropType {
    remainingPages: number
    setCurrentPage: Dispatch<SetStateAction<number>>
    refetch: () => void
}

function UserListPages(props: PagesPropType) {

    const { remainingPages, setCurrentPage, refetch } = props

    /*
    This makes a list of pages starting from the first 3 pages
    to the last or just returns a single page.
    */

    function handleViews(e: SyntheticEvent<HTMLSelectElement>) {
        const target = e.target as HTMLSelectElement
        setCurrentPage(Number(target.value))
        refetch()
    }

    const listOfPages = Array.from({length: remainingPages}, (_, i) => i)

    return (
         <article className="userlist__floor">
                <div className="userlist__floor-container">
                    <span>showing</span>
                    <select className="view__rows" onChange={handleViews}>
                        <option value="9">10</option>
                        <option value="10">20</option>
                        <option value="12">50</option>
                        <option value="20">100</option>
                    </select>
                    <span>out of {remainingPages}</span>
                </div>
                <div>
                    <ul className="page__style">
                        {remainingPages ? listOfPages.map((pages) => {
                            if (pages > 2 && pages !== remainingPages - 1) {
                                return <React.Fragment>{null}</React.Fragment>
                            } else {
                                if (pages === remainingPages - 1) {
                                    return (
                                        <div className="page__style" key={pages} style={{display: "flex",flexDirection: "row"}}>
                                            <button className="page__style-button">...</button>
                                            <button className="page__style-button">{pages + 1}</button>
                                        </div>
                                    )
                                }
                                return (
                                    <button className={pages ===  0 ? "page__style-button-inactive" : "page__style-button"}  disabled={pages === 0}>{pages + 1}</button>
                                )
                            }
                        }) : (
                        <button>1</button>
                    )}
                </ul>
            </div>
        </article>
    )
}

export default UserListPages