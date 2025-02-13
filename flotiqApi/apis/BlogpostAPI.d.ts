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
import * as runtime from '../runtime';
import type { BatchResponseSuccess, Blogpost, BlogpostBatchDelete200Response, BlogpostList, BlogpostVersionsList, BlogpostWithoutInternal, BlogpostWithoutRequired } from '../models';
export interface BlogpostAPIDeleteRequest {
    id: string;
}
export interface BlogpostAPIBatchCreateRequest {
    updateExisting?: boolean;
    BlogpostWithoutInternal?: Array<BlogpostWithoutInternal>;
}
export interface BlogpostAPIBatchDeleteRequest {
    request_body?: Array<string>;
}
export interface BlogpostAPIBatchPatchRequest {
    BlogpostWithoutInternal?: Array<BlogpostWithoutInternal>;
}
export interface BlogpostAPICreateRequest {
    BlogpostWithoutInternal?: BlogpostWithoutInternal;
}
export interface BlogpostAPIGetRequest {
    id: string;
    hydrate?: number;
}
export interface BlogpostAPIGetRemovedRequest {
    deletedAfter?: string;
}
export interface BlogpostAPIGetVersionsRequest {
    id: string;
    versionId: string;
}
export interface BlogpostAPIListRequest {
    page?: number;
    limit?: number;
    order_by?: string;
    order_direction?: string;
    hydrate?: number;
    filters?: string;
    ids?: Array<string>;
}
export interface BlogpostAPIListVersionRequest {
    id: string;
    page?: number;
    limit?: number;
    order_by?: string;
    order_direction?: string;
}
export interface BlogpostAPIPatchRequest {
    id: string;
    BlogpostWithoutRequired?: BlogpostWithoutRequired;
}
export interface BlogpostAPIUpdateRequest {
    id: string;
    BlogpostWithoutInternal?: BlogpostWithoutInternal;
}
/**
 *
 */
export declare class BlogpostAPI extends runtime.BaseAPI {
    /**
     * Removes Blog post object.<br />
     * Delete a Blogpost object
     */
    _deleteRaw(requestParameters: BlogpostAPIDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Removes Blog post object.<br />
     * Delete a Blogpost object
     */
    _delete(requestParameters: BlogpostAPIDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Allows you to create or create and update up to 100 objects of Blog post type. <br />
     * Create a batch of blogpost objects
     */
    batchCreateRaw(requestParameters: BlogpostAPIBatchCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchResponseSuccess>>;
    /**
     * Allows you to create or create and update up to 100 objects of Blog post type. <br />
     * Create a batch of blogpost objects
     */
    batchCreate(requestParameters?: BlogpostAPIBatchCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchResponseSuccess>;
    /**
     * Allows you to delete up to 100 objects of Blog post type. <br />Request body accepts an array of content object IDs that are to be deleted.<br />
     * Delete a batch of Blogpost objects
     */
    batchDeleteRaw(requestParameters: BlogpostAPIBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlogpostBatchDelete200Response>>;
    /**
     * Allows you to delete up to 100 objects of Blog post type. <br />Request body accepts an array of content object IDs that are to be deleted.<br />
     * Delete a batch of Blogpost objects
     */
    batchDelete(requestParameters?: BlogpostAPIBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlogpostBatchDelete200Response>;
    /**
     * Allows you to update up to 100 objects of Blog post type. <br />
     * Update selected fields of a batch of objects
     */
    batchPatchRaw(requestParameters: BlogpostAPIBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchResponseSuccess>>;
    /**
     * Allows you to update up to 100 objects of Blog post type. <br />
     * Update selected fields of a batch of objects
     */
    batchPatch(requestParameters?: BlogpostAPIBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchResponseSuccess>;
    /**
     * Allows you to create object of Blog post type. <br />
     * Create a Blogpost object
     */
    createRaw(requestParameters: BlogpostAPICreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blogpost>>;
    /**
     * Allows you to create object of Blog post type. <br />
     * Create a Blogpost object
     */
    create(requestParameters?: BlogpostAPICreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blogpost>;
    /**
     * Returns all information about Blog post object. <br />
     * Get Blogpost object by Id
     */
    getRaw(requestParameters: BlogpostAPIGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blogpost>>;
    /**
     * Returns all information about Blog post object. <br />
     * Get Blogpost object by Id
     */
    get(requestParameters: BlogpostAPIGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blogpost>;
    /**
     * Get ids of removed Blog post objects. <br />
     * Get removed object identifiers
     */
    getRemovedRaw(requestParameters: BlogpostAPIGetRemovedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;
    /**
     * Get ids of removed Blog post objects. <br />
     * Get removed object identifiers
     */
    getRemoved(requestParameters?: BlogpostAPIGetRemovedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;
    /**
     * Return version of Blog post object. <br />
     * Get a specific version of Blogpost object
     */
    getVersionsRaw(requestParameters: BlogpostAPIGetVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blogpost>>;
    /**
     * Return version of Blog post object. <br />
     * Get a specific version of Blogpost object
     */
    getVersions(requestParameters: BlogpostAPIGetVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blogpost>;
    /**
     * List objects of Blog post type. <br />
     * List Blogpost objects
     */
    listRaw(requestParameters: BlogpostAPIListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlogpostList>>;
    /**
     * List objects of Blog post type. <br />
     * List Blogpost objects
     */
    list(requestParameters?: BlogpostAPIListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlogpostList>;
    /**
     * List objects versions of Blog post type. <br />
     * List all versions of a Blogpost object
     */
    listVersionRaw(requestParameters: BlogpostAPIListVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlogpostVersionsList>>;
    /**
     * List objects versions of Blog post type. <br />
     * List all versions of a Blogpost object
     */
    listVersion(requestParameters: BlogpostAPIListVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlogpostVersionsList>;
    /**
     * Allows update of the Blog post object, but it is unnecessary to specify all the object\'s properties. Properties not included in the payload will be completed with data from the database. <br />
     * Update selected fields of Blogpost object
     */
    patchRaw(requestParameters: BlogpostAPIPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blogpost>>;
    /**
     * Allows update of the Blog post object, but it is unnecessary to specify all the object\'s properties. Properties not included in the payload will be completed with data from the database. <br />
     * Update selected fields of Blogpost object
     */
    patch(requestParameters: BlogpostAPIPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blogpost>;
    /**
     * Allows update of the Blog post object, it has to have all fields, as this operation overwrites the object. All properties not included in the payload will be lost. <br />
     * Update existing Blogpost object
     */
    updateRaw(requestParameters: BlogpostAPIUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blogpost>>;
    /**
     * Allows update of the Blog post object, it has to have all fields, as this operation overwrites the object. All properties not included in the payload will be lost. <br />
     * Update existing Blogpost object
     */
    update(requestParameters: BlogpostAPIUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blogpost>;
}
