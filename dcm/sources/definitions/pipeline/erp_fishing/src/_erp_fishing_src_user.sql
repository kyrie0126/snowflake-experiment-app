define view {{ pipeline.namespace}}._erp_fishing_src_user
    comment = 'User landing table'
as

select
    user_id,
    first_name,
    last_name,
    email,
    responsibility,
    role
from {{ env }}_landing.erp_fishing.user