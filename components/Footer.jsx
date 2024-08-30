import Link from "next/link";
import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {

    return (
        <footer className="bg-black text-white pt-14 pb-3 mt-10">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Destinations
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Travel Packages
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Special Offers
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Travel Blog
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Contact Us
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Customer Support
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                FAQs
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Booking Assistance
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Cancellation Policy
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Information
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About Hafiz Traveller
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Our Story
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Team
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Partnerships
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://www.facebook.com/HafizTraveller", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <Link
                        target="_blank"
                        href="https://wa.me/+923074583567"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaWhatsapp size={20} />
                    </Link>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2024 Hafiz Traveller, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Travel Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Service
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Cookie Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
