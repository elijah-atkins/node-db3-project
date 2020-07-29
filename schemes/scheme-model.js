const db = require('../data/db-config');
const { where } = require('../data/db-config');


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove

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
        .join('steps as st', 's.id', 'st.scheme_id')
        .select('s.scheme_name', 'st.step_number', 'st.instructions')
        .where({ scheme_id: id });
}

function add(data) {
    return db('schemes').insert(data)
}
  
function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove(id) {
    return db('schemes').where({ id }).del();
}