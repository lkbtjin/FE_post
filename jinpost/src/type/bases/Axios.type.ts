import {AxiosResponse} from "axios";
import {CollectionType} from "./ResponseBodyModel.type";

export type AxiosCollectionResponse<T> = AxiosResponse<CollectionType<T>>
export type AxiosCollectionPromise<T> = Promise<AxiosCollectionResponse<T>>;