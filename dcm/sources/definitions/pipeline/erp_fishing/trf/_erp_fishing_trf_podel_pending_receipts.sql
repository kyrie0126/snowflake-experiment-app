-- define view {{ pipeline.namespace }}._erp_fishing_trf_podel_pending_receipts
--     comment = 'Active PO releases waiting on receipts from supplier'
-- as

-- select
--     po_delivery_identifier,
--     po_id,
--     line,
--     delivery,

--     site_id,
--     site_name,
    
--     buyer_id,
--     buyer_name,
--     supplier_id,
--     supplie_name,

--     status_head,
--     status_line,
--     status_delivery,

--     part_id,
--     part_name,
--     unitcost,
--     currency,

--     order_date,
--     promise_date,
--     expect_date,

--     qty_order,
--     qty_receipt,
--     qty_accept,
--     qty_reject,
--     qty_remaining
-- from {{ pipeline.namespace }}._erp_fishing_trf_podel
-- where qty_remaining > 0