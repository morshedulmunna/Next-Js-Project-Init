/* tslint:disable */
/* eslint-disable */
/**
 * Authentication API
 * API for user authentication, including signup, login, token refresh, and logout.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    UserToJSONTyped,
} from './User';

/**
 * 
 * @export
 * @interface AuthResponse
 */
export interface AuthResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    refreshToken?: string;
    /**
     * 
     * @type {User}
     * @memberof AuthResponse
     */
    user?: User;
}

/**
 * Check if a given object implements the AuthResponse interface.
 */
export function instanceOfAuthResponse(value: object): value is AuthResponse {
    return true;
}

export function AuthResponseFromJSON(json: any): AuthResponse {
    return AuthResponseFromJSONTyped(json, false);
}

export function AuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'refreshToken': json['refreshToken'] == null ? undefined : json['refreshToken'],
        'user': json['user'] == null ? undefined : UserFromJSON(json['user']),
    };
}

export function AuthResponseToJSON(json: any): AuthResponse {
    return AuthResponseToJSONTyped(json, false);
}

export function AuthResponseToJSONTyped(value?: AuthResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accessToken': value['accessToken'],
        'refreshToken': value['refreshToken'],
        'user': UserToJSON(value['user']),
    };
}

