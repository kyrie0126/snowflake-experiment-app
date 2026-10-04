import snowflake from 'snowflake-sdk';

// Create a Connection object that we can use later to connect.
const connection =  snowflake.createConnection({
        account: process.env.SNOWFLAKE_ACCOUNT,
        username: process.env.SNOWFLAKE_USER,
        password: process.env.SNOWFLAKE_PASSWORD,
        warehouse: process.env.SNOWFLAKE_WAREHOUSE,
        database: process.env.SNOWFLAKE_DATABASE,
        schema: process.env.SNOWFLAKE_SCHEMA,
        role: process.env.SNOWFLAKE_ROLE,
    });

let connected = false;


async function connectSnowflake(): Promise<void> {
    if (connected) return;

    await new Promise<void>((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject(err);
                return;
            }

            connected = true;
            resolve();
        })
    })
}


export async function querySnowflake(
    sqlText: string,
): Promise<Record<string, any>[]> {

    await connectSnowflake()

    return new Promise((resolve, reject) => {
        connection.execute({
            sqlText,
            complete: (err, stat, rows) => {
                if (err) {
                    reject(err)
                    return
                }

                resolve((rows ?? []) as Record<string, any>[])
            },
        })
    })
}