import { fetchPendingReceipts } from "@/lib/data/purchase-orders/pending-receipts";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";


export default async function PendingReceiptsTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const data = await fetchPendingReceipts(query, currentPage);

    return (
        <Table>
            <TableCaption>A list of purchase order headers.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">PO Identifier</TableHead>
                    <TableHead>Site</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Expected Date</TableHead>
                    <TableHead>Part</TableHead>
                    <TableHead>Qty</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((porel) => (
                    <TableRow key={porel.po_identifier}>
                        <TableCell className="font-medium">
                            <Link className="hover:text-primary"
                                href={`/purchase-orders/${porel.site_name}/${porel.po_identifier}`}
                            >
                                {porel.po_identifier}
                            </Link>
                        </TableCell>
                        <TableCell>{porel.site_name}</TableCell>
                        <TableCell>{porel.supplier_name}</TableCell>
                        <TableCell>{porel.buyer_name}</TableCell>
                        <TableCell>{porel.expect_date}</TableCell>
                        <TableCell>{porel.part_id}</TableCell>
                        <TableCell>{porel.qty_remaining}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell className="text-right">(details)</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}