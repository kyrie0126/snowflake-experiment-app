

export default async function Page(
    {
        params
    }: 
    {
        params: Promise<{
            'site-name': string;
            'po-identifier': string;
        }>;
    }
) {
    const { 'site-name': siteName, 'po-identifier': poIdentifier } = await params;

    return (
        <div>
            <p>Site Name: {siteName}</p>
            <p>Purchase Order: {poIdentifier}</p>
        </div>
    )
}