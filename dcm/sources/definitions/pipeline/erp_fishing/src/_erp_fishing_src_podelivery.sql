define view {{ pipeline.namespace }}._erp_fishing_src_podelivery
    comment = 'Purchase order delivery landing table'
as

select
    po_id,
    line,
    delivery,
    qty,
    promise_date,
    expect_date,
    site_id,
    status
from {{ env }}_landing.erp_fishing.podelivery