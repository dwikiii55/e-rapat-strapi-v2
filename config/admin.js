module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '42bed0a0b7f03e74e958db74ea79cf96'),
  },
});
