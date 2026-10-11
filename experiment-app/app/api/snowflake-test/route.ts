import { NextResponse } from "next/server";
import { querySnowflake} from "@/lib/snowflake";
import { Site } from "@/lib/data/definitions";

export async function GET() {
    
    try {
        const result = await querySnowflake<Site[]>(
            `select
                source_schema,
                site_id,
                site_name,
                address_street,
                address_city,
                address_state,
                address_zip
            from sites`
        );

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}