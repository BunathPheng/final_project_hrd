import { FC, PropsWithChildren } from "react";

const Maincard: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="grid w-full p-7 gap-7">
            {children}
        </main>
    );
};

export default Maincard;
