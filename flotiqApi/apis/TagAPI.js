"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Flotiq User API
 * ## Getting started  This API Documentation reflects the endpoints defined in your [Flotiq](https://flotiq.com) account. The documentation is generated using an OpenAPI schema describing the API, which can be obtained in several flavors:  - [OAS 3.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE)   - without hydration, will not expand relations between content types (this is the default version which provides maximum compatibility with downstream systems)   - with hydration, pass [hydrate=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1) - use this for a better type support in exported OpenAPI schemas   - without system endpoints, pass [user_only=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1&amp;user_only=1) - use this to only include your endpoints, without system ones - [OAS 2.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;version=2) - provided for compatibility with several older systems  Check Flotiq documentation for more information about [Flotiq OpenAPI capabilities](https://flotiq.com/docs/API/open-api-schema/), instructions how to generate code and other useful tips.  ### Access to data  There are several methods that you can use to access your data:  * Live API docs - available via &lt;code&gt;Try it out&lt;/code&gt; button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It&#039;s also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it&#039;s not enabled by default, but it&#039;s a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagAPI = void 0;
const runtime = require("../runtime");
const index_1 = require("../models");
/**
 *
 */
class TagAPI extends runtime.BaseAPI {
    /**
     * Removes Tag (internal) object.<br />
     * Delete a _tag object
     */
    _deleteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling _delete().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Removes Tag (internal) object.<br />
     * Delete a _tag object
     */
    _delete(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._deleteRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Allows you to create or create and update up to 100 objects of Tag (internal) type. <br />
     * Create a batch of _tag objects
     */
    batchCreateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['updateExisting'] != null) {
                queryParameters['updateExisting'] = requestParameters['updateExisting'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/batch`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters['TagWithoutInternal'].map(index_1.TagWithoutInternalToJSON),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BatchResponseSuccessFromJSON)(jsonValue));
        });
    }
    /**
     * Allows you to create or create and update up to 100 objects of Tag (internal) type. <br />
     * Create a batch of _tag objects
     */
    batchCreate() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.batchCreateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Allows you to delete up to 100 objects of Tag (internal) type. <br />Request body accepts an array of content object IDs that are to be deleted.<br />
     * Delete a batch of _tag objects
     */
    batchDeleteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/batch-delete`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters['request_body'],
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlogpostBatchDelete200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Allows you to delete up to 100 objects of Tag (internal) type. <br />Request body accepts an array of content object IDs that are to be deleted.<br />
     * Delete a batch of _tag objects
     */
    batchDelete() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.batchDeleteRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Allows you to update up to 100 objects of Tag (internal) type. <br />
     * Update selected fields of a batch of objects
     */
    batchPatchRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/batch`,
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters['TagWithoutInternal'].map(index_1.TagWithoutInternalToJSON),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BatchResponseSuccessFromJSON)(jsonValue));
        });
    }
    /**
     * Allows you to update up to 100 objects of Tag (internal) type. <br />
     * Update selected fields of a batch of objects
     */
    batchPatch() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.batchPatchRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Allows you to create object of Tag (internal) type. <br />
     * Create a _tag object
     */
    createRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.TagWithoutInternalToJSON)(requestParameters['TagWithoutInternal']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Allows you to create object of Tag (internal) type. <br />
     * Create a _tag object
     */
    create() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.createRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns all information about Tag (internal) object. <br />
     * Get _tag object by Id
     */
    getRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling get().');
            }
            const queryParameters = {};
            if (requestParameters['hydrate'] != null) {
                queryParameters['hydrate'] = requestParameters['hydrate'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Returns all information about Tag (internal) object. <br />
     * Get _tag object by Id
     */
    get(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get ids of removed Tag (internal) objects. <br />
     * Get removed object identifiers
     */
    getRemovedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['deletedAfter'] != null) {
                queryParameters['deletedAfter'] = requestParameters['deletedAfter'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/removed`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get ids of removed Tag (internal) objects. <br />
     * Get removed object identifiers
     */
    getRemoved() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getRemovedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Return version of Tag (internal) object. <br />
     * Get a specific version of _tag object
     */
    getVersionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getVersions().');
            }
            if (requestParameters['versionId'] == null) {
                throw new runtime.RequiredError('versionId', 'Required parameter "versionId" was null or undefined when calling getVersions().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/{id}/version/{versionId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Return version of Tag (internal) object. <br />
     * Get a specific version of _tag object
     */
    getVersions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getVersionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List objects of Tag (internal) type. <br />
     * List _tag objects
     */
    listRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['limit'] != null) {
                queryParameters['limit'] = requestParameters['limit'];
            }
            if (requestParameters['order_by'] != null) {
                queryParameters['order_by'] = requestParameters['order_by'];
            }
            if (requestParameters['order_direction'] != null) {
                queryParameters['order_direction'] = requestParameters['order_direction'];
            }
            if (requestParameters['hydrate'] != null) {
                queryParameters['hydrate'] = requestParameters['hydrate'];
            }
            if (requestParameters['filters'] != null) {
                queryParameters['filters'] = requestParameters['filters'];
            }
            if (requestParameters['ids'] != null) {
                queryParameters['ids[]'] = requestParameters['ids'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagListFromJSON)(jsonValue));
        });
    }
    /**
     * List objects of Tag (internal) type. <br />
     * List _tag objects
     */
    list() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.listRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List objects versions of Tag (internal) type. <br />
     * List all versions of a _tag object
     */
    listVersionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling listVersion().');
            }
            const queryParameters = {};
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['limit'] != null) {
                queryParameters['limit'] = requestParameters['limit'];
            }
            if (requestParameters['order_by'] != null) {
                queryParameters['order_by'] = requestParameters['order_by'];
            }
            if (requestParameters['order_direction'] != null) {
                queryParameters['order_direction'] = requestParameters['order_direction'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/{id}/version`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagVersionsListFromJSON)(jsonValue));
        });
    }
    /**
     * List objects versions of Tag (internal) type. <br />
     * List all versions of a _tag object
     */
    listVersion(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listVersionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Allows update of the Tag (internal) object, but it is unnecessary to specify all the object\'s properties. Properties not included in the payload will be completed with data from the database. <br />
     * Update selected fields of _tag object
     */
    patchRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling patch().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.TagWithoutRequiredToJSON)(requestParameters['TagWithoutRequired']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Allows update of the Tag (internal) object, but it is unnecessary to specify all the object\'s properties. Properties not included in the payload will be completed with data from the database. <br />
     * Update selected fields of _tag object
     */
    patch(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Allows update of the Tag (internal) object, it has to have all fields, as this operation overwrites the object. All properties not included in the payload will be lost. <br />
     * Update existing _tag object
     */
    updateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling update().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-AUTH-TOKEN"] = yield this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/content/_tag/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.TagWithoutInternalToJSON)(requestParameters['TagWithoutInternal']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Allows update of the Tag (internal) object, it has to have all fields, as this operation overwrites the object. All properties not included in the payload will be lost. <br />
     * Update existing _tag object
     */
    update(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.TagAPI = TagAPI;