"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoArrowBack  } from "react-icons/io5";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard"); // Redirect on success
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="">

            <div className="flex border-black border-t-2 min-h-[100vh]">
                <div className="w-1/2 bg-white">

                <Link href="/">
                    <button className="absolute top-6 left-6 text-black hover:text-gray-400 transition duration-200">
                        <IoArrowBack size={40} />
                    </button>
                </Link>

                    <div className="flex flex-col p-8 text-black">
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-20 text-center text-2xl font-bold tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form onSubmit={handleLogin} className="space-y-6">
                                    <div>
                                        <div className="flex items-center">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full max-w-md px-3 py-3 text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 transition-all"
                                            />
                                        </div>

                                        <div className="flex items-center my-5">
                                            <input
                                                type="password"
                                                placeholder="Enter password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full max-w-md px-3 py-3 text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 transition-all"
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-sm">{error}</p>
                                        )}

                                        <div className="flex items-center justify-end">
                                            <div className="text-sm">
                                                <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Not a member?{" "}
                                    <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center w-1/2 bg-[#942D24]">
                    <div className="relative flex items-center">
                        <Image
                            src={"/icons/logo.png"}
                            alt="Showcase"
                            width={250}
                            height={250}
                        />
                        <h1 className="text-8xl">Fit4U</h1>
                    </div>
                    <Image
                        src={"/Home/tlbr.png"}
                        alt="Star Top Left"
                        width={150}
                        height={150}
                        className="absolute top-2 left-20"
                    />
                    <Image
                        src={"/Home/tr.png"}
                        alt="Star Top Right"
                        width={100}
                        height={100}
                        className="absolute top-9 right-32"
                    />
                    <Image
                        src={"/Home/bl.png"}
                        alt="Star Bottom Left"
                        width={80}
                        height={80}
                        className="absolute bottom-9 left-32"
                    />
                    <Image
                        src={"/Home/tlbr.png"}
                        alt="Star Bottom Right"
                        width={150}
                        height={150}
                        className="absolute bottom-2 right-20"
                    />
                </div>
            </div>
        </div>
    );
}
