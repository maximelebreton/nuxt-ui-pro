const side = [
  "left",
  "right"
] as const

export default {
  "base": "hidden lg:flex",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
}