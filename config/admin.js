module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0049777d6b82d57077e2f18e8f30d435'),
  },
});
