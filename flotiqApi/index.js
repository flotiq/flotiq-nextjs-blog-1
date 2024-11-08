"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.FlotiqApi = void 0;
/* tslint:disable */
/* eslint-disable */
/* Flotiq customised */
__exportStar(require("./runtime"), exports);
__exportStar(require("./apis"), exports);
__exportStar(require("./models"), exports);
const runtime = require("./runtime");
const Api = require("./apis");
const hydrateMiddleware = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.init.method == 'GET') {
        const url = new URL(ctx.url);
        if (!url.searchParams.has('hydrate')) {
            if (ctx.url.indexOf('?') > 0) {
                ctx.url = ctx.url + '&hydrate=1';
            }
            else {
                ctx.url = ctx.url + '?hydrate=1';
            }
        }
    }
    return Object.assign(Object.assign({}, ctx), { init: Object.assign({}, ctx.init) });
});
class FlotiqApi {
    constructor(key = undefined, options = {}) {
        const envApiKey = process.env.FLOTIQ_API_KEY;
        if (envApiKey) {
            key = envApiKey;
        }
        if (!key) {
            throw new Error("FLOTIQ_API_KEY must be passed to the FlotiqAPI constructor.");
        }
        const configParameters = Object.assign({ apiKey: key }, options);
        const configuration = new runtime.Configuration(configParameters);
        this.BlogpostAPI = new Api.BlogpostAPI(configuration);
        this.BlogpostAPI = this.BlogpostAPI.withPreMiddleware(hydrateMiddleware);
        this.MediaAPI = new Api.MediaAPI(configuration);
        this.MediaAPI = this.MediaAPI.withPreMiddleware(hydrateMiddleware);
        this.TagAPI = new Api.TagAPI(configuration);
        this.TagAPI = this.TagAPI.withPreMiddleware(hydrateMiddleware);
    }
}
exports.FlotiqApi = FlotiqApi;
