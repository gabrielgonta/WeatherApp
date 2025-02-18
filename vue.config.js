module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/WeatherApp/'
    : '/',
    pwa: {
        themeColor: '#6CB9C8',
        msTileColor: '#484F60'
    }
}
