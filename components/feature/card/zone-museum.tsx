import { Button } from '@/components/ui/button';
import { InfoCircle } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ZoneProps = {
    id: number;
    title: string;
    description?: string;
    imageUrl?: string;
    category?: string;
};

type ZoneComponentProps = {
    items: ZoneProps[];
};

const Zones: React.FC<ZoneComponentProps> = ({ items  }) => {

    const displayItems = items.length > 0 ? items : items;

    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-[10px] max-w-96 w-full shrink-0 shadow-sm overflow-hidden "
                    >
                        {/* Image Container */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-700">
                            {item.imageUrl ? (
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-24 h-32 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg shadow-lg flex items-center justify-center">
                                        <div className="w-16 h-20 bg-gradient-to-b from-amber-100 to-amber-300 rounded-md"></div>
                                    </div>
                                </div>
                            )}

                            {/* Category Badge */}
                            {item.category && (
                                    <div className="absolute top-3 right-3">
                                    <span className="bg-primary-700 text-white px-3 py-1 rounded-[4px] text-p4">
                                        {item.category}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-s1 ] text-grey-900 mb-3 leading-tight ">
                                {item.title}
                            </h3>

                            {item.description && (
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                            )}
                            <div className="flex justify-end">
                                <Link href={`/museum-owner/zone/${item.id}`}>
                                <Button size={"sm"} className='text-p4 text-white font-normal'>
                                    <InfoCircle size={20} />
                                    Details 
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    
    );
};

export default Zones;