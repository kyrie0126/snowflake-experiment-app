import { NextResponse } from "next/server";
import { querySnowflake} from "@/lib/snowflake";

export async function getCurrentUser() {

    try {
        const result = await querySnowflake("select current_user() as user_name, current_database() as database_name");

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}