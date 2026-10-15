define view {{ pipeline.namespace }}._erp_fishing_out_sites
    comment = 'Sites'
as

select
    site_id,
    site_name,
    address_street,
    address_city,
    address_state,
    address_zip
from {{ pipeline.namespace }}._erp_fishing_src_site