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

import {
  Namespace,
  Gathering,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  AttributeRange,
  CapacityOfRole,
  Attribute,
  Player,
} from './model';

import IResult from '@/gs2/core/interface/IResult';

export class DescribeNamespacesResult implements IResult {
  /** ネームスペースのリスト */
  public items?: Namespace[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Namespace(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Namespace[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateNamespaceResult implements IResult {
  /** 作成したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetNamespaceStatusResult implements IResult {
  /** None */
  public status?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.status = data.status;
    }
  }

  public withStatus(status?: string): this {
    this.status = status;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.status = this.status;
    return data;
  }

}

export class GetNamespaceResult implements IResult {
  /** ネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateNamespaceResult implements IResult {
  /** 更新したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteNamespaceResult implements IResult {
  /** 削除したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeGatheringsResult implements IResult {
  /** ギャザリングのリスト */
  public items?: Gathering[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Gathering(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Gathering[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateGatheringResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CreateGatheringByUserIdResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateGatheringResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateGatheringByUserIdResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DoMatchmakingByPlayerResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;
  /** マッチメイキングの状態を保持するトークン */
  public matchmakingContextToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
      this.matchmakingContextToken = data.matchmakingContextToken;
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public withMatchmakingContextToken(matchmakingContextToken?: string): this {
    this.matchmakingContextToken = matchmakingContextToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.matchmakingContextToken = this.matchmakingContextToken;
    return data;
  }

}

export class DoMatchmakingResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;
  /** マッチメイキングの状態を保持するトークン */
  public matchmakingContextToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
      this.matchmakingContextToken = data.matchmakingContextToken;
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public withMatchmakingContextToken(matchmakingContextToken?: string): this {
    this.matchmakingContextToken = matchmakingContextToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.matchmakingContextToken = this.matchmakingContextToken;
    return data;
  }

}

export class GetGatheringResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CancelMatchmakingResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CancelMatchmakingByUserIdResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteGatheringResult implements IResult {
  /** ギャザリング */
  public item?: Gathering;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Gathering(data.item);
    }
  }

  public withItem(item?: Gathering): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
