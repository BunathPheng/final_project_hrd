import Image from "next/image";
const HeroSection = () => {
    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        width={500} height={500}
                        src="https://images.adsttc.com/media/images/6358/360b/acba/9b1c/93ec/8d10/large_jpg/good-design-for-a-museum-display-case-pushing-the-limits-of-minimalism-and-functionality_4.jpg?1666725412"
                        alt="Background Image"
                        className="object-cover object-center w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-5xl font-bold leading-tight mb-10">
                        StoryTime at The Met Exploring AAPI Art
                    </h1>
                    <div className="text-justify">
                        <p className="text-lg font-semibold">
                            Look, listen, sing, and have fun with StoryTime!
                            Join us every Tuesday and Thurday for picture-
                        </p>
                        <p className="text-lg font-semibold ">
                            book readings connected to objects in The Met
                            collection.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroSection;
