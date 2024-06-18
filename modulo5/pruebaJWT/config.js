require(`dotenv`).config();

module.exports = {
    secretKey: process.env.SECRET_KEY,
    port: process.env.PORT || 3000,
}