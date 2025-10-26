console.log('Hello, TypeScript!');

type User = {
    id: number,
    name: string,
    email: string
}

const user: User = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
}

function getUser(id: number): User | undefined{
    console.log(`Fetching user with id: ${id}`);
    if (id === user.id) {
        return user;
    }
        console.log('User with ID ${id} not found.');
    return undefined;   
}

