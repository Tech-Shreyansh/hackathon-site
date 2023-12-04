import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from './dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DetailProps {
    handleAdd: (data: any, index: number) => void;
    memberCount: number[];
    setMemberCount: React.Dispatch<React.SetStateAction<number[]>>;
    handleRemove: (index: number) => void;
    index: number;
    members: any[];
    setMembers: React.Dispatch<React.SetStateAction<any[]>>;
}

const Detail: React.FC<DetailProps> = (props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const {
        handleAdd,
        memberCount,
        setMemberCount,
        handleRemove,
        index,
        members,
        setMembers,
    } = props;
    const [show, setShow] = useState([false, false, false, false]);
    const [gender, setGender] = useState<string>('');
    const [branch, setBranch] = useState<string | null>(null);
    const [year, setYear] = useState<string | null>(null);
    const [hosteller, setHosteller] = useState<string | null>(null);

    useEffect(() => {
        const length = memberCount.length;
        setShow((sh) => {
            return sh.map((s, i) => (i === length - 1 ? true : false));
        });
    }, [memberCount]);

    const onSubmit = (data: any) => {
        const new_data = {
            gender,
            branch,
            year,
            hosteller,
            name: data.name,
            email: data.college_email,
            st_no: data.st_no,
            phone_no: data.contact,
            roll_no: data.roll_no,
        };
        handleAdd(new_data, index);
        toast('Updated Successfully', {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    function handleMembers() {
        setMemberCount((prevCount) => [...prevCount, index + 1]);
        const newMember = { id: index + 1 };
        setMembers((prevMembers) => [...prevMembers, newMember]);

        setShow((sh) => sh.map((s, i) => (i === index - 1 ? false : s)));
    }

    function handleCancel() {
        const newMembers = [...memberCount];
        newMembers.splice(index - 1, 1);
        setMemberCount(newMembers);
        const updatedMembers = members.filter((member) => member.id !== index);
        setMembers(updatedMembers);

        setShow((sh) => {
            return sh.map((s, i) => (index > 1 && i === index - 1 ? true : s));
        });
        handleRemove(index);
    }

    return (
        <>
            <section className="newClass w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between">
                        <p className="font-bold text-blue-600 mb-4">{`Member ${index}`} Detail</p>
                        {index > 1 && (
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="rounded bg-red-400 text-white hover:bg-red-500 ease-in duration-150 w-36 h-10 mb-5"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col tablet:flex-row w-full tablet:mb-6 justify-between">
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 max-w-sm justify-between">
                            <label className="text-base font-semibold">Name</label>
                            <br />
                            <input
                                className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-full h-[46px] mt-2"
                                type="text"
                                placeholder="Enter Name"
                                required={false}
                                defaultValue={members[index - 1]?.name}
                                {...register("name", {
                                    pattern: /^(?=.*[a-zA-Z])[a-zA-Z\s]{1,30}$/,
                                })}
                            />
                            {errors.name?.type === "pattern" && (
                                <span className="text-sm text-red-500 mt-1">
                                    Name should be of max 30 alphabetic characters long
                                </span>
                            )}
                        </div>
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 tablet:mx-6 2xl:mx-15 max-w-sm">
                            <label className="text-base font-semibold">College Email</label>
                            <br />
                            <input
                                className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-full h-[46px] mt-2"
                                type="text"
                                placeholder="Enter College Email"
                                {...register("college_email", {
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                                required={false}
                            />
                            {errors.college_email?.type === "pattern" && (
                                <span className="text-sm text-red-500 mt-1">
                                    Enter a valid email id
                                </span>
                            )}
                        </div>
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 max-w-sm">
                            <label className="text-base font-semibold">Student Number</label>
                            <br />
                            <input
                                className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-full h-[46px] mt-2"
                                type="text"
                                placeholder="Enter Student number"
                                required={false}
                                {...register("st_no", {
                                    pattern: /^[0-9]+$/,
                                })}
                            />
                            {errors.st_no?.type === "pattern" && (
                                <span className="text-sm text-red-500 mt-1">
                                    Student number should consist of numbers only
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col tablet:flex-row justify-between w-full tablet:mb-6">
                        <div className="md:w-1/2 tablet:w-2/6 w-full mb-4 tablet:mb-0 max-w-sm">
                            <label className="text-base font-semibold">Phone Number</label>
                            <br />
                            <input
                                className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-full h-[46px] mt-2"
                                type="text"
                                placeholder="Enter Phone Number"
                                {...register("contact", {
                                    pattern: /^[0-9]+$/,
                                })}
                                required={false}
                                maxLength={10}
                                minLength={10}
                            />
                            {errors.contact?.type === "pattern" && (
                                <span className="text-sm text-red-500 mt-1">
                                    Phone number should consist of numbers only
                                </span>
                            )}
                        </div>
                        <div className="md:w-1/2 tablet:w-2/6 w-full mb-4 tablet:mb-0 tablet:mx-6 max-w-sm 2xl:mx-15">
                            <label className="text-base font-semibold">Roll Number</label>
                            <br />
                            <input
                                className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-full h-[46px] mt-2"
                                type="text"
                                placeholder="Enter Roll Number"
                                {...register("roll_no", {
                                    pattern: /^[0-9]+$/,
                                })}
                                required={false}
                            />
                            {errors.roll_no?.type === "pattern" && (
                                <span className="text-sm text-red-500 mt-1">
                                    Roll number should consist of numbers only
                                </span>
                            )}
                        </div>
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 max-w-sm">
                            <label className="text-base font-semibold">Gender</label>
                            <br />
                            <Dropdown
                                items={["male", "female", "others"]}
                                value={gender}
                                setValue={setGender}
                                width="full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col tablet:flex-row justify-between w-full tablet:mb-6">
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 max-w-sm">
                            <label className="text-base font-semibold">Branch</label>
                            <br />
                            <Dropdown
                                items={[
                                    "CSE",
                                    "CS",
                                    "CSE (AIML)",
                                    "CSE (DS)",
                                    "CSIT",
                                    "IT",
                                    "AIML",
                                    "CE",
                                    "EN",
                                    "ME",
                                    "ECE",
                                    "CS (Hindi)",
                                ]}
                                value={branch}
                                setValue={setBranch}
                                width="full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 tablet:mx-6 max-w-sm 2xl:mx-15">
                            <label className="text-base font-semibold">Year</label>
                            <br />
                            <Dropdown
                                items={["2", "3"]}
                                value={year}
                                setValue={setYear}
                                width="full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 tablet:w-2/6 mb-4 tablet:mb-0 max-w-sm">
                            <label className="text-base font-semibold">Hosteller</label>
                            <br />
                            <Dropdown
                                items={["Yes", "No"]}
                                value={hosteller}
                                setValue={setHosteller}
                                width="full"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mb-6 border-b-2 pb-4">
                        <button
                            type="submit"
                            className="rounded bg-blue-500 text-white hover:bg-blue-600 ease-in duration-150 w-24 h-10"
                        >
                            Update
                        </button>
                    </div>
                    {index < 4 && show[index - 1] && (
                        <button
                            type="button"
                            className="rounded bg-yellow-600 text-white hover:bg-yellow-700 ease-in duration-150 w-40 h-10 mb-5"
                            onClick={handleMembers}
                        >
                            + Add {index + 1} Member
                        </button>
                    )}
                </form>
                <ToastContainer />
            </section>
        </>
    )
}

export default Detail
