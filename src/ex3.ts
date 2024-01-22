const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
    id: string
    email: string
}

const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json() as Promise<T>
}

// const getData = <T>(url: string): Promise<T> => {
//     return fetch(url)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json() as Promise<T>
//         })
// }

getData<IComment[]>(COMMENTS_URL)
    .then((data) => {
        console.log(data.map((c) => `ID: ${c?.id}, E-mail: ${c?.email}`))
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */