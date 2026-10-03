define view {{ pipeline.namespace }}._erp_fishing_src_poreceipt
    comment = 'Purchase order delivery receipt landing table'
as

select
    po_id,
    line,
    delivery,
    receipt,
    receipt_qty,
    receipt_date,
    accept_qty,
    reject_qty
from {{ env }}_landing.erp_fishing.poreceipt