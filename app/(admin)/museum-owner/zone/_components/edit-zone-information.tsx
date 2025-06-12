"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FileUpload from "@/components/ui/upload-file"
import { Edit } from "iconsax-reactjs"
import SelectZoneEdit from "./select-zone-edit"
import { Textarea } from "@/components/ui/textarea"

export function EditZoneInformation() {
    return (
        <Dialog>
            <DialogTrigger asChild >
                <Button size={'sm'} className="px-3 font-normal">
                    <Edit size={16} color="#fff" className="[&>*]:stroke-2 text-p4" />
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-2xl bg-white [&>button]:hidden"
                onPointerDownOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle className="text-grey-900 pb-3 border-b-1 border-grey-200">Edit Zone Information</DialogTitle>
                </DialogHeader >
                <div className="grid gap-5 grid-cols-2">
                    <div className="grid gap-3" >
                        <Label>Title</Label>
                        <Input placeholder="Title" defaultValue={"Production Zone"} className="text-grey-900" />
                    </div>
                    <div className="grid gap-3">
                        <Label>Category</Label>
                        <SelectZoneEdit />
                    </div>
                    <div className="grid gap-3 col-span-2">
                        <Label>Video Link</Label>
                        <Input placeholder="Video Link" defaultValue={"https://youtu.be/Zq5fmkH0T78?si=4f54IyLZ0rPgsPlJ"} className="text-grey-900" />
                    </div>
                    <div className="grid gap-3 col-span-2">
                        <Label>Description</Label>
                        <Textarea placeholder="Write description" defaultValue={"Main production area with high-priority equipment monitoring"} className="border-1 border-grey-400" />
                    </div>
                    <div className="grid gap-3 col-span-2 mb-3">
                        <FileUpload title="Update Zone" acceptedFileTypes="PNG, JPG, JPEG, and WEBP" />
                    </div>
                </div>
                <DialogFooter className="space-x-3 mt-3">
                    <DialogClose asChild>
                        <Button size={"md"} variant={"outline"}>Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button size={"md"} className="px-6">Save</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
