import { getErrorResponse, getResponse, httpStatus } from '../../response';
import { UserRepository } from '../../repositories/user/user.repository';

export class UserController {

    typeComp = async (data: any): Promise<any> => {
        try {
            console.log('[typeComp] : params', data);
            const userRepository = new UserRepository();
            const result = await userRepository.typeComp(data);

            if (result) {
                return getResponse(
                    httpStatus.OK,
                    result,
                    'Type Comparision API Called Successfully'
                );
            } else {
                return getResponse(
                    httpStatus.NOT_FOUND,
                    null,
                    'Error in Type Comparision API'
                );
            }

        } catch (error) {
            const obj = {
                function_name: 'typeComp',
                error: error.toString(),
                response_status: httpStatus.INTERNAL_SERVER_ERROR
            };
            console.log('[typeComp]' + obj);
            return getErrorResponse(
                httpStatus.INTERNAL_SERVER_ERROR,
                'Internal Server Error'
            );
        }
    }

    engagement = async (data: any): Promise<any> => {
        try {
            console.log('[engagement] : params', data);
            const userRepository = new UserRepository();
            const result = await userRepository.engagement(data);

            if (result) {
                return getResponse(
                    httpStatus.OK,
                    result,
                    'Engagement API Called Successfully'
                );
            } else {
                return getResponse(
                    httpStatus.NOT_FOUND,
                    null,
                    'Error in Engagement API'
                );
            }

        } catch (error) {
            const obj = {
                function_name: 'engagement',
                error: error.toString(),
                response_status: httpStatus.INTERNAL_SERVER_ERROR
            };
            console.log('[engagement]' + obj);
            return getErrorResponse(
                httpStatus.INTERNAL_SERVER_ERROR,
                'Internal Server Error'
            );
        }
    }

    recommendations = async (data: any): Promise<any> => {
        try {
            console.log('[recommendations] : params', data);
            const userRepository = new UserRepository();
            const result = await userRepository.recommendations(data);

            if (result) {
                return getResponse(
                    httpStatus.OK,
                    result,
                    'Recommendations API Called Successfully'
                );
            } else {
                return getResponse(
                    httpStatus.NOT_FOUND,
                    null,
                    'Error in Recommendations API'
                );
            }

        } catch (error) {
            const obj = {
                function_name: 'recommendations',
                error: error.toString(),
                response_status: httpStatus.INTERNAL_SERVER_ERROR
            };
            console.log('[recommendations]' + obj);
            return getErrorResponse(
                httpStatus.INTERNAL_SERVER_ERROR,
                'Internal Server Error'
            );
        }
    }

}
