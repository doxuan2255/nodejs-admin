var config = {
    app: {

    },
    db: {
        CONNECTION: process.env.DB_CONNECTION,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT || 3306,
        DATABASE: process.env.DATABASE,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD
    }
}

export.module = config;