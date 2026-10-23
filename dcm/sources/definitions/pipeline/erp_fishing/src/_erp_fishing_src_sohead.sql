define view {{ pipeline.namespace }}._erp_fishing_src_sohead
    comment = 'Sohead landing table'
as

select
    so_id,
    customer_id,
    salesrep_id,
    quote_id,
    sales_order,
    order_date,
    status
from {{ env }}_landing.erp_fishing.sohead