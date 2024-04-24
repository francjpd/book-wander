import { travels } from "~/server/stubs/travels"

export default eventHandler(async (event) => {
    const query = getQuery(event)
    // await new Promise<void>(resolve => setTimeout(resolve, 2000));

    return query.continent ? travels.filter(travel => travel.continent === query.continent) : travels


})
