define view {{ pipeline.namespace }}._erp_fishing_src_site
    comment = 'Site landing table'
as

select
    site_id,
    name as site_name,
    address_street,
    address_city,
    address_state,
    address_zip
from {{ env }}_landing.erp_fishing.site