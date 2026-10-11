import "server-only";
import { querySnowflake} from "@/lib/snowflake";
import {
    SiteName
} from "@/lib/data/definitions";


/**
 * Gets sites for sidebar header navigation options
 * @returns A promise that resolves to an array of site_name, side_id, and source_schema
 */
export async function getSites() {
    try {
        const data = await querySnowflake<SiteName[]>(
            `select
                source_schema as "source_schema",
                site_id as "site_id",
                site_name as "site_name"
            from sites`
        );

        return data;
    } catch (error) {
        console.error(`Database Error:`, error);
        throw new Error(`Failed to retrieve site names.`);
    }
}