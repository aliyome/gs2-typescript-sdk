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

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Project from '../model'

export class ForgetResult implements IResult {
    private issuePasswordToken: string|null = null;

    public getIssuePasswordToken(): string|null {
        return this.issuePasswordToken;
    }

    public setIssuePasswordToken(issuePasswordToken: string|null) {
        this.issuePasswordToken = issuePasswordToken;
        return this;
    }

    public withIssuePasswordToken(issuePasswordToken: string|null): this {
        this.issuePasswordToken = issuePasswordToken;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ForgetResult {
        return new ForgetResult()
            .withIssuePasswordToken(data["issuePasswordToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "issuePasswordToken": this.getIssuePasswordToken(),
        };
    }
}
