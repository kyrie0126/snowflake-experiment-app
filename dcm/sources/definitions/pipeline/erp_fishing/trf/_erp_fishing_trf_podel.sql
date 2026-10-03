define view {{ pipeline.namespace }}._erp_fishing_trf_podel
    comment = 'Current state POs at delivery grain'
as

select
    po_del.po_id || '-' || po_del.line || '-' || po_del.delivery as po_identifier,
    po_del.po_id,
    po_del.line,
    po_del.delivery,

    po_head.order_date,
    po_head.buyer_id,
    po_head.supplier_id,
    po_del.site_id,

    po_head.status as status_head,
    po_line.status as status_line,
    po_del.status as status_delivery,

    po_line.part_id,
    po_line.unitcost,
    po_line.currency,

    po_del.promise_date,
    po_del.expect_date,

    po_del.qty as qty_order,
    receipts.qty_receipt,
    receipts.qty_accept,
    receipts.qty_reject,
    case
        when po_head.status = 'OPEN'
            and po_line.status = 'OPEN'
            and po_del.status = 'OPEN'
            and po_del.qty > receipts.qty_accept
        then po_del.qty - receipts.qty_accept
        else 0
    end as qty_remaining

from {{ pipeline.namespace }}._erp_fishing_src_podelivery as po_del
join {{ pipeline.namespace }}._erp_fishing_src_poline as po_line
    on po_del.po_id = po_line.po_id
    and po_del.line = po_line.line
join {{ pipeline.namespace }}._erp_fishing_src_pohead as po_head
    on po_del.po_id = po_head.po_id
join {{ pipeline.namespace }}._erp_fishing_trf_podel_receipts_agg as receipts
    on po_del.po_id = receipts.po_id
    and po_del.line = receipts.line
    and po_del.delivery = receipts.delivery