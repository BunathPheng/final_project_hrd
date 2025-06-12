"use client";

import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendars } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "iconsax-reactjs";

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    enableYearMonthSelect?: boolean;
    disabled?:boolean;
    allowManualInput?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    placeholder = "Select Date",
    className,
    disabled = false,
    enableYearMonthSelect = true,
    allowManualInput = false,
}) => {
    const [date, setDate] = React.useState<Date | undefined>(value);
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    // Update internal state when value prop changes
    React.useEffect(() => {
        setDate(value);
        if (value) {
            setInputValue(format(value, "yyyy-MM-dd"));
        } else {
            setInputValue("");
        }
    }, [value]);

    const handleDateChange = (selectedDate: Date | undefined) => {
        // Fix timezone issues by creating a new date in local timezone
        if (selectedDate) {
            const localDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
            setDate(localDate);
            if (onChange) {
                onChange(localDate);
            }
            // Close popover when date is selected
            setIsOpen(false);
            if (allowManualInput) {
                setInputValue(format(localDate, "yyyy-MM-dd"));
            }
        } else {
            setDate(undefined);
            if (onChange) {
                onChange(undefined);
            }
            if (allowManualInput) {
                setInputValue("");
            }
        }
    };

    // Handle manual input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        
        // Try to parse the input as a date - be more flexible
        if (inputValue.length >= 4) {
            const parsedDate = new Date(inputValue);
            
            // Check if it's a valid date and reasonable year
            if (!isNaN(parsedDate.getTime()) && 
                parsedDate.getFullYear() > 1900 && 
                parsedDate.getFullYear() < 2100) {
                handleDateChange(parsedDate);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const parsedDate = new Date(inputValue);
            if (!isNaN(parsedDate.getTime())) {
                handleDateChange(parsedDate);
                setIsOpen(false);
            }
        }
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const handleInputBlur = () => {
        if (inputValue.trim() === "") {
            setDate(undefined);
            return;
        }
        
        const parsedDate = new Date(inputValue);
        if (!isNaN(parsedDate.getTime()) && 
            parsedDate.getFullYear() > 1900 && 
            parsedDate.getFullYear() < 2100) {
            handleDateChange(parsedDate);
        } else if (date) {
            // Reset to current date value if input is invalid
            setInputValue(format(date, "yyyy-MM-dd"));
        } else {
            // Clear invalid input
            setInputValue("");
            setDate(undefined);
        }
    };

    if (allowManualInput) {
        return (
            <div className="relative">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                onBlur={handleInputBlur}
                                onFocus={() => setIsOpen(true)}
                                placeholder="e.g. 2024-03-15, March 15 2024, 03/15/2024"
                                className={cn(
                                    "flex h-10 w-full rounded-md border border-grey-400 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                    className
                                )}
                            />
                            <Calendar 
                                
                                size={19} 
                                color="#a1a1a1" 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendars
                            mode="single"
                            selected={date}
                            onSelect={handleDateChange}
                            initialFocus
                            
                            className="w-[320px] sm:w-auto"
                            enableYearMonthSelect={enableYearMonthSelect}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outlineDate"}
                    disabled={disabled}
                    className={cn(
                        "w-full p-2 justify-start text-left font-normal border-grey-400",
                        !date && "text-muted-foreground",
                        className
                    )}
                >
                    <Calendar size={19} color="#a1a1a1" className="mr-2" />
                    {date ? (
                        format(date, "MMMM do, yyyy")
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendars
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                    className="w-[320px] sm:w-auto"
                    enableYearMonthSelect={enableYearMonthSelect}
                />
            </PopoverContent>
        </Popover>
    );
};