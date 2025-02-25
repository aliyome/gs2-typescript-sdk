/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '@/gs2/core/interface/IModel';

export class AttachSecurityPolicy implements IModel {
    private userId: string|null = null;
    private securityPolicyIds: string[]|null = null;
    private attachedAt: number|null = null;

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getSecurityPolicyIds(): string[]|null {
        return this.securityPolicyIds;
    }

    public setSecurityPolicyIds(securityPolicyIds: string[]|null) {
        this.securityPolicyIds = securityPolicyIds;
        return this;
    }

    public withSecurityPolicyIds(securityPolicyIds: string[]|null): this {
        this.securityPolicyIds = securityPolicyIds;
        return this;
    }

    public getAttachedAt(): number|null {
        return this.attachedAt;
    }

    public setAttachedAt(attachedAt: number|null) {
        this.attachedAt = attachedAt;
        return this;
    }

    public withAttachedAt(attachedAt: number|null): this {
        this.attachedAt = attachedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AttachSecurityPolicy|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AttachSecurityPolicy()
            .withUserId(data["userId"])
            .withSecurityPolicyIds(data.securityPolicyIds ?
                data.securityPolicyIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withAttachedAt(data["attachedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "securityPolicyIds": this.getSecurityPolicyIds() ?
                this.getSecurityPolicyIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "attachedAt": this.getAttachedAt(),
        };
    }
}
