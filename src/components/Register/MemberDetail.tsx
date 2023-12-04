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
    const [year, setYear] = useState<number | null>(null);
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
                        {/* ... rest of your code ... */}
                    </div>
                    <div className="flex flex-col tablet:flex-row justify-between w-full tablet:mb-6">
                        {/* ... rest of your code ... */}
                    </div>
                    <div className="flex flex-col tablet:flex-row justify-between w-full tablet:mb-6">
                        {/* ... rest of your code ... */}
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
