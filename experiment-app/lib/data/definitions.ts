export type SiteLocation = {
    source_schema: string,
    site_id: string,
    site_name: string,
    address_street: string,
    address_city: string,
    address_state: string,
    address_zip: string,
}

export type SiteName = {
    source_schema: string,
    site_id: string,
    site_name: string
}


export type PendingReceiptTable = {
    source_schema: string,
    po_identifier: string,
    po_id: string,
    line: number,
    delivery: number,
    order_date: string,
    buyer_name: string,
    supplier_name: string,
    site_name: string,
    part_id: string,
    part_name: string,
    unitcost: number,
    currency: string,
    promise_date: string,
    expect_date: string,
    qty_order: number,
    qty_remaining: number
}