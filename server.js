const dotenv = require('dotenv')

const envTypes = {
    production: '.production',
    development: '.development'
}

const envVar = envTypes[process.env.APP_ENV] || '.development'
dotenv.config({ path: `./.env${envVar}` })