define view {{ pipeline.namespace }}._erp_fishing_trf_part_current_stock
    comment = 'Current stock per site and part'
as

select
    location.site_id,
    part_location.part_id,
    sum(case when location.type = 'AVAILABLE' then part_location.qty else 0 end) as qty_available,
    sum(case when location.type = 'QUARANTINE' then part_location.qty else 0 end) as qty_quarantine
from {{ pipeline.namespace }}._erp_fishing_src_part_location as part_location
join {{ pipeline.namespace }}._erp_fishing_src_location as location
    on part_location.location_id = location.location_id
group by location.site_id, part_location.part_id