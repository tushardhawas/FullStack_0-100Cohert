const zod = require('zod');

const authSchema = zod.object({
  email: zod.string().email().transform((value) => value.toLowerCase()),
  password: zod.string().min(3),
});



module.exports = {
  authSchema,
};