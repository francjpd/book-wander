import { travels } from "~/server/stubs/travels"

export default eventHandler(async (event) => {
    const query = getQuery(event)
    if(!query.continent && !query.search) {
        return travels
    } 
    // await new Promise<void>(resolve => setTimeout(resolve, 2000));

    const ByContinent = (travel: typeof travels[0]) => query.continent === 'all' || travel.continent === query.continent
    const BySearch = (travel: typeof travels[0]) => query.search ? [travel.name, travel.description].find((value: string) => {
        if (value.toLowerCase().includes((query.search as string).toLowerCase())) {
            return value;
        }
    }) : true;

    return travels
        .filter(ByContinent)
        .filter(BySearch);

})
