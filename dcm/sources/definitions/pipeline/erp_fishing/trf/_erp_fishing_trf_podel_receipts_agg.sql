define view {{ pipeline.namespace }}._erp_fishing_trf_podel_receipts_agg
    comment = 'Pre aggregation of receipts for each PO delivery'
as

select
    po_del.po_id,
    po_del.line,
    po_del.delivery,
    coalesce(sum(po_receipt.receipt_qty),0) as qty_receipt,
    coalesce(sum(po_receipt.accept_qty),0) as qty_accept,
    coalesce(sum(po_receipt.reject_qty),0) as qty_reject
from {{ pipeline.namespace }}._erp_fishing_src_podelivery as po_del
left outer join {{ pipeline.namespace }}._erp_fishing_src_poreceipt as po_receipt
    on po_del.po_id = po_receipt.po_id
    and po_del.line = po_receipt.line
    and po_del.delivery = po_receipt.delivery
group by po_del.po_id, po_del.line, po_del.delivery