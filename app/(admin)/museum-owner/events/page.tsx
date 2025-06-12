"use client";

import Events from "@/components/feature/card/event";
import Innercard from "@/components/feature/card/inner-card";
import Maincard from "@/components/feature/card/main-card";
import { SearchTable } from "@/components/feature/input/search-table";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/feature/lib/pagination";
import { Calendar } from "iconsax-reactjs";
import { Plus } from "lucide-react";
import React, { JSX, useState } from "react";
import Link from "next/link";

type EventProps = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description?: string;
    startDate: string;
    endDate: string;
};

export default function EventsPage(): JSX.Element {
    const breadcrumbs = ["Home", "Events"];

    const [events, setEvents] = useState<EventProps[]>([
        {
            id: 1,
            title: "International Museum Day",
            image: "/card/event-1.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 2,
            title: "International Museum Day",
            image: "/card/event-2.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 3,
            title: "International Museum Day",
            image: "/card/event-3.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 4,
            title: "International Museum Day",
            image: "/card/event-1.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 5,
            title: "International Museum Day",
            image: "/card/event-2.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 6,
            title: "International Museum Day",
            image: "/card/event-3.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 7,
            title: "International Museum Day",
            image: "/card/event-1.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
        {
            id: 8,
            title: "International Museum Day",
            image: "/card/event-2.jpg",
            subtitle: "A Global Celebration of Museums and Their Impact",
            description:
                "International Museum Day (IMD) is an annual event held on May 18 , organized by the International Council of Museums (ICOM) in cooperation with UNESCO. This special day unites museums, cultural institutions, and communities around the world to highlight the essential role that museums play in preserving heritage, promoting education, fostering intercultural dialogue, and driving sustainable development.",
            startDate: "June 12, 2025",
            endDate: "June 13, 2025",
        },
    ]);

    const handleDeleteEvent = (id: number) => {
        setEvents((prevEvents) =>
            prevEvents.filter((event) => event.id !== id)
        );
    };

    return (
        <>
            <Breadcrumb main="Musuem Management" items={breadcrumbs} />
            <Maincard>
                <Innercard>
                    <div className="flex items-center justify-between w-full gap-5">
                        <div className="flex gap-2 items-center">
                            <Calendar
                                size={24}
                                className="[&>*]:stroke-primary-700"
                            />
                            <h4 className="text-s1 text-grey-900">Events</h4>
                        </div>
                        <div className="flex gap-6 items-center">
                            <SearchTable />
                            <Link href="/museum-owner/events/create">
                                <Button>
                                    <Plus size={24} />
                                    New Event
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full grid mt-12 gap-12">
                        <section className="grid gap-7 w-full">
                            <section className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-7 xl:gap-10">
                                <Events
                                    items={events}
                                    isMuseumOwner={true}
                                    onDelete={handleDeleteEvent}
                                />
                            </section>
                            <div className="flex items-center justify-between">
                                <p className="text-p1 text-grey-900">
                                    {events.length} of {events.length} results
                                </p>
                                <Pagination />
                            </div>
                        </section>
                    </div>
                </Innercard>
            </Maincard>
        </>
    );
}
