define view {{ pipeline.namespace }}._erp_fishing_src_soline
    comment = 'Soline landing table'
as

select
    so_id,
    line,
    part_id,
    unit_price,
    currency,
    status
from {{ env }}_landing.erp_fishing.soline