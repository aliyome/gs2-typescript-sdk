/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant, Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';

import axios from 'axios';

export class Gs2ExchangeRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'enableAwaitExchange': request.getEnableAwaitExchange() ?? null,
            'enableDirectExchange': request.getEnableDirectExchange() ?? null,
            'queueNamespaceId': request.getQueueNamespaceId() ?? null,
            'keyId': request.getKeyId() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'enableAwaitExchange': request.getEnableAwaitExchange() ?? null,
            'enableDirectExchange': request.getEnableDirectExchange() ?? null,
            'queueNamespaceId': request.getQueueNamespaceId() ?? null,
            'keyId': request.getKeyId() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRateModels(request: Request.DescribeRateModelsRequest): Promise<Result.DescribeRateModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeRateModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRateModel(request: Request.GetRateModelRequest): Promise<Result.GetRateModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{rateName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetRateModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRateModelMasters(request: Request.DescribeRateModelMastersRequest): Promise<Result.DescribeRateModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeRateModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createRateModelMaster(request: Request.CreateRateModelMasterRequest): Promise<Result.CreateRateModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'timingType': request.getTimingType() ?? null,
            'lockTime': request.getLockTime() ?? null,
            'enableSkip': request.getEnableSkip() ?? null,
            'skipConsumeActions': request.getSkipConsumeActions()?.map((item) => item.toDict()) ?? null,
            'acquireActions': request.getAcquireActions()?.map((item) => item.toDict()) ?? null,
            'consumeActions': request.getConsumeActions()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateRateModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getRateModelMaster(request: Request.GetRateModelMasterRequest): Promise<Result.GetRateModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{rateName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetRateModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateRateModelMaster(request: Request.UpdateRateModelMasterRequest): Promise<Result.UpdateRateModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{rateName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'timingType': request.getTimingType() ?? null,
            'lockTime': request.getLockTime() ?? null,
            'enableSkip': request.getEnableSkip() ?? null,
            'skipConsumeActions': request.getSkipConsumeActions()?.map((item) => item.toDict()) ?? null,
            'acquireActions': request.getAcquireActions()?.map((item) => item.toDict()) ?? null,
            'consumeActions': request.getConsumeActions()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateRateModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteRateModelMaster(request: Request.DeleteRateModelMasterRequest): Promise<Result.DeleteRateModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{rateName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteRateModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public exchange(request: Request.ExchangeRequest): Promise<Result.ExchangeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/exchange/{rateName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'count': request.getCount() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ExchangeResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public exchangeByUserId(request: Request.ExchangeByUserIdRequest): Promise<Result.ExchangeByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'count': request.getCount() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ExchangeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public exchangeByStampSheet(request: Request.ExchangeByStampSheetRequest): Promise<Result.ExchangeByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/exchange')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'stampSheet': request.getStampSheet() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ExchangeByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.ExportMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getCurrentRateMaster(request: Request.GetCurrentRateMasterRequest): Promise<Result.GetCurrentRateMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetCurrentRateMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentRateMaster(request: Request.UpdateCurrentRateMasterRequest): Promise<Result.UpdateCurrentRateMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'settings': request.getSettings() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentRateMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentRateMasterFromGitHub(request: Request.UpdateCurrentRateMasterFromGitHubRequest): Promise<Result.UpdateCurrentRateMasterFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'checkoutSetting': request.getCheckoutSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentRateMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createAwaitByUserId(request: Request.CreateAwaitByUserIdRequest): Promise<Result.CreateAwaitByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}/await')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'count': request.getCount() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateAwaitByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeAwaits(request: Request.DescribeAwaitsRequest): Promise<Result.DescribeAwaitsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/exchange/await')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'rateName': String(request.getRateName() ?? null),
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeAwaitsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeAwaitsByUserId(request: Request.DescribeAwaitsByUserIdRequest): Promise<Result.DescribeAwaitsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/await')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'rateName': String(request.getRateName() ?? null),
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeAwaitsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getAwait(request: Request.GetAwaitRequest): Promise<Result.GetAwaitResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/exchange/{rateName}/await/{awaitName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetAwaitResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getAwaitByUserId(request: Request.GetAwaitByUserIdRequest): Promise<Result.GetAwaitByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}/await/{awaitName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetAwaitByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public acquire(request: Request.AcquireRequest): Promise<Result.AcquireResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/exchange/{rateName}/await/{awaitName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AcquireResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public acquireByUserId(request: Request.AcquireByUserIdRequest): Promise<Result.AcquireByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}/await/{awaitName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AcquireByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public acquireForceByUserId(request: Request.AcquireForceByUserIdRequest): Promise<Result.AcquireForceByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}/await/{awaitName}/force')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AcquireForceByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public skip(request: Request.SkipRequest): Promise<Result.SkipResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/exchange/{rateName}/await/{awaitName}/skip')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SkipResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public skipByUserId(request: Request.SkipByUserIdRequest): Promise<Result.SkipByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}/await/{awaitName}/skip')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SkipByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteAwait(request: Request.DeleteAwaitRequest): Promise<Result.DeleteAwaitResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/exchange/{rateName}/await/{awaitName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteAwaitResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteAwaitByUserId(request: Request.DeleteAwaitByUserIdRequest): Promise<Result.DeleteAwaitByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/exchange/{rateName}/await/{awaitName}')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null'))
            .replace('{awaitName}', String(request.getAwaitName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteAwaitByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createAwaitByStampSheet(request: Request.CreateAwaitByStampSheetRequest): Promise<Result.CreateAwaitByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/await/create')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'stampSheet': request.getStampSheet() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateAwaitByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteAwaitByStampTask(request: Request.DeleteAwaitByStampTaskRequest): Promise<Result.DeleteAwaitByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/await/delete')
            .replace('{service}', 'exchange')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'stampTask': request.getStampTask() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteAwaitByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
