const z = require('zod')

const Movie = z.object({
  Tittle: z.string().min(1).max(100),
  Year: z.number(),
  imdbID: z.string(),
  Type: z.string(),
  Poster: z.string()
})

module.exports = Movie