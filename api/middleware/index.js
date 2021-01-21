const Schemes = require("../schemes/scheme-model")

module.exports = {
  valId,
  valScheme,
  valStep
}

async function valId(req, res, next) {
  const { id } = req.params

  try {
    const scheme = await Schemes.findById(id)
    if (scheme) {
      next()
    } else {
      res.status(400).json({ errorMessage: `The scheme with id ${id} ws not found` })
    }
  } catch (err) {
    next(err)
  }
}

function valScheme(req, res, next) {
  const { scheme_name } = req.body

  if (scheme_name) {
    next()
  } else {
    res.status(400).json({ errorMessage: "Missing required scheme_name" })
  }
}

function valStep(req, res, next) {
  const { scheme_id, step_number, instructions } = req.body

  if (scheme_id && step_number && instructions) {
    next()
  } else {
    res.status(400).json({ errorMessage: "Missing required scheme_id, step_number and instructions" })
  }
}
