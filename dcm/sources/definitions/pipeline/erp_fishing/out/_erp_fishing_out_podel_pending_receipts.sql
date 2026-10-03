define view {{ pipeline.namespace }}._erp_fishing_out_podel_pending_receipts
    comment = 'Supports the table for displaying active POs: '
as

select
    podel.po_identifier,
    podel.po_id,
    podel.line,
    podel.delivery,

    podel.order_date,
    buyer.buyer_name,
    supplier.supplier_name,
    site.site_name,

    podel.part_id,
    part.part_name,
    podel.unitcost,
    podel.currency,

    podel.promise_date,
    podel.expect_date,

    podel.qty_order,
    podel.qty_remaining

from {{ pipeline.namespace }}._erp_fishing_trf_podel as podel
join {{ pipeline.namespace}}._erp_fishing_trf_user_buyer as buyer
    on podel.buyer_id = buyer.buyer_id
join {{ pipeline.namespace }}._erp_fishing_src_supplier as supplier
    on podel.supplier_id = supplier.supplier_id
join {{ pipeline.namespace }}._erp_fishing_src_site as site
    on podel.site_id = site.site_id
join {{ pipeline.namespace }}._erp_fishing_src_part as part
    on podel.part_id = part.part_id
where podel.qty_remaining > 0