import PendingReceiptsTable from "@/components/purchase-orders/pending-receipts/pending-receipts-table";
import { fetchPendingReceiptsPages } from "@/lib/data/purchase-orders/pending-receipts";
import Search from "@/components/search";
import Pagination from "@/components/purchase-orders/pending-receipts/pagination";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string,
        page?:string,
    }>
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchPendingReceiptsPages(query);

    return (
        <div>
            <div className="space-y-6 p-6">
                <Search placeholder="Search deliveries..." />
                <PendingReceiptsTable query={query} currentPage={currentPage} />
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    )
}