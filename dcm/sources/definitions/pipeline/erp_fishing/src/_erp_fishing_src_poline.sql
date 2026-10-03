define view {{ pipeline.namespace }}._erp_fishing_src_poline
    comment = 'Purchase order line landing table'
as

select
    po_id,
    line,
    part_id,
    unitcost,
    currency,
    status
from {{ env }}_landing.erp_fishing.poline