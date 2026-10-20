define view {{ pipeline.namespace }}._erp_fishing_trf_sodel_shipments_agg
    comment = 'Pre aggregation of shipment quantities per SO delivery'
as

select
    sodel.so_id,
    sodel.line,
    sodel.delivery,
    sum(shipment_qty) as qty_shipped
from {{ pipeline.namespace }}._erp_fishing_src_sodelivery as sodel
left outer join {{ pipeline.namespace }}._erp_fishing_src_soshipment as soshipment
    on sodel.so_id = soshipment.so_id
    and sodel.line = soshipment.line
    and sodel.delivery = soshipment.delivery
group by sodel.so_id, sodel.line, sodel.delivery