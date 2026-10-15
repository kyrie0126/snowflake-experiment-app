define view {{ pipeline.namespace }}._schema_integration_sites
    comment = 'Schema integration of all sites'
as

select
    'ERP-FISHING' as source_schema,
    site_id,
    site_name,
    address_street,
    address_city,
    address_state,
    address_zip
from {{ pipeline.namespace }}._erp_fishing_out_sites