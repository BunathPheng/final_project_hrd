import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SelectCategories() {
    return (
        <>
            <Select name="category">
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Art</SelectItem>
                    <SelectItem value="2">History</SelectItem>
                    <SelectItem value="3">Science</SelectItem>
                </SelectContent>
            </Select>
        </> 
    )
}