const {
    client, 
    getAllUsers
} = require('./index');

async function dropTables() {
    try {
        await client.query(`
        `);
    } catch (error) {
        throw error;
    }
}

async function createTables() {
    try {
        await client.query(`
        `);
    } catch (error) {
        throw error;
    }
}

async function rebuildDB() {
    try {
        client.connect();

        await dropTables();
        await createTables();
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

rebuildDB();

//async function testDB() {
//     try {
//         client.connect();

//         const users = await getAllUsers();
//         console.log(users);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         client.end();
//     }
// }

// testDB();