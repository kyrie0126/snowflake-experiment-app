define view {{ pipeline.namespace }}._erp_fishing_src_part_location
    comment = 'Part location landing table'
as

select
    location_id,
    part_id,
    qty
from {{ env }}_landing.erp_fishing.part_location