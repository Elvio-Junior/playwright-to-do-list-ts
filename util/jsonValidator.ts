import { validate } from 'jsonschema';

export function validateJson(jsonResponse, jsonSchema) {
    return validate(jsonResponse, jsonSchema).valid;
};