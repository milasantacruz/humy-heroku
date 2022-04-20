module.exports = ({ env }) => ({
  auth: {

    secret: env('ADMIN_JWT_SECRET', '0a8c5dadd59eaf39d497f7539078a04d'),
  },
});
