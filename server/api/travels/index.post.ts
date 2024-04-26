import { travels } from "~/server/stubs/travels"


export default eventHandler(async (event) => {
    const body = await readBody(event)

    const randomNumber = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    let id = '';
    for (let i = 0; i < 6; i++) {
        id += randomNumber().toString();
    }

    travels.push({
        ...body,
        rating: 0,
        id
    })

    return { travels };
})