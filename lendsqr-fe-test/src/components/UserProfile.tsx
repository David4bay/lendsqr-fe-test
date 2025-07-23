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
        <article className="single__user">
        <div className="single__user-container user__action">
            <div className="user__action-container navigate">
                <div className="navigate__back">
                    <Link to="/users" className="navigate__text">
                        <img src="/back-logo.png" alt="go back to previous page icon" />
                        <span className="">
                        Back to Users
                        </span>
                    </Link>
                </div>
                <div className="user__action__container">
                    <h3 className="user__action__container-title">User Details</h3>
                        <div className="actions">
                            <button className="blacklisted small-blacklist">
                                Blacklist User
                            </button>
                            <button className="active small-activate">
                                Activate User
                            </button>
                        </div>
                </div>
            </div>
            <div>
                <div className="top__header">
                    <div className="header">
                        <div className="header__section-avatar">
                            <div className="avatar">
                                    <img src="/avatar.png" alt="user avatar icon" className="avatar__image" />
                                <div className="avatar__details">
                                    <h3 className="avatar__details-title">
                                        {data.fullname}
                                    </h3>
                                    <p className="avatar__details-id">{data._id.slice(0, 11)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="header__section-tier">
                            <span className="tier__title">User's Tier</span>
                            <div className="tier__ratings">
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
                        </div>
                        <div className="header__section-income">
                            <h3 className="income__amount">₦{data.monthly_income_2.toLocaleString("en-NG")}</h3>
                            <p className="income__bank">
                                {data.bank_account}/{data.bank}
                            </p>
                        </div>
                    </div>
            <div>
                <ul className="header__nav">
                    <li className="header__nav-item">
                        General Details 
                    </li>
                    <li className="header__nav-item">
                        Documents 
                    </li>
                    <li className="header__nav-item">
                        Bank Details 
                    </li>
                    <li className="header__nav-item">
                        Loans 
                    </li>
                    <li className="header__nav-item">
                        Savings 
                    </li>
                    <li className="header__nav-item">
                        App and System
                    </li>
                </ul>
            </div>
                </div>
            </div>
        </div>
        <div className="bio">
            <div className="bio__info">
                <h4 className="bio__info-title">Personal Information</h4>
                <div className="bio__info-details">
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            full name
                        </span>
                        <strong className="stat__info">
                            {data.fullname}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            phone number
                        </span>
                        <strong className="stat__info">
                            {data.phone_number}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            email address
                        </span>
                        <strong className="stat__info">
                            {data.email}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            bvn
                        </span>
                        <strong className="stat__info">
                            {data.bvn}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            gender
                        </span>
                        <strong className="stat__info">
                            {data.gender}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            marital status
                        </span>
                        <strong className="stat__info">
                            {data.marital_status}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            children
                        </span>
                        <strong className="stat__info">
                            {data.children}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                            type of residence
                        </span>
                        <strong className="stat__info">
                            {data.type_of_residence}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="bio__info-2">
                <h4 className="bio__info-title">Education and Employment</h4>
                <div className="bio__info-details">
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        level of education
                        </span>
                        <strong className="stat__info">
                        {data.level_of_education}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        employment status
                        </span>
                        <strong className="stat__info">
                        {data.employment_status}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        sector of employment
                        </span>
                        <strong className="stat__info">
                        {data.sector_of_employment}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        duration of employment
                        </span>
                        <strong className="stat__info">
                        {data.duration_of_employment}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        office email
                        </span>
                        <strong className="stat__info">
                        {data.official_email}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        monthly income
                        </span>
                        <strong className="stat__info">
                        ₦{data.monthly_income_1.toLocaleString("en-NG")}-{data.monthly_income_2.toLocaleString("en-NG")}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        loan repayment
                        </span>
                        <strong className="stat__info">
                        ₦{data.loan_repayment.toLocaleString("en-NG")}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="bio__info-3">
                <h4 className="bio__info-title">Socials</h4>
                <div className="bio__info-details">
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        twitter
                        </span>
                        <strong className="stat__info">
                        {data.twitter}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        facebook
                        </span>
                        <strong className="stat__info">
                        {data.facebook}
                        </strong>
                    </div>
                    <div className="details__section-container stat">
                        <span className="stat__title">
                        instagram
                        </span>
                        <strong className="stat__info">
                        {data.instagram}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="bio__info-4">
                <h4 className="bio__info-title">Guarantor</h4>
                {data.guarantor.map((relative: GuarantorType) => (
                     <div className="bio__info-details" key={relative.fullname}>
                        <div className="details__section-container stat">
                            <span className="stat__title">
                            full name
                            </span>
                            <strong className="stat__info">
                            {data.fullname}
                            </strong>
                        </div>
                        <div className="details__section-container stat">
                            <span className="stat__title">
                            phone number
                            </span>
                            <strong className="stat__info">
                            {relative.phone_number}
                            </strong>
                        </div>
                        <div className="details__section-container stat">
                            <span className="stat__title">
                            email
                            </span>
                            <strong className="stat__info">
                            {relative.email}
                            </strong>
                        </div>
                        <div className="details__section-container stat">
                            <span className="stat__title">
                                relationship
                            </span>
                            <strong className="stat__info">
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