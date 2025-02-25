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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Friend from '../model'

export class UpdateProfileRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private publicProfile: string|null = null;
    private followerProfile: string|null = null;
    private friendProfile: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }

    public getAccessToken(): string|null {
        return this.accessToken;
    }

    public setAccessToken(accessToken: string|null) {
        this.accessToken = accessToken;
        return this;
    }

    public withAccessToken(accessToken: string|null): this {
        this.accessToken = accessToken;
        return this;
    }

    public getPublicProfile(): string|null {
        return this.publicProfile;
    }

    public setPublicProfile(publicProfile: string|null) {
        this.publicProfile = publicProfile;
        return this;
    }

    public withPublicProfile(publicProfile: string|null): this {
        this.publicProfile = publicProfile;
        return this;
    }

    public getFollowerProfile(): string|null {
        return this.followerProfile;
    }

    public setFollowerProfile(followerProfile: string|null) {
        this.followerProfile = followerProfile;
        return this;
    }

    public withFollowerProfile(followerProfile: string|null): this {
        this.followerProfile = followerProfile;
        return this;
    }

    public getFriendProfile(): string|null {
        return this.friendProfile;
    }

    public setFriendProfile(friendProfile: string|null) {
        this.friendProfile = friendProfile;
        return this;
    }

    public withFriendProfile(friendProfile: string|null): this {
        this.friendProfile = friendProfile;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateProfileRequest {
        return new UpdateProfileRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPublicProfile(data["publicProfile"])
            .withFollowerProfile(data["followerProfile"])
            .withFriendProfile(data["friendProfile"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "publicProfile": this.getPublicProfile(),
            "followerProfile": this.getFollowerProfile(),
            "friendProfile": this.getFriendProfile(),
        };
    }
}