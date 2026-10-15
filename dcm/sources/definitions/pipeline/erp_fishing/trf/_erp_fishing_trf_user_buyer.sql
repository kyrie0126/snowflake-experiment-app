define view {{ pipeline.namespace }}._erp_fishing_trf_user_buyer
    comment = 'Filtered user table to buyers'
as

select
    user_id as buyer_id,
    first_name || ' ' || last_name as buyer_name,
    email,
    responsibility
from {{ pipeline.namespace }}._erp_fishing_src_user
where role = 'Buyer'