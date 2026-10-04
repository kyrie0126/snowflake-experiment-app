define dynamic table {{ data.namespace }}.podel_pending_receipts
    target_lag = '{{ data.dynamic_table.lag }}'
    warehouse = {{ warehouse }}
as

select
    source_schema
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
from {{ pipeline.namespace }}._schema_integration_podel_pending_receipts