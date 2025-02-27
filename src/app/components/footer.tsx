import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="min-h-[20vh] bg-white text-center text-[#942D24] py-10 box">
                <h1 className="text-4xl py-4">Contacts</h1>
                <h1 className="text-2xl text-black">
                    <Link
                        href={"#"}
                    >
                supportlafacon@national-u.edu.ph
                </Link></h1>

                <div className="flex space-x-4 justify-center items-center my-5">
                    {/* Twitter Button */}
                    <a
                        href="https://twitter.com/lafacon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        <FaTwitter className="mr-2 text-xl" />
                        @Fit4U
                    </a>

                    {/* Instagram Button */}
                    <a
                        href="https://instagram.com/lafacon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                    >
                        <FaInstagram className="mr-2 text-xl" />
                        @Fit4U
                    </a>
                </div>

                <h1 className="text-2xl text-black">
                    <Link
                        href={"#"}
                    >
                        
                        +6391231234567
                    </Link>
                    </h1>
            </div>
    )
}
