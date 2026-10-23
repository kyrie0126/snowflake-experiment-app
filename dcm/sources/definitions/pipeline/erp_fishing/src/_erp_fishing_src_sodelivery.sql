define view {{ pipeline.namespace }}._erp_fishing_src_sodelivery
    comment = 'Sodelivery landing table'
as

select
    so_id,
    line,
    delivery,
    qty,
    request_date,
    promise_date,
    site_id,
    status
from {{ env }}_landing.erp_fishing.sodelivery