const db = require('../data/db-config');
const { where } = require('../data/db-config');


module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove

};

async function find() {
    const schemes = await db("schemes")
    return schemes
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first()
}

function findSteps(id) {
    return db('schemes as s')
        .join('steps as t', 's.id', 't.scheme_id')
        .select('s.scheme_name', 't.step_number', 't.instructions')
        .where({ scheme_id: id });
}


  