export default defineEventHandler( (event) => {
    return $fetch('http://ergast.com/api/f1/2024.json',{
        method : 'GET'
    })
})