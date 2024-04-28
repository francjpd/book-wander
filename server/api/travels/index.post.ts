import { travels } from "~/server/stubs/travels"

const randomNumber = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0;
export default eventHandler(async (event) => {
    const body = await readBody(event)

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