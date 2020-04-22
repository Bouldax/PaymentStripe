const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_Ec9B0XZeMqmhqiYWqbjGLpGg003FRPTGBh'
    : 'sk_test_lFjzTT98niEL16CeHylmljF8006Qoa8YJB';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;