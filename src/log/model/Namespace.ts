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

export class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private type: string|null = null;
    private gcpCredentialJson: string|null = null;
    private bigQueryDatasetName: string|null = null;
    private logExpireDays: number|null = null;
    private awsRegion: string|null = null;
    private awsAccessKeyId: string|null = null;
    private awsSecretAccessKey: string|null = null;
    private firehoseStreamName: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getNamespaceId(): string|null {
        return this.namespaceId;
    }

    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }

    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }

    public getType(): string|null {
        return this.type;
    }

    public setType(type: string|null) {
        this.type = type;
        return this;
    }

    public withType(type: string|null): this {
        this.type = type;
        return this;
    }

    public getGcpCredentialJson(): string|null {
        return this.gcpCredentialJson;
    }

    public setGcpCredentialJson(gcpCredentialJson: string|null) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    }

    public withGcpCredentialJson(gcpCredentialJson: string|null): this {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    }

    public getBigQueryDatasetName(): string|null {
        return this.bigQueryDatasetName;
    }

    public setBigQueryDatasetName(bigQueryDatasetName: string|null) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    }

    public withBigQueryDatasetName(bigQueryDatasetName: string|null): this {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    }

    public getLogExpireDays(): number|null {
        return this.logExpireDays;
    }

    public setLogExpireDays(logExpireDays: number|null) {
        this.logExpireDays = logExpireDays;
        return this;
    }

    public withLogExpireDays(logExpireDays: number|null): this {
        this.logExpireDays = logExpireDays;
        return this;
    }

    public getAwsRegion(): string|null {
        return this.awsRegion;
    }

    public setAwsRegion(awsRegion: string|null) {
        this.awsRegion = awsRegion;
        return this;
    }

    public withAwsRegion(awsRegion: string|null): this {
        this.awsRegion = awsRegion;
        return this;
    }

    public getAwsAccessKeyId(): string|null {
        return this.awsAccessKeyId;
    }

    public setAwsAccessKeyId(awsAccessKeyId: string|null) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }

    public withAwsAccessKeyId(awsAccessKeyId: string|null): this {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }

    public getAwsSecretAccessKey(): string|null {
        return this.awsSecretAccessKey;
    }

    public setAwsSecretAccessKey(awsSecretAccessKey: string|null) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    }

    public withAwsSecretAccessKey(awsSecretAccessKey: string|null): this {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    }

    public getFirehoseStreamName(): string|null {
        return this.firehoseStreamName;
    }

    public setFirehoseStreamName(firehoseStreamName: string|null) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    }

    public withFirehoseStreamName(firehoseStreamName: string|null): this {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    }

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withType(data["type"])
            .withGcpCredentialJson(data["gcpCredentialJson"])
            .withBigQueryDatasetName(data["bigQueryDatasetName"])
            .withLogExpireDays(data["logExpireDays"])
            .withAwsRegion(data["awsRegion"])
            .withAwsAccessKeyId(data["awsAccessKeyId"])
            .withAwsSecretAccessKey(data["awsSecretAccessKey"])
            .withFirehoseStreamName(data["firehoseStreamName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "type": this.getType(),
            "gcpCredentialJson": this.getGcpCredentialJson(),
            "bigQueryDatasetName": this.getBigQueryDatasetName(),
            "logExpireDays": this.getLogExpireDays(),
            "awsRegion": this.getAwsRegion(),
            "awsAccessKeyId": this.getAwsAccessKeyId(),
            "awsSecretAccessKey": this.getAwsSecretAccessKey(),
            "firehoseStreamName": this.getFirehoseStreamName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
