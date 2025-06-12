import BookingHistory from '@/components/feature/card/booking-history';
import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchNormal } from 'iconsax-reactjs';
import React from 'react'

export default function BookingHistorydPage() {
    //Mork data for booking history
    const mockBookingHistory = [
        {
            id: 1,
            museumName: "Tuol Sleng Genocide Museum",
            description: "The Tuol Sleng Genocide Museum is a museum chronicling the Cambodian genocide. Located in Phnom Penh, it occupies the former site of the notorious Security Prison 21 (S-21) of the Khmer Rouge regime.",
            image: "https://www.cipdh.gob.ar/memorias-situadas/wp-content/uploads/2019/03/11958020455_dde0f72a1d_k-1.jpg",
            ticketPrice: 5.00,
            ticketStatus: "Not Yet",
            bookingType: "Individual"
        },
        {
            id: 2,
            museumName: "Royal Palace Museum",
            description: "The Royal Palace of Cambodia is a complex of buildings which serves as the royal residence of the King of Cambodia. The palace houses the Silver Pagoda and contains many national treasures.",
            image: "https://madmonkeyhostels.com/wp-content/uploads/2019/10/Mad-Monkey-Hostels-Luang-Prabang-Royal-Palace-Museum-A-Complete-Backpackers-Guide.jpg",
            ticketPrice: 10.00,
            ticketStatus: "Not Yet",
            bookingType: "Individual"
        },
        {
            id: 3,
            museumName: "Cambodian War Museum",
            description: "The Cambodian War Museum displays weapons, tanks, and military equipment used during Cambodia's turbulent history. Located in Siem Reap, it provides insight into the country's recent conflicts.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw6aiMqEkSeJ1OaINBT9hnItDqsOmp69bUA&s",
            ticketPrice: 5.00,
            ticketStatus: "Not Yet ",
            bookingType: "Individual"
        },
        {
            id: 4,
            museumName: "National Museum",
            description: "The National Museum of Cambodia is Cambodia's largest museum of cultural history and is the country's leading historical and archaeological museum. It is located in Chey Chumneas, Phnom Penh.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uqYiIGFs__Sy4eWEiUdkuyqKQIUMZ_h41Q&s",
            ticketPrice: 10.00,
            ticketStatus: "Visited",
            bookingType: "Individual"
        },
        {
            id: 5,
            museumName: "Angkor National Museum",
            description: "The Angkor National Museum is an archaeological museum dedicated to the collection, preservation and presentation of Angkorian artifacts. Located in Siem Reap, it showcases the Khmer civilization.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_lJDwSly1o8Tt6Hg7jrek28A7T_yC8MJ8aAa5gCH4o96rmz8E8_NlBy25_IzYmBIM6g&usqp=CAU",
            ticketPrice: 12.00,
            ticketStatus: "Visited",
            bookingType: "Individual"
        }
    ];
    return (
        <>
            <h1 className="text-s1 text-grey-900 border-b-1 border-b-grey-100 pb-5 mb-6">Booking History</h1>
                {/* Section date range picker */}
                <div className="flex justify-end mb-6">
                    <DatePickerWithRange className='max-w-90 w-full '/>
                </div>
                {/* Section search and filter */}
                <div className="flex items-center justify-between lg:flex-row gap-5 mb-6">
                    <div className="relative w-full max-w-90">
                        <Input placeholder="Seach by title..." />
                        <div className="absolute top-0 right-0">
                            <Button type="submit">
                                <SearchNormal size={19} />
                            </Button>
                        </div>
                    </div>
                    <div className="max-w-90 w-full flex flex-col gap-2">
                        <Select name="category">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="All Booking Types" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2">Tour</SelectItem>
                                <SelectItem value="3">Individual</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {/* Booking History */}
                <BookingHistory items={mockBookingHistory} />
            </>
    )
}
