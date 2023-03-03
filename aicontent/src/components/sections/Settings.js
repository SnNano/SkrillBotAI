import { UserContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import BreadCumb from "../layouts/BreadCumb";
import Sidebar from "../layouts/Sidebar";
import { Link } from "react-router-dom";



const Settings = () => {
    const { state } = useContext(UserContext);
    const [isSuccess, setIsSuccess] = useState(false);
    const [referralLink, setReferralLink] = useState('');
    useEffect(() => {
        setReferralLink(`${window.location.origin}/sign-up/${state.user.user.referralId}`);
    }, [state.user.user.referralId])
    const copyToClip = () => {
        navigator.clipboard.writeText(referralLink);
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000)
    }
    return (
        <>
            <BreadCumb header="Settings" />
            <Sidebar />
            <div className="mt-32">
                <div className="flex justify-center p-4 pb-20">
                    <div className="w-[80%] settings bg-white mt-6 rounded-lg shadow-lg">
                        <div className="p-4">
                            <h3 className="font-normal text-lg mb-2">Personal Information</h3>
                            <p className="text-sm text-gray-400">Update your Settings here</p>
                        </div>
                        <hr className="bg-gray-400 my-2" />
                        {/* <div className="p-4">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="currentEmail" className="mb-2 block text-sm font-light">Current Email</label>
                                    <input disabled type="text" className="block rounded-md bg-white border border-gray-200 text-sm py-1 text-center w-full" placeholder={state.user.user.email} />
                                </div>
                                <div>
                                    <label htmlFor="oldPassword" className="mb-2 block text-sm font-light">Old Password</label>
                                    <input type="password" className="block rounded-md bg-white border border-gray-200 text-sm py-1 text-center w-full" placeholder={state.user.user.email} />
                                </div>
                                <div>
                                    <label htmlFor="currentEmail" className="mb-2 block text-sm font-light">Current Email</label>
                                    <input type="text" className="block rounded-md bg-white border border-gray-200 text-sm py-1 text-center w-full" placeholder={state.user.user.email} />
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="mb-2 block text-sm font-light">New Password</label>
                                    <input type="text" className="block rounded-md bg-white border border-gray-200 text-sm py-1 text-center w-full" placeholder={state.user.user.email} />
                                </div>
                            </div>
                        </div> */}
                        <div className="p-4">
                            <div className="flex justify-between items-center flex-row">
                                <h3 className="font-semibold text-gray-700 text-md mb-2">Personalization Settings</h3>
                                <Link to="/billing" className="btn bg-indigo-600 text-white px-4 py-2 rounded-md outline-0 hover:bg-indigo-800 transition ease-in duration-150">Subscribe</Link>
                            </div>
                        </div>
                        <hr className="bg-gray-400 my-2" />
                        <div className="p-4">
                            <div className="flex justify-between items-center flex-row">
                                <h3 className="font-semibold text-gray-700 text-md mb-2">Email</h3>
                                <p className="text-md font-light text-black px-4 py-2 rounded-md ">email@gmail.com</p>
                            </div>
                        </div>
                        <hr className="bg-gray-400 my-2" />
                        <div className="p-4">
                            <div className="flex justify-between items-center flex-row">
                                <h3 className="font-semibold text-gray-700 text-md mb-2">Referral Link</h3>
                                <div>
                                    <p className="text-md font-semibold text-indigo-500 px-4 py-2 rounded-md cursor-pointer" onClick={copyToClip} >Copy referral Link</p>
                                    {isSuccess && <p className="text-md text-purple-700 px-4 py-2 font-light">The text is copied</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Settings