import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { FC } from "react";

export const Showing: FC = () => {
    return (
        <form className="flex gap-3">
            <Label>Show:</Label>
            <Select name="showing">
                <SelectTrigger className="w-34 !h-10">
                    <SelectValue placeholder="10 rows" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="10">10 rows</SelectItem>
                    <SelectItem value="25">25 rows</SelectItem>
                    <SelectItem value="50">50 rows</SelectItem>
                    <SelectItem value="100">100 rows</SelectItem>
                </SelectContent>
            </Select>
        </form>
    );
};
