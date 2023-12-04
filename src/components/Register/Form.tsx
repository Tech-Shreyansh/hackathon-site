import React, { useCallback, useEffect, useState } from 'react';
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';
import axios from 'axios';
import Dropdown from './dropdown';
import Detail from './MemberDetail';

interface Team {
    name: string;
    size: number;
}

interface FormProps { }

const Form: React.FC<FormProps> = () => {
    interface Member {
        id: number;
        name?: string;
        student_number?: string;
        phone?: string;
        year?: number;
        hosteller?: string;
        gender?: string;
        roll_number?: string;
        branch?: string;
        email?: string;
    }

    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [members, setMembers] = useState<Member[]>([{ id: 1 }]);
    const [memberCount, setMemberCount] = useState([1]);
    const [teamSize, setTeamSize] = useState<string>("0");
    const [teamName, setTeamName] = useState('');
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);
    const [token, setToken] = useState('');
    const [showCaptcha, setShowCaptcha] = useState(false)

    const key = process.env.key || "";

    const handleAdd = (data: any, index: number) => {
        const newMember: Member = {
            id: index,
            name: data.name.trim(),
            student_number: data.st_no.trim(),
            phone: data.phone_no.trim(),
            year: parseInt(data.year),
            hosteller: data.hosteller,
            gender: data.gender,
            roll_number: data.roll_no.trim(),
            branch: data.branch,
            email: data.email.trim(),
        };

        setMembers((prevMembers) => {
            if (prevMembers?.length === 0) {
                return [newMember];
            }

            const updatedMembers = prevMembers.map((m) => {
                if (m.id === index) {
                    return newMember;
                }
                return m;
            });

            if (!updatedMembers.some((m) => m.id === index)) {
                updatedMembers.push(newMember);
            }
            return updatedMembers;
        });
    };

    const handleRemove = (index: number) => {
        var updated = members.filter((m) => m.id !== index);
        updated = updated.map((m) => {
            if (m.id > index) return { ...m, id: m.id - 1 };
            return m;
        });

        setMembers(updated);
    };

    const handleRecaptcha = useCallback((token: React.SetStateAction<string>) => {
        setToken(token);
    }, []);

    const onSubmit = async () => {
        // setShowCaptcha(true)
        setRefreshReCaptcha((r) => !r);
        if (!teamName) {
            return toast('Team Name is required', {
                position: 'top-right',
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
        if (parseInt(teamSize) !== members.length) {
            return toast('Something went wrong! Check your details', {
                position: 'top-right',
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }

        const memberDetail = members.map(({ id, hosteller, ...rest }) => rest);

        const data = {
            team: {
                name: teamName.trim(),
                size: parseInt(teamSize!.toString()),
            },
            members: memberDetail,
            recaptcha_token: token,
        };

        console.warn(data, '108');

        // await axios.post("https://hackubator-backend.silive.in/api/register/", data)
        //     .then((res) => {
        //         console.log(res)
        //         setShowCaptcha(false)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         setShowCaptcha(false)
        //     })
    };

    useEffect(() => {
        const regex = /^(?=.*[a-zA-Z])[\w\s\d]{6,30}$/;
        if (teamName) {
            if (regex.test(teamName)) setError('');
            else setError('Team name should be 6-30 characters long');
        }
    }, [teamName]);

    return (
        <>
            <section className="w-11/12 md:w-4/5 m-16 mx-auto rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-8">
                <p className="text-center text-3xl text-black font-bold">REGISTER</p>
                <div className="w-full mb-6">
                    <label className="text-base font-semibold">Team Name</label>
                    <br />
                    <input
                        className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-full md:w-1/2 h-[46px] mt-2"
                        type="text"
                        placeholder="Enter Team Name"
                        required={true}
                        value={teamName}
                        onChange={(e) => {
                            setTeamName(e.target.value);
                        }}
                    />
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                </div>
                <div className="w-full md:w-1/2 mb-6">
                    <label className="text-base font-semibold">Team Size</label>
                    <br />
                    <Dropdown
                        items={['2', '3', '4']}
                        value={teamSize?.toString()}
                        setValue={setTeamSize}
                        width="full"
                    />
                </div>

                {members.length > 0
                    ? members.map((m, index) => (
                        <Detail
                            key={index}
                            index={index + 1}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                            memberCount={memberCount}
                            setMemberCount={setMemberCount}
                            members={members}
                            setMembers={setMembers}
                        />
                    ))
                    : null}

                {/* google v3 recaptcha */}
                {showCaptcha ? <GoogleReCaptchaProvider reCaptchaKey={key}>
                    <GoogleReCaptcha
                        onVerify={handleRecaptcha}
                        refreshReCaptcha={refreshReCaptcha}
                    />
                </GoogleReCaptchaProvider> : null}

                <div className="flex justify-end w-full">
                    <Button load={load} handleSubmit={onSubmit} />
                </div>
                {/* </form> */}
            </section>
        </>
    )
}
export default Form
