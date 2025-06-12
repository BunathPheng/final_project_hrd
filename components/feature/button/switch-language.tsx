"use client";
import { ArrowDown2 } from "iconsax-reactjs";
import Image from "next/image";
import React, { useState } from "react";

type SupportedLanguage = "en" | "kh";
type DisplayLanguage = "Khmer(KH)" | "English(UK)";
type SwitchLanguageProps = {
    color?: string | null;
};

export const SwitchLanguage: React.FC<SwitchLanguageProps> = ({ color }) => {
    const [language, setLanguage] = useState<DisplayLanguage>("English(UK)");

    const switchLang = (lang: SupportedLanguage): void => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        lang == "kh" ? setLanguage("Khmer(KH)") : setLanguage("English(UK)");
    };

    return (
        <form className="">
            <div className="flex relative w-27 group cursor-pointer z-50">
                <div className="flex w-full justify-between items-center gap-2">
                    <p className={color ? color : "text-grey-400"}>
                        {language}
                    </p>
                    <ArrowDown2
                        size={21}
                        className={color ? color : "text-grey-400"}
                    />
                </div>
                <div className="bg-white shadow-2xl rounded h-0 overflow-hidden translate-y-3 group-hover:translate-y-0 transition-all group-hover:h-fit absolute top-full left-0 flex flex-col w-full">
                    <button
                        onClick={() => switchLang("kh")}
                        type="button"
                        className="cursor-pointer flex items-center gap-2 p-2 h-full w-full hover:bg-gray-200"
                    >
                        <Image
                            src="/flag/khmer.svg"
                            width={18}
                            height={12}
                            alt="Khmer"
                        />
                        <span className="">Khmer</span>
                    </button>
                    <button
                        onClick={() => switchLang("en")}
                        type="button"
                        className="cursor-pointer flex items-center gap-2 p-2 h-full w-full hover:bg-gray-200"
                    >
                        <Image
                            src="/flag/english.svg"
                            width={18}
                            height={12}
                            alt="English"
                        />
                        <span className="">English</span>
                    </button>
                </div>
            </div>
        </form>
    );
};
