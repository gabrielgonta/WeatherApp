module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/PWeatherApp/' // Remplace par ton nom de repo GitHub
    : '/',
    baseUrl: '/progressive-weather-app/',
    pwa: {
        themeColor: '#6CB9C8',
        msTileColor: '#484F60'
    }
}
