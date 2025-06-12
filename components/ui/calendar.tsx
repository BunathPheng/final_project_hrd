"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { IconProps } from "iconsax-reactjs"

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    enableYearMonthSelect?: boolean;
}

function Calendars({
    className,
    classNames,
    showOutsideDays = true,
    enableYearMonthSelect = false,
    ...props
}: CalendarProps) {
    const [currentMonth, setCurrentMonth] = React.useState(
        props && 'selected' in props && props.selected instanceof Date
            ? props.selected
            : new Date()
    );


    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - 50 + i);

    const handleMonthChange = (monthIndex: string) => {
        const newDate = new Date(currentMonth.getFullYear(), parseInt(monthIndex), 1);
        setCurrentMonth(newDate);
    };

    const handleYearChange = (year: string) => {
        const newDate = new Date(parseInt(year), currentMonth.getMonth(), 1);
        setCurrentMonth(newDate);
    };

    // Custom Caption component for month/year selection
    const CustomCaption = ({ displayMonth }: { displayMonth: Date }) => {
        if (!enableYearMonthSelect) {
            return (
                <div className="flex justify-center pt-1 relative items-center">
                    <div className="text-sm font-medium">
                        {format(displayMonth, "MMMM yyyy")}
                    </div>
                </div>
            );
        }

        return (
            <div className="flex justify-center pt-2relative items-center space-x-1 bg-white border-b border-gray-100">
                <Select
                    value={displayMonth.getMonth().toString()}
                    onValueChange={handleMonthChange}
                >
                    <SelectTrigger className="w-[110px] h-9 text-sm font-medium border border-gray-200 shadow-sm px-3 py-1 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-primary focus:border-primary">
                        <SelectValue>
                            {months[displayMonth.getMonth()]}
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="z-50">
                        {months.map((month, index) => (
                            <SelectItem key={index} value={index.toString()}>
                                {month}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={displayMonth.getFullYear().toString()}
                    onValueChange={handleYearChange}
                >
                    <SelectTrigger className="w-[90px] h-9 text-sm font-medium border border-gray-200 shadow-sm px-3 py-1 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-primary focus:border-primary">
                        <SelectValue>
                            {displayMonth.getFullYear()}
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-48 z-50">
                        {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        );
    };

    return (
        <DayPicker
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            fixedWeeks
            classNames={{
                months: "flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0",
                month: "space-y-2",
                caption: "flex justify-center pt-2 pb-4 relative items-center min-h-[40px]",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    buttonVariants({ variant: "outlineDate" }),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-1 top-2",
                nav_button_next: "absolute right-1 top-2",
                table: "w-full border-collapse space-y-0 bg-white",
                head_row: "flex bg-white mt-0 bg-white",
                head_cell:
                    "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                row: "flex w-full mt-0 bg-white item-center",
                cell: cn(
                    "relative p-0 text-center text-sm focus-within:relative focus-within:z-20  [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
                    props.mode === "range"
                        ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                        : "[&:has([aria-selected])]:rounded-md"
                ),
                day: cn(
                    buttonVariants({ variant: "white" }),
                    "h-8 w-8 p-0  bg-white text-p3 aria-selected:opacity-100"
                ),
                day_range_start: "day-range-start",
                day_range_end: "day-range-end",
                day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside:
                    "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle:
                    "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                IconLeft: (props: IconProps) => (
                    <ChevronLeft className={cn("h-4 w-4", props.className)} {...props} />
                ),
                IconRight: (props: IconProps) => (
                    <ChevronRight className={cn("h-4 w-4", props.className)} {...props} />
                ),
                Caption: CustomCaption,
            }}
            {...props}
        />
    )
}
Calendars.displayName = "Calendar"

export { Calendars }