-- define view {{ pipeline.namespace }}._erp_fishing_trf_podel
--     comment = 'Primary transformation for POs at delivery grain'
-- as

-- select
--     po_del.po_id || '-' || po_del.line || '-' || po_del.delivery as po_delivery_identifier,
--     po_del.po_id,
--     po_del.line,
--     po_del.delivery,

--     po_del.site_id,
--     site.site_name,
    
--     po_head.buyer_id,
--     buyer.buyer_name,
--     po_head.supplier_id,
--     supplier.supplier_name,

--     po_head.status as status_head,
--     po_line.status as status_line,
--     po_del.status as status_delivery,

--     po_line.part_id,
--     part.part_name,
--     po_line.unitcost,
--     po_line.currency,

--     po_head.order_date,
--     po_del.promise_date,
--     po_del.expect_date,

--     po_del.qty as qty_order,
--     receipts.qty_receipt,
--     receipts.qty_accept,
--     receipts.qty_reject,
--     case
--         when po_head.status = 'OPEN'
--             and po_line.status = 'OPEN'
--             and po_del.status = 'OPEN'
--             and po_del.qty > receipts.qty_accept
--         then po_del.qty - receipts.qty_accept
--         else 0
--     end as qty_remaining

-- from {{ pipeline.namespace }}._erp_fishing_src_podelivery as po_del
-- join {{ pipeline.namespace }}._erp_fishing_src_poline as po_line
--     on po_del.po_id = po_line.po_id
--     and po_del.line = po_line.line
-- join {{ pipeline.namespace }}._erp_fishing_src_pohead as po_head
--     on po_del.po_id = po_head.po_id
-- join {{ pipeline.namespace }}._erp_fishing_trf_podel_receipts_agg as receipts
--     on po_del.po_id = receipts.po_id
--     and po_del.line = receipts.line
--     and po_del.delivery = receipts.delivery
-- join {{ pipeline.namespace}}._erp_fishing_trf_user_buyer as buyer
--     on po_del.buyer_id = buyer.buyer_id
-- join {{ pipeline.namespace }}._erp_fishing_src_supplier as supplier
--     on po_del.supplier_id = supplier.supplier_id
-- join {{ pipeline.namespace }}._erp_fishing_src_site as site
--     on po_del.site_id = site.site_id
-- join {{ pipeline.namespace }}._erp_fishing_src_part as part
--     on po_del.part_id = part.part_id