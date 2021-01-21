const db = require("../../data/db-config")

module.exports = {
  find,
  findById,
  findSteps
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
