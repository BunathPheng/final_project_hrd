import Innercard from '@/components/feature/card/inner-card';
import Maincard from '@/components/feature/card/main-card';
import Zones from '@/components/feature/card/zone-museum';
import { SearchTable } from '@/components/feature/input/search-table';
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { Button } from '@/components/ui/button';
import { LocationTick } from 'iconsax-reactjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { JSX } from 'react'
import SelectCategories from './_components/select-categories';

export default function ZonePage(): JSX.Element {
    const breadcrumbs = ["Home", "Zone"];
    // Sample data if items is empty
    const sampleData = [
     {
        id: 1,
        title: "Angkor Wat Bas-Relief",
        description: "Carvings from Angkor Wat depicting historical and mythological scenes.",
        imageUrl: "https://i.pinimg.com/736x/e8/10/54/e81054b1a622767f6db48c93e9d1dc78.jpg",
        category: "Science"
      },
      {
        id: 2,
        title: "Bayon Temple Faces",
        description: "Iconic smiling faces carved into the towers of Bayon Temple.",
        imageUrl: "https://i.pinimg.com/736x/50/c7/ff/50c7ff48bb3ad8e892677bab2ee5b2c5.jpg",
        category: "Science"
      },
      {
        id: 3,
        title: "Ta Prohm Ruins",
        description: "The jungle-covered ruins where trees grow through ancient stone.",
        imageUrl: "https://i.pinimg.com/736x/53/b0/65/53b0656638812f512ed608ee5a71d573.jpg",
        category: "History"
      },
    {
        id: 4,
        title: "Banteay Srei Carvings",
        description: "Admire the intricate pink sandstone carvings known as the 'Citadel of Women'...",
        imageUrl: "https://i.pinimg.com/736x/40/41/99/40419962d9eb2522d180e54794ab5211.jpg",
        category: "Art"
    },
    {
        id: 5,
        title: "Returned Khmer Statues",
        description: "Statues of deities returned from the MET to Cambodia, reflecting classic Khmer art.",
        imageUrl: "https://i.pinimg.com/736x/a3/12/e9/a312e90250838c780567bcd661732876.jpg",
        category: "Repatriated"
    },
    {
        id: 6,
        title: "Art",
        description: "10th-century Khmer bronze figures repatriated from U.S. collections to Cambodia.",
        imageUrl: "https://i.pinimg.com/736x/d7/3a/00/d73a00b56e70b56f8d663cd668ea875b.jpg",
        category: "Cultural Heritage"
    }
];


    return (
        <>
            <Breadcrumb main="Musuem Management" items={breadcrumbs} />
            <Maincard>
                <Innercard>
                    <div className="flex items-center justify-between w-full gap-5 px-2 pb-3">
                        <div className="flex gap-2 items-center">
                            <LocationTick
                                size={24}
                                className="[&>*]:stroke-primary-700"
                            />
                            <h4 className="text-s1 text-grey-900">Zones</h4>
                        </div>
                        <Link href="/museum-owner/zone/create">
                            <Button size={"md"} className='font-bold'>
                                <Plus size={24} />
                                New Zone
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between w-full gap-5 mt-10">
                        <div className="w-64">
                        <SelectCategories/>
                        </div>
                        <SearchTable />
                    </div>
                    <div className="mt-12">
                        <Zones items={sampleData}  />
                    </div>
                </Innercard>
            </Maincard>
        </>
    )
}
