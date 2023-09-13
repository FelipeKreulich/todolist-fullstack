const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * from tasks');
    return tasks;
};

const createTasks = async (task) => {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';
    const [createdTask] = await connection.execute(query, [title, 'Pendente', dateUTC]);

    return {insertId: createdTask};
};

module.exports = {
    getAll,
    createTasks,
};