import React from 'react';
import IconButtonComponent from "@/components/IconButton";
import {FaEye, FaPlus} from "react-icons/fa6";
import Image from "next/image";
import homePageImage from "@/assets/homepage-image.png";

export default function Home() {
    return (
        <div>
            <h1 className={"text-7xl pt-28 pb-20 w-full text-center md:w-2/3 sm:text-left font-semibold"}>
                The secret to getting ahead is getting started.
            </h1>

            <div className={' grid grid-cols-1 lg:grid-cols-2'}>
                <div className={"md:w-fit flex flex-col justify-start items-center gap-6"}>
                    <IconButtonComponent icon={
                        <FaPlus className={"text-3xl"}/>
                    } text={"Create Blog"}/>

                    <IconButtonComponent icon={
                        <FaEye className={"text-3xl"}/>
                    } text={"View Blog"}/>
                </div>

                <Image className={"object-cover"} src={homePageImage} alt={"homepage image"}/>
            </div>
        </div>
    );
}