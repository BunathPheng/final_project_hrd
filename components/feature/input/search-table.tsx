import { SearchNormal } from "iconsax-reactjs";
import React, { FC } from "react";

export const SearchTable: FC = () => {
    return (
        <form>
            <div className="relative border border-grey-400 rounded-sm h-12 flex items-center px-3">
                <SearchNormal size={18} className="[&>*]:stroke-grey-400" />
                <input
                    type="text"
                    className="outline-none px-3 w-60 placeholder:text-grey-400"
                    placeholder="Search"
                />
            </div>
        </form>
    );
};
