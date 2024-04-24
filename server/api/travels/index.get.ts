import { travels } from "~/server/stubs/travels"

export default eventHandler(async () => {
    // await new Promise<void>(resolve => setTimeout(resolve, 2000));

    return travels
})
