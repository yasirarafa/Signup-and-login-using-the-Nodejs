 function notFoundRoute(req, res, next) {
    next({error : 'Not Found', status: 404, message: 'Route Not Found'});
}

export default notFoundRoute
