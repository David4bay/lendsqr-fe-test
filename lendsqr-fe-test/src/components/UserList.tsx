import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import UserListHeader from "./UserListHeader"
import UserListPages from "./UserListPages"
import UserListNav from "./UserListNav"

type StatusType = "inactive" | "pending" | "blacklisted" | "active"

interface EducationType {
    level_of_education: string 
    employment_status: string 
    sector_of_employment: string 
    duration_of_employment: string 
    monthly_income: string 
    loan_repayment: number
}

interface GuarantorType {
    ftrlname: string 
    phone_number: string 
    email: string 
    relationship: string
}

export interface UserListType {
    _id: string 
    index: number 
    non_zero_index: number 
    tier: number 
    bank: string 
    bank_account: number 
    organization: string 
    firstname: string 
    lastname: string 
    username: string 
    email: string 
    phone_number: string 
    join_date: string 
    status: StatusType 
    ftrlname: string 
    bvn: string 
    gender: string 
    marital_status: string 
    children: number 
    type_of_residence: string 
    education: EducationType[]
    age: number 
    facebook: string 
    twitter: string 
    instagram: string 
    guarantor: GuarantorType[]
}


function UserList() {

    const [pages, setPages] = useState<number>(9)
    const [remainingPages, setRemainingPages] = useState<number>(0)
    const [users, setUsers] = useState<UserListType[]>([])
    const [refresh, setRefresh] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)

    const { data, isLoadingError, error, isLoading, refetch } = useQuery({
        queryKey: ["user_list"],
        queryFn: async () => await fetch("/generated.json").then((response) => response.json())
    })

    // console.log("data", data as UserListType[])

    useEffect(() => {
        if (data?.length > 0 && !isLoading && !isLoadingError && !error && refresh) {
            console.log("currentPage", currentPage)
            if (currentPage < 9) {
                setPages(9)
            }

            const nextPage = currentPage + currentPage
            const pageAvailable = nextPage <= 9 ? 9 : nextPage
            console.log("pageAvailable", pageAvailable)
            const viewedPages = data.slice(currentPage, pageAvailable + 1)
            console.log("viewedPages", viewedPages)
            // const originalDataLength = data.length 
            // const pagesLeft = (originalDataLength - pages)
            setRemainingPages(data.length)
            setUsers(viewedPages)
            setRefresh(false)
        }
    }, [currentPage, data, error, isLoading, isLoadingError, pages, refresh])

    // console.log("users", users)

    return (
        <section className="userlist">
            <UserListHeader />
            <UserListNav users={users} />
            <UserListPages refetch={refetch} setCurrentPage={setCurrentPage} remainingPages={remainingPages} />
        </section>
    )
}

export default UserList