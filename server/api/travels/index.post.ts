import { useId } from "nuxt/app";
import { travels } from "~/server/stubs/travels"


export default eventHandler(async (event) => {
    const body = await readBody(event)
    travels.push({
        ...body,
        rating: 0,
        id: useId()
    })

    return { travels };
})