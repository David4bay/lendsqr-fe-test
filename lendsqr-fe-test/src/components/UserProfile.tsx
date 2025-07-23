import { Link, useParams } from "react-router-dom"
import type { GuarantorType, UserListType } from "./UserList"
import { useQuery } from "@tanstack/react-query"

function UserProfile() {

    const userId = useParams().id

    console.log("userId", userId)

    const { data, isLoadingError, error, isLoading } = useQuery({
        queryKey: ["user_profile"],
        queryFn: async () => await fetch("/generated.json").then((response) => response.json()),
        select: (users) => users.find((user: UserListType) => user._id === userId)
    })

    if (isLoading || isLoadingError) return <p>Loading....</p>

    if (error) return <p>No user with such id exists.</p>

    console.log("userId", userId, "userData", data)

    return (
        <>
        <article>
        <div>
            <div>
                <div>
                    <Link to="/users">
                        <img src="/back-logo.png" alt="go back to previous page icon" />
                        <span className="">
                        Back to Users
                        </span>
                    </Link>
                </div>
                <div>
                    <h3>User Details</h3>
                </div>
                <div>
                    <div>
                        <button>
                            Blacklist User
                        </button>
                        <button>
                            Activate User
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <h3>{data.username}</h3>
                            <p>{data._id}</p>
                        </div>
                    </div>
                    <div>
                        <span className="">User's Tier</span>
                        {Array.from({length: 3}, (_, i) => i + 1).map((userTier) => {
                            if (data.tier < userTier) {
                                return (
                                    <>
                                        <img src="/unfilled-star.png" alt="user's tier icon" />
                                    </>
                                )
                            } else {
                                return (
                                    <img src="/filled-star.png" alt="user's tier icon" />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h3>{data.monthly_income}</h3>
                        <p>
                            {data.bank_account}/{data.bank}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        General Details 
                    </li>
                    <li>
                        Documents 
                    </li>
                    <li>
                        Bank Details 
                    </li>
                    <li>
                        Loans 
                    </li>
                    <li>
                        Savings 
                    </li>
                    <li>
                        App and System
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h4>Personal Information</h4>
                <div>
                    <span className="">
                        full name
                    </span>
                    <strong className="">
                        {data.fullname}
                    </strong>
                </div>
                <div>
                    <span className="">
                        phone number
                    </span>
                    <strong className="">
                        {data.phone_number}
                    </strong>
                </div>
                <div>
                    <span className="">
                        email address
                    </span>
                    <strong className="">
                        {data.email}
                    </strong>
                </div>
                <div>
                    <span className="">
                        bvn
                    </span>
                    <strong className="">
                        {data.bvn}
                    </strong>
                </div>
                <div>
                    <span className="">
                        gender
                    </span>
                    <strong className="">
                        {data.gender}
                    </strong>
                </div>
                <div>
                    <span className="">
                        marital status
                    </span>
                    <strong className="">
                        {data.marital_status}
                    </strong>
                </div>
                <div>
                    <span className="">
                        children
                    </span>
                    <strong className="">
                        {data.children}
                    </strong>
                </div>
                <div>
                    <span className="">
                        type of residence
                    </span>
                    <strong className="">
                        {data.type_of_residence}
                    </strong>
                </div>
            </div>
            <div>
                <h4>Education and Employment</h4>
                <div>
                    <div>
                        <span className="">
                        level of education
                        </span>
                        <strong className="">
                        {data.level_of_education}
                        </strong>
                    </div>
                    <div>
                        <span className="">
                        employment status
                        </span>
                        <strong className="">
                        {data.employment_status}
                        </strong>
                    </div>
                    <div>
                        <span className="">
                        sector of employment
                        </span>
                        <strong className="">
                        {data.sector_of_employment}
                        </strong>
                    </div>
                    <div>
                        <span className="">
                        duration of employment
                        </span>
                        <strong className="">
                        {data.duration_of_employment}
                        </strong>
                    </div>
                    <div>
                        <span className="">
                        office email
                        </span>
                        <strong className="">
                        {data.official_email}
                        </strong>
                    </div>
                    <div>
                        <span className="">
                        monthly income
                        </span>
                        <strong className="">
                        {data.monthly_income_1}-{data.monthly_income_2}
                        </strong>
                    </div>
                    <div>
                        <span className="">
                        loan repayment
                        </span>
                        <strong className="">
                        ₦{data.loan_repayment}
                        </strong>
                    </div>
                </div>
            </div>
            <div>
                <h4>Socials</h4>
                <div>
                    <div>
                        <span>
                        twitter
                        </span>
                        <strong>
                        {data.twitter}
                        </strong>
                    </div>
                    <div>
                        <span>
                        facebook
                        </span>
                        <strong>
                        {data.facebook}
                        </strong>
                    </div>
                    <div>
                        <span>
                        instagram
                        </span>
                        <strong>
                        {data.instagram}
                        </strong>
                    </div>
                </div>
            </div>
            <div>
                {data.guarantor.map((relative: GuarantorType) => (
                     <div key={relative.fullname}>
                        <div>
                            <span className="">
                            full name
                            </span>
                            <strong className="">
                            {data.fullname}
                            </strong>
                        </div>
                        <div>
                            <span className="">
                            phone number
                            </span>
                            <strong className="">
                            {relative.phone_number}
                            </strong>
                        </div>
                        <div>
                            <span>
                            email
                            </span>
                            <strong className="">
                            {relative.email}
                            </strong>
                        </div>
                        <div>
                            <span>
                                relationship
                            </span>
                            <strong>
                            {relative.relationship}
                            </strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </article>
        </>
    )
}

export default UserProfile