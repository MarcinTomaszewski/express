// Hasło do MongoDB Cloud
// login: admin
// password: 3N5WfILKrtAO5plT

// Link do łączenia z MongoDB cloud
// mongodb+srv://admin:<password>@cluster0-vewib.mongodb.net/test?retryWrites=true&w=majority

module.exports = {
    db: 'mongodb+srv://admin:3N5WfILKrtAO5plT@cluster0-vewib.mongodb.net/test?retryWrites=true&w=majority',
    keySession: ['Max'],
    maxAgeSession: 24 * 60 * 60 * 1000
}