import Innercard from "@/components/feature/card/inner-card";
import Maincard from "@/components/feature/card/main-card";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/components/ui/upload-file";
import Link from "next/link";
import { JSX } from "react";
import { DatePicker } from "@/components/ui/date-picker";

export default function CreateEventPage(): JSX.Element {
    const breadcrumbs = ["Home", "Events", "Create"];

    return (
        <>
            <Breadcrumb main="Musuem Management" items={breadcrumbs} />
            <Maincard>
                <Innercard>
                    <div className="px-3">
                        <h2 className="text-s1 font-bold text-primary-700 border-b-[2px] pb-3 mb-7">
                            Create Event
                        </h2>
                        <div className="grid grid-cols-2 gap-x-15 gap-y-7 mb-7 ">
                            <div>
                                <Label className="mb-3 ">Title</Label>
                                <Input placeholder="Name" />
                            </div>
                            <div>
                                <Label className="mb-3">Subtitle</Label>
                                <Input placeholder="Subtitle" />
                            </div>
                            <div className="flex flex-col">
                                <Label className="mb-3">Start Date</Label>
                                <DatePicker placeholder="Select Start Date" />
                            </div>
                            <div className="flex flex-col">
                                <Label className="mb-3">End Date</Label>
                                <DatePicker placeholder="Select End Date" />
                            </div>
                            <div>
                                <Label className="mb-3 ">Content</Label>
                                <Textarea
                                    placeholder="Write your Content"
                                    className="h-27 border-grey-400 "
                                />
                            </div>
                            <div>
                                <Label className="mb-3 ">
                                    Accessibility Note
                                </Label>
                                <Textarea
                                    placeholder="Write your Accessibility Note"
                                    className="h-27 border-grey-400 "
                                />
                            </div>
                        </div>
                        <div className="mb-7">
                            <FileUpload multiple={true} maxFiles={10} />
                        </div>
                        <div className="mb-3 border-t-[2px] pt-3">
                            <div className="flex gap-5 justify-end">
                                <Link href="/museum-owner/events">
                                    <Button
                                        size={"md"}
                                        variant="outline"
                                        className="border-primary-700 text-primary-700"
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                                <Link href="/museum-owner/events">
                                    <Button size={"md"}>Save</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Innercard>
            </Maincard>
        </>
    );
}
