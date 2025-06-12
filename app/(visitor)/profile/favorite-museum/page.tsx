import FavoriteMuseum from '@/components/feature/card/favorite-museum';
import { EmptyData } from '@/components/feature/fallback/empty-data';
import Pagination from '@/components/feature/lib/pagination';
import { ApiResponse, PaginationProps } from '@/types/response';
import { apiRequest } from '@/utils/api';
import React from 'react';

type FavoriteMuseumComponentProps = {
    items: FavoriteMuseumProps[];
    pagination: PaginationProps;
}

export type FavoriteMuseumProps = {
    museumId: string;
    museumEmail: string;
    museumName: string;
    logoLink: string;
    museumAddress: string | null;
    isFavorite: boolean;
    favoriteMuseumSchedule: [];
}

interface SearchProps {
    searchParams: Promise<{
        page?: string;
        search?: string;
    }>;
}

const FavoriteMuseumPage = async ({ searchParams }: SearchProps) => {
    const resolveSearchParams = await searchParams;
    const page = resolveSearchParams?.page || '1';
    const search = resolveSearchParams?.search || '';

    const response = await apiRequest<ApiResponse<FavoriteMuseumComponentProps>>(
        `/favorites?page=${page}&search=${search}`
    );

    const museums: FavoriteMuseumProps[] = response?.payload?.items ?? [];
    const paging = response?.payload?.pagination;

    return (
        <section className='bg-white'>
            <h1 className="text-s1 text-grey-900 border-b-1 border-b-grey-100 pb-5 mb-6">
                Favorite Museum
            </h1>

            <FavoriteMuseum items={museums} />
            
            <div className="grid justify-center">
                {museums.length > 0 ? (
                    <Pagination paging={paging} scroll={false} />
                ) : (
                    <div className="text-center py-8">
                        <EmptyData description='Not found Favorite Museum'/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FavoriteMuseumPage; // ✅ Default export only
