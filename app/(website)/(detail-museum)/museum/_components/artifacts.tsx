import Pagination from "@/components/feature/lib/pagination";
import ParticlesComponent from "@/components/feature/lib/particles";
import ViewArtifact from "@/components/feature/lib/view-artifact";
import { ArtifactProps } from "@/types/artifact";
import { ApiResponse, PaginationProps } from "@/types/response";
import { apiRequest } from "@/utils/api";
import Link from "next/link";
import { Suspense } from "react";

type ArtifactsComponentProps = {
    items: ArtifactProps[];
    pagination: PaginationProps;
};

export const Artifacts: React.FC<{ search: string, zoneId: string }> = async ({ search, zoneId }) => {
    const response = await apiRequest<ApiResponse<ArtifactsComponentProps>>(`/artifacts?zone-id=${zoneId}&search=${search}`);
    const zones = response?.payload?.items || [];
    const paging = response?.payload?.pagination;

    return (
        <>
            {zones && zones.length > 0 && (
                <>
                    <section className="relative grid lg:grid-cols-2 gap-x-7 gap-y-10">
                        {zones && zones.map(item => (
                            <div key={item.artifactId} className="relative rounded-md border border-primary-700 flex gap-5">
                                <div className="absolute left-0 top-0 z-0 w-full h-full">
                                    <Suspense fallback={null}>
                                        <ParticlesComponent id={`particle-${item.artifactId}`} number={50} />
                                    </Suspense>
                                </div>
                                <div className="w-4/6 flex flex-col gap-6 p-7 relative z-10">
                                    <h4 className="text-h4 text-primary-700 line-clamp-2">{item?.title || ""}</h4>
                                    <p className="text-p1 text-grey-900 line-clamp-4">{item?.description || ""}</p>
                                    <Link href={`/artifact/${item.artifactId}`} className="text-p1 underline underline-offset-4 text-primary-700 hover:text-primary-800">View Detail</Link>
                                </div>
                                <div className="w-2/6 h-full">
                                    <Suspense fallback={null}>
                                        <ViewArtifact src={item?.thirdDModelLink || ""} modelId={"primary"} maxDistance={30} isMove={false} />
                                    </Suspense>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Pagination */}
                    <div className="grid justify-center">
                        <Pagination paging={paging} />
                    </div>
                </>
            )}
        </>
    );
}
