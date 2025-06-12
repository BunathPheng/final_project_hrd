import Innercard from "@/components/feature/card/inner-card";
import Maincard from "@/components/feature/card/main-card";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { EditZoneInformation } from "../_components/edit-zone-information";
import { AddZoneArtifact } from "../_components/add-zone-artifact";
import ArtifactZone from "../_components/artifact-zone";



export default function DeatailsZone(): JSX.Element {
    const breadcrumbs = ["Home", "Zone", "Details"];
    return (
        <>
            <Breadcrumb main="Musuem Management" items={breadcrumbs} />
            <Maincard>
                <Innercard>
                    <div className="">
                        <h2 className="text-s1 font-bold text-primary-700 border-b-1 border-grey-100 pb-3 mb-7">
                            Detail Zone
                        </h2>
                        <div className="flex justify-between W-full items-center">
                            <h2 className="text-s1 text-grey-900 shrink-0 ">
                                Zone Information
                            </h2>
                            <div className="flex w-full justify-end">
                                <EditZoneInformation />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-7">
                            <div className="flex flex-col gap2 col-span-1">
                                <label className="text-s2 text-grey-400">Name</label>
                                <p className="text-grey-900">Production Zone</p>
                            </div>
                            <div className="flex flex-col gap2 col-span-1 ">
                                <label className="text-s2 text-grey-400">Category</label>
                                <p className="text-grey-900">Historical</p>
                            </div>

                            <div className="flex flex-col gap2">
                                <label className="text-s2 text-grey-400">Video Link</label>
                                <Link href={"https://youtu.be/iPrbvIXAyc0?si=OuiYT9FDNUszaR5S"} className="text-blue underline cursor-pointer">https://youtu.be/iPrbvIXAyc0?si=OuiYT9FDNUszaR5S</Link>
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <label className="text-s2 text-grey-400">Description</label>
                                <p>Main production area with high-priority equipment monitoring</p>
                            </div>
                            <div className="col-span-2  flex flex-col gap-2">
                                <label className="text-s2 text-grey-400">Zone Image</label>
                                <Image src={"https://i.pinimg.com/736x/d0/cc/eb/d0cceb22caaa933087d1ea4c08a9152f.jpg"} className="w-full h-96 object-cover rounded-md" alt="zone-image" width={300} height={100} />
                            </div>
                        </div>
                    </div>
                </Innercard>
                <Innercard>
                    <div className="grid grid-cols-1 gap-5 ">
                        <div className="flex justify-between items-center gap-2">
                            <h1 className="text-s1 shrink-0">Artifact Information</h1>
                            <AddZoneArtifact />
                        </div>
                        <ArtifactZone />
                        <ArtifactZone />
                    </div>
                </Innercard>
            </Maincard>
        </>
    )
}
