define view {{ pipeline.namespace }}._erp_fishing_src_soshipment
    comment = 'Soshipment landing table'
as

select
    so_id,
    line,
    delivery,
    shipment,
    shipment_qty,
    shipment_date
from {{ env }}_landing.erp_fishing.soshipment