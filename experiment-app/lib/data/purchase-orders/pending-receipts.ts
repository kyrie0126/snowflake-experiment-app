import "server-only";
import { querySnowflake} from "@/lib/snowflake";
import {
    PendingReceiptTable
} from "@/lib/data/definitions";


const ITEMS_PER_PAGE = 10;

export async function getPendingReceipts(currentPage: number): Promise<PendingReceiptTable[]> {
    try {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        console.log({
            ITEMS_PER_PAGE,
            currentPage,
            offset: (currentPage - 1) * ITEMS_PER_PAGE,
        });
        const data = await querySnowflake<PendingReceiptTable[]>(
            `select
                source_schema as "source_schema",
                po_identifier as "po_identifier",
                po_id as "po_id",
                line as "line",
                delivery as "delivery",
                order_date as "order_date",
                buyer_name as "buyer_name",
                supplier_name as "supplier_name",
                site_name as "site_name",
                part_id as "part_id",
                part_name as "part_name",
                unitcost as "unitcost",
                currency as "currency",
                promise_date as "promise_date",
                expect_date as "expect_date",
                qty_order as "qty_order",
                qty_remaining as "qty_remaining"
            from podel_pending_receipts
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
            `
        );

        return data;
    } catch (error) {
        console.error(`Database Error:`, error);
        throw new Error(`Failed to retrieve pending receipts.`);
    }
}


/**
 * 
 */
export async function fetchPendingReceipts(
    query: string,
    currentPage: number
): Promise<PendingReceiptTable[]> {

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        const data = await getPendingReceipts(currentPage);
        return data;
    }

    try {
        const searchPattern = `%${normalizedQuery}%`
        const data = await querySnowflake<PendingReceiptTable[]>(
            `select
                source_schema as "source_schema",
                po_identifier as "po_identifier",
                po_id as "po_id",
                line as "line",
                delivery as "delivery",
                order_date as "order_date",
                buyer_name as "buyer_name",
                supplier_name as "supplier_name",
                site_name as "site_name",
                part_id as "part_id",
                part_name as "part_name",
                unitcost as "unitcost",
                currency as "currency",
                promise_date as "promise_date",
                expect_date as "expect_date",
                qty_order as "qty_order",
                qty_remaining as "qty_remaining"
            from podel_pending_receipts
            where
                lower(po_identifier) like ? or
                lower(site_name) like ? or
                lower(supplier_name) like ? or
                lower(buyer_name) like ? or
                lower(part_id) like ? or
                to_varchar(expect_date) like ? or
                to_varchar(qty_remaining) like ?
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
            `,
            Array(8).fill(searchPattern)
        );
        return data;
    } catch (error) {
        console.error(`Database Error:`, error);
        throw new Error(`Failed to retrieve pending receipts.`);
    }
}


export async function fetchPendingReceiptsPages(query: string) {

    const normalizedQuery = query.trim().toLowerCase();

    try {
        const searchPattern = `%${normalizedQuery}%`
        const data = await querySnowflake<{count: Number}[]>(
            `select
                count(*) as "count"
            from podel_pending_receipts
            where
                lower(po_identifier) like ? or
                lower(site_name) like ? or
                lower(supplier_name) like ? or
                lower(buyer_name) like ? or
                lower(part_id) like ? or
                to_varchar(expect_date) like ? or
                to_varchar(qty_remaining) like ?
            `,
            Array(8).fill(searchPattern)
        );
        const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error(`Database Error:`, error);
        throw new Error(`Failed to fetch number of pages for pending receipts.`);
    }
}