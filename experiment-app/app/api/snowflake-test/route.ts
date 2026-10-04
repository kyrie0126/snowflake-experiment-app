import { NextResponse } from "next/server";
import { querySnowflake} from "@/lib/snowflake";

export async function GET() {

    try {
        const result = await querySnowflake("select current_user()");

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}