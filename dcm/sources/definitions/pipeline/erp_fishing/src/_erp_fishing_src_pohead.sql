define view {{ pipeline.namespace }}._erp_fishing_src_pohead
    comment = 'Purchase order header landing table'
as

select
    po_id,
    supplier_id,
    buyer_id,
    purchase_order,
    order_date,
    status
from {{ env }}_landing.erp_fishing.pohead