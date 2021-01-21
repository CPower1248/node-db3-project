const db = require("../../data/db-config")

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes").where({ id }).first()
    .then(schemeObj => {
      if (!schemeObj) {
        return Promise.resolve(null)
      } else {
        return schemeObj
      }
    })
}

function findSteps(id) {
  return db("schemes as sch")
    .join("steps as ste", "sch.id", "ste.scheme_id")
    .select(
      "sch.scheme_name as SchemeName", 
      "ste.step_number as StepNumber", 
      "ste.instructions as Instructions"
    )
    .orderBy("ste.step_number")
    .where("sch.id", id)
}

function add(scheme) {
  return db("schemes").insert(scheme)
    .then(([id]) => {
      return db("schemes").where({ id }).first()
    })
}

function addStep(stepData, id) {
 return db("steps").insert(stepData)
  .then(([id]) => {
    return db("steps").where({ id }).first()
  })
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("schemes").where({ id }).first()
    })
}

function remove(id) {
  return db("schemes").where({ id }).first()
  .then(scheme => {
    if(scheme) {
      return db("schemes").where({ id }).del()
    } else {
      return Promise.resolve(null)
    }
  })
}
