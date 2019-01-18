const crypto = require("crypto")

function hash(input = "", type = "", code = "") {
  const algorithms = ["sha256", "sha512"]

  const encoding = ["hex", "latin1", "base64"]

  if (algorithms.includes(type)) {
    const h = crypto.createHash(type)
    h.update(input)

    return h.digest(encoding[encoding.indexOf(code)] || "hex")
  }

  return type ? "Algorithm not supported" : "Algorithm not provided"
}

module.exports = {
  hash
}
