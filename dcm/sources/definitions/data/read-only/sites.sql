define dynamic table {{ data.namespace }}.sites
    target_lag = '{{ data.dynamic_table.lag }}'
    warehouse = {{ warehouse }}
as

select
    source_schema,
    site_id,
    site_name,
    address_street,
    address_city,
    address_state,
    address_zip
from {{ pipeline.namespace }}._schema_integration_sites