export * from './runtime';
export * from './apis';
export * from './models';
import * as runtime from './runtime';
import * as Api from './apis';
export declare class FlotiqApi {
    BlogpostAPI: Api.BlogpostAPI;
    MediaAPI: Api.MediaAPI;
    TagAPI: Api.TagAPI;
    constructor(key?: string | undefined, options?: runtime.ConfigurationParameters);
}
