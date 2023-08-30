const mongoose = require('mongoose')

exports.db = async () => {
    try {
        const m = await mongoose.connect(process.env.MongoDB);
        console.log(" Connected to the database", m.connection.host, m.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
