define view {{ pipeline.namespace }}._erp_fishing_src_part
    comment = 'Part landing table'
as

select
    part_id,
    name as part_name,
    description as part_description,
    type as part_type
from {{ env }}_landing.erp_fishing.part