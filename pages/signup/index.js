import {useRouter} from "next/router";
import useDarkMode from "use-dark-mode";
import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { setCookie } from "cookies-next";

export default function Signup() {
    const router = useRouter();

    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);
    const [signingUp, setSigningUp] = useState(false);

    const emailRef = React.createRef();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        checkPasswordMatch(newPassword, confirmPassword);
    };

    const handleShowPasswordChange = (event) => {
        setShowPassword(event.target.checked);
    }

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        checkPasswordMatch(password, newConfirmPassword);
    };

    const handleEmailChange = (event) => {
        setEmailTaken(false);
    }

    const checkPasswordMatch = (newPassword, newConfirmPassword) => {
        if (newPassword === '' || newConfirmPassword === '') return setPasswordsMatch(true);

        const match = newPassword === newConfirmPassword;
        setPasswordsMatch(match);
    };

    return (
        <div className="flex min-h-screen flex-col justify-center px-6 pb-24 lg:px-8 bg-white dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-12 w-auto hover:cursor-pointer" src="logo.png" alt="Your Company" onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                }}/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-slate-50">Sign up for your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={async (e) => {
                    e.preventDefault();

                    if (signingUp) return;

                    setSigningUp(true);

                    try {
                        const reqBody = {
                            email: emailRef.current.value,
                            password: password,
                        }

                        await fetch('/api/user/signup', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "text/xml"
                            },
                            body: JSON.stringify(reqBody),
                        }).then(res => {
                            if (res.ok || res.status !== 403) {
                                res.json().then(async json => {
                                    setCookie("accessToken", json.user.accessToken);
                                    setCookie("id", json.user.id);

                                    await router.replace('/');
                                });

                                return;
                            }

                            setEmailTaken(true)
                        });

                    } catch (e) {
                        toast.error('An error occurred.');
                        console.log(e.message);
                    }
                }}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-50">Email</label>
                            {emailTaken && (
                                <label className="text-sm text-red-500">Email is already taken</label>
                            )}
                        </div>
                        <div className="mt-2">
                            <input onChange={handleEmailChange} id="email" name="email" type="email" autoComplete="email" required ref={emailRef} className="bg-white dark:bg-neutral-950 focus:bg-light-focus focus:dark:bg-dark-focus block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-cyan-accent placeholder:text-slate-700 focus:ring-1.5 focus:ring-inset focus:ring-cyan-accent sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-50">Password</label>
                            {!passwordsMatch && (
                                <label className="text-sm text-red-500">Passwords must match</label>
                            )}
                        </div>
                        <div className="mt-2">
                            <input onChange={handlePasswordChange} id="password" name="password" type={`${showPassword ? "text" : "password"}`} autoComplete="current-password" required className={`${!passwordsMatch ? "focus:ring-red-500 ring-red-500" : "focus:ring-cyan-accent ring-cyan-accent"} focus:bg-light-focus bg-white dark:bg-neutral-950 focus:dark:bg-dark-focus block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-slate-50 shadow-sm ring-1 ring-inset  focus:ring-1.5 focus:ring-inset placeholder:text-slate-700 sm:text-sm sm:leading-6`}/>
                        </div>
                        <div className={"mt-3"}>
                            <label className="inline-flex items-center">
                                <div className="relative flex gap-x-3 ml-1">
                                    <div className="flex h-6 items-center">
                                        <input onChange={handleShowPasswordChange} id="showPassword" name="showPassword" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-cyan-accent focus:ring-0 "/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="showPassword" className="font-medium text-slate-50">Show password</label>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-50">Confirm Password</label>
                            {!passwordsMatch && (
                                <label className="text-sm text-red-500">Passwords must match</label>
                            )}
                        </div>
                        <div className="mt-2">
                            <input onChange={handleConfirmPasswordChange} name="confirm-password" type="password" autoComplete="current-password" className={`${!passwordsMatch ? "focus:ring-red-500 ring-red-500" : "focus:ring-cyan-accent ring-cyan-accent"} bg-white dark:bg-neutral-950 focus:bg-light-focus focus:dark:bg-dark-focus block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-slate-50 shadow-sm ring-1 ring-inset focus:ring-1.5 focus:ring-inset placeholder:text-slate-700 sm:text-sm sm:leading-6`}/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center hover:shadow-lg rounded-md bg-cyan-accent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="/signup" className="font-semibold leading-6 text-cyan-accent hover:text-cyan-accent-light"> Create an account</a>
                </p>
            </div>
            <ToastContainer />
        </div>
    )
}