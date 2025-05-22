const side = [
  "left",
  "right"
] as const

export default {
  "base": "lg:hidden",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
}