define view {{ pipeline.namespace }}._schema_integration_podel_pending_receipts
    comment = 'Integration step combining schema outputs in the event of multiple ERPs'
as

select
    'ERP-FISHING' as source_schema,
    po_identifier,
    po_id,
    line,
    delivery,
    order_date,
    buyer_name,
    supplier_name,
    site_name,
    part_id,
    part_name,
    unitcost,
    currency,
    promise_date,
    expect_date,
    qty_order,
    qty_remaining
from {{ pipeline.namespace }}._erp_fishing_out_podel_pending_receipts