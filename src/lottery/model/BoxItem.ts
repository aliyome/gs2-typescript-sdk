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
import { AcquireAction } from './AcquireAction';

export class BoxItem implements IModel {
    private acquireActions: AcquireAction[]|null = null;
    private remaining: number|null = null;
    private initial: number|null = null;

    public getAcquireActions(): AcquireAction[]|null {
        return this.acquireActions;
    }

    public setAcquireActions(acquireActions: AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }

    public withAcquireActions(acquireActions: AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public getRemaining(): number|null {
        return this.remaining;
    }

    public setRemaining(remaining: number|null) {
        this.remaining = remaining;
        return this;
    }

    public withRemaining(remaining: number|null): this {
        this.remaining = remaining;
        return this;
    }

    public getInitial(): number|null {
        return this.initial;
    }

    public setInitial(initial: number|null) {
        this.initial = initial;
        return this;
    }

    public withInitial(initial: number|null): this {
        this.initial = initial;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BoxItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BoxItem()
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withRemaining(data["remaining"])
            .withInitial(data["initial"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "remaining": this.getRemaining(),
            "initial": this.getInitial(),
        };
    }
}
