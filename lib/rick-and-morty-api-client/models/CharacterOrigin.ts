/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * API for fetching character information from Rick and Morty series
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CharacterOrigin
 */
export interface CharacterOrigin {
    /**
     * 
     * @type {string}
     * @memberof CharacterOrigin
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CharacterOrigin
     */
    url?: string;
}

/**
 * Check if a given object implements the CharacterOrigin interface.
 */
export function instanceOfCharacterOrigin(value: object): boolean {
    return true;
}

export function CharacterOriginFromJSON(json: any): CharacterOrigin {
    return CharacterOriginFromJSONTyped(json, false);
}

export function CharacterOriginFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterOrigin {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function CharacterOriginToJSON(value?: CharacterOrigin | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'url': value['url'],
    };
}

