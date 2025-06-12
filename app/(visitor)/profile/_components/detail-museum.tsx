"use client"

import { ArrowRight2 } from "iconsax-reactjs";
import Image from "next/image";
import { FC } from "react";
import QR from "../../../../public/banner/image 20.png";

// Sample booking data - replace with actual data from props or API
const bookingData = {
    bookingId: "BK2025-001",
    museum: "National Museum of Cambodia",
    bookingType: "Individual",
    bookingDate: "May 29, 2025",
    ticketType: "Local",
    purchasedDate: "May 10, 2025",
    ticketPrice: 1000,
    slotAmount: 2,
    ticketStatus: "Valid"
};

// Define TypeScript types for type safety
type BookingData = {
    bookingId: string;
    museum: string;
    bookingType: string;
    bookingDate: string;
    ticketType: string;
    purchasedDate: string;
    ticketPrice: number;
    slotAmount: number;
    ticketStatus: 'Valid' | 'Invalid' | 'Expired';
};

type BookingInfoItemProps = {
    label: string;
    value: string | number;
    isStatus?: boolean;
};

// Component for individual booking information items
const BookingInfoItem: FC<BookingInfoItemProps> = ({ label, value, isStatus = false }) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'valid':
                return 'text-green-600 text-center bg-green-50 px-2  rounded-md';
            case 'invalid':
                return 'text-red-600 text-center bg-red-50 px-2  rounded-md';
            case 'expired':
                return 'text-orange-600 text-center bg-orange-50 px-2  rounded-md';
            default:
                return 'text-gray-900';
        }
    };

    return (
        <div className="flex flex-col items-start border-grey-100">
            <div className="">
                <div className="flex flex-col text-start">
                    <span className="text-grey-500">{label}</span>
                    <span className={`font-semibold ${isStatus ? getStatusColor(value.toString()) : 'text-grey-900'}`}>
                        {value}
                    </span>
                </div>
            </div>
        </div>
    );
};
export const DetailsBooking: FC = () => {
    return (
        <>
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 pb-6 text-s1 border-b border-gray-200">
                <h1 className="text-grey-900 ">My Booking</h1>
                <ArrowRight2 size={20} color="#a1a1a1" />
                <h1 className="text-grey-400">Booking Details</h1>
            </div>

            {/* Booking Information Card */}
            <div className="mt-8">
                <h2 className="text-h4 text-h4 text-grey-900 mg-2">Booking Details</h2>
                <p className="text-p1 text-grey-400 mb-6">Detailed view of your museum booking</p>

                <div className="border-1 boder-grey-400 rounded-[10px] p-4">
                    <h1 className="text-s1 text-grey-900 mb-6">Booking information</h1>
                    {/* Left and Right Column Layout */}
                    <div className="flex gap-96">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4">
                            <BookingInfoItem
                                label="Booking ID"
                                value={bookingData.bookingId}

                            />
                            <BookingInfoItem
                                label="Booking Type"
                                value={bookingData.bookingType}
                            />
                            <BookingInfoItem
                                label="Ticket Type"
                                value={bookingData.ticketType}
                            />
                            <BookingInfoItem
                                label="Ticket Price"
                                value={`${bookingData.ticketPrice} riels`}
                            />
                            <BookingInfoItem
                                label="Ticket Status"
                                value={bookingData.ticketStatus}
                                isStatus={true}
                            />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            <BookingInfoItem
                                label="Museum"
                                value={bookingData.museum}
                            />
                            <BookingInfoItem
                                label="Booking Date"
                                value={bookingData.bookingDate}
                            />
                            <BookingInfoItem
                                label="Purchased Date"
                                value={bookingData.purchasedDate}
                            />
                            <BookingInfoItem
                                label="Slot Amount"
                                value={bookingData.slotAmount}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* QR */}
            <div className="mt-8 border-1 boder-grey-400 rounded-[10px] p-4">
                <h2 className="text-s1 text-grey-900 mb-3">QR Code</h2>
                <p className="text-p1 text-grey-400 mb-6">Scan this QR Ticket</p>
                {/* Placeholder for QR Code */}
                <div className="w-full h-64  flex items-center justify-center rounded-lg">
                    <Image src={QR}
                    alt="QR Code"
                     width={200}
                        height={200}
                    ></Image>
                </div>
            </div>
        </>
    );
};

// Export type definitions for use in other components
export type { BookingData, BookingInfoItemProps };