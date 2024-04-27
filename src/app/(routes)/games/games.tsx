async function fakeFetchDate() {
    return await new Promise((resolve) => setTimeout(resolve, 1000))
}

export default async function Games(){
    await fakeFetchDate()

    return <h1>a</h1>
}