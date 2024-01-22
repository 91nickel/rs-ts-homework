const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
    id: string
    email: string
}

const getData = (url: string): Promise<string[]> => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<IComment[]>
        })
        .then(data => {
            return data.map((c: IComment) => `ID: ${c.id}, E-mail: ${c.email}`)
        })
}

getData(COMMENTS_URL)
    .then(data => {
        console.log(data)
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */