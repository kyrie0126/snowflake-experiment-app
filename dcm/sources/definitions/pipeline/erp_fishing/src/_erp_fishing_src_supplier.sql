define view {{ pipeline.namespace }}._erp_fishing_src_supplier
    comment = 'Supplier landing table'
as

select
    supplier_id,
    name as supplier_name,
    address_street,
    address_city,
    address_state,
    address_zip,
    strategic,
    tier
from {{ env }}_landing.erp_fishing.supplier