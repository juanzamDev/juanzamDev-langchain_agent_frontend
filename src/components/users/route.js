export async function getUsers() {
    const res = await fetch(`${process.env.API_URL}/users`)
    const data = await res.json();
    return data;
}
