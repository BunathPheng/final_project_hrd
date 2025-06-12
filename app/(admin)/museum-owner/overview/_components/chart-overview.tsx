/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Innercard from '@/components/feature/card/inner-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChartArea } from 'lucide-react';
import React from 'react';
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip, BarChart, Bar, CartesianGrid } from 'recharts';

// Sample data that matches the trend pattern from your image
const followersData = [
    { month: "Jan", followers: 600 },
    { month: "Feb", followers: 720 },
    { month: "Mar", followers: 250 },
    { month: "Apr", followers: 620 },
    { month: "May", followers: 140 },
    { month: "Jun", followers: 180 },
    { month: "Jul", followers: 350 },
    { month: "Aug", followers: 420 },
    { month: "Sep", followers: 480 },
    { month: "Oct", followers: 520 },
    { month: "Nov", followers: 320 },
    { month: "Dec", followers: 150 }
];



const bookingData = [
    { month: 'Jan', tour: 320, individual: 180 },
    { month: 'Feb', tour: 240, individual: 330 },
    { month: 'Mar', tour: 160, individual: 80 },
    { month: 'Apr', tour: 320, individual: 410 },
    { month: 'May', tour: 80, individual: 400 },
    { month: 'Jun', tour: 320, individual: 330 },
    { month: 'Jul', tour: 320, individual: 180 },
    { month: 'Aug', tour: 240, individual: 330 },
    { month: 'Sep', tour: 160, individual: 80 },
    { month: 'Oct', tour: 320, individual: 410 },
    { month: 'Nov', tour: 80, individual: 400 },
    { month: 'Dec', tour: 320, individual: 330 }
];


interface TooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
                <p className="text-sm font-medium text-gray-900">{`${label}`}</p>
                <p className="text-sm text-gray-600">
                    <span className="font-medium text-red-600">{`Followers: ${payload[0].value.toLocaleString()}`}</span>
                </p>
            </div>
        );
    }
    return null;
};

export const ChartOverview = () => {
    return (
        <div className="grid grid-cols-2 gap-7">
            {/* Area Chart */}
            <Innercard className="">
                <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                        <ChartArea size={20} className="stroke-grey-200 stroke-2" />
                        <h6 className="text-s2 text-grey-900">Followers Trend</h6>
                    </div>
                    <div className="">
                        <Select name="follower">
                            <SelectTrigger className="w-full !h-10">
                                <SelectValue placeholder="This Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">This Year</SelectItem>
                                <SelectItem value="2">Last Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={followersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="followersGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FFB0B0" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#FFB0B0" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke='#dadada' />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                dx={-15}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="linear"
                                dataKey="followers"
                                stroke="#B50000"
                                strokeWidth={2}
                                fill="url(#followersGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Innercard>

            {/* Bar Chart */}
            <Innercard>
                <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                        <ChartArea size={20} className="stroke-grey-200 stroke-2" />
                        <h6 className="text-s2 text-grey-900">Booking Analytics</h6>
                    </div>
                    <div className="">
                        <Select name="booking">
                            <SelectTrigger className="w-full !h-10">
                                <SelectValue placeholder="This Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">This Year</SelectItem>
                                <SelectItem value="2">Last Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={bookingData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid vertical={false} stroke='#dadada' />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                dx={-15}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                        const total = payload
                                            .filter(entry => entry.value !== undefined)
                                            .reduce((sum, entry) => sum + parseFloat(entry.value as string), 0);
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                                                <p className="font-semibold text-gray-800 mb-2">{label}</p>
                                                {payload.map((entry, index) => (
                                                    <div key={index} className="flex items-center gap-2 mb-1">
                                                        <div
                                                            className="w-3 h-3 rounded-sm"
                                                            style={{ backgroundColor: entry.color }}
                                                        />
                                                        <span className="text-sm text-gray-600">
                                                            {entry.dataKey === 'tour' ? 'Tour' : 'Individual'}:
                                                            <span className="font-medium ml-1">{(entry.value || 0).toLocaleString()}</span>
                                                        </span>
                                                    </div>
                                                ))}
                                                <div className="border-t pt-2 mt-2">
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        Total: {total.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Bar
                                dataKey="tour"
                                stackId="a"
                                fill="#B50000"
                            />
                            <Bar
                                dataKey="individual"
                                stackId="a"
                                fill="#FFE6E6"
                            />
                        </BarChart>
                    </ResponsiveContainer >
                </div >
            </Innercard >
        </div>
    );
}
