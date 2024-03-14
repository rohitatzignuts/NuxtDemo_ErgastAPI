export default defineEventHandler((event) => {
    const round  = [...event.node.req.url.split("/")].pop();
    return $fetch(`http://ergast.com/api/f1/2024/${round}.json`)
})
