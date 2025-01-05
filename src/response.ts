/**************************************
 * Get response for api call
 * if options = { test:'123' } -> { status: 200, response: { success: true, test: '123' } }
 *
 * Examples...
 * getResponse() -> { status: 200, response: { success: true } }
 * getResponse(400, 'something wrong') -> { status: 400, response: { success: false, error: 'something wrong' } }
 * getResponse(200, null, { test: '123' }) -> { status: 200, response: { success: true, test: '123' } }
 ************************************/

export const httpStatus = require('http-status');

export function getResponse(
    status = 200,
    data: any = null,
    message: any = null,
    method: string = null,
    success: boolean = true
) {
    const result: any = {
        status: status,
        message: message ? message.toString() : 'Request Success.',
        method: method,
        data: data !== null ? data : null,
        success: success
    };

    if (status >= 400) {
        result.success = false;
    }
    return result;
}

export function getErrorResponse(status = 500, message: any = null, method: string = null) {
    const result: any = {
        status: status,
        message: message ? message.toString() : 'Internal server error.',
        method: method,
        success: false
    };

    return result;
}
