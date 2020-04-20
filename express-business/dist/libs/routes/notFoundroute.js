"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFoundRoute(req, res, next) {
    next({ error: 'Not Found', status: 404, message: 'Route Not Found' });
}
exports.default = notFoundRoute;
//# sourceMappingURL=notFoundroute.js.map