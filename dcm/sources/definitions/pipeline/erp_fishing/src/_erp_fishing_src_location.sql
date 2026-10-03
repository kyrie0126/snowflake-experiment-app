define view {{ pipeline.namespace }}._erp_fishing_src_location
    comment = 'Location landing table'
as

select
    location_id,
    site_id,
    type
from {{ env }}_landing.erp_fishing.location