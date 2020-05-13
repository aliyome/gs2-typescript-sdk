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
  Room,
  Message,
  Subscribe,
  ResponseCache,
  NotificationType,
  ScriptSetting,
  NotificationSetting,
  LogSetting,
} from './model';

import IResult from '../core/interface/IResult';

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

export class DescribeRoomsResult implements IResult {
  /** ルームのリスト */
  public items?: Room[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Room(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Room[]): this {
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

export class CreateRoomResult implements IResult {
  /** 作成したルーム */
  public item?: Room;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Room(data.item);
    }
  }

  public withItem(item?: Room): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CreateRoomFromBackendResult implements IResult {
  /** 作成したルーム */
  public item?: Room;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Room(data.item);
    }
  }

  public withItem(item?: Room): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetRoomResult implements IResult {
  /** ルーム */
  public item?: Room;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Room(data.item);
    }
  }

  public withItem(item?: Room): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateRoomResult implements IResult {
  /** 更新したルーム */
  public item?: Room;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Room(data.item);
    }
  }

  public withItem(item?: Room): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteRoomResult implements IResult {
  /** 削除したルーム */
  public item?: Room;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Room(data.item);
    }
  }

  public withItem(item?: Room): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteRoomFromBackendResult implements IResult {
  /** 削除したルーム */
  public item?: Room;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Room(data.item);
    }
  }

  public withItem(item?: Room): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMessagesResult implements IResult {
  /** メッセージのリスト */
  public items?: Message[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Message(item);
      });
    }
  }

  public withItems(items?: Message[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class PostResult implements IResult {
  /** 投稿したメッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class PostByUserIdResult implements IResult {
  /** 投稿したメッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMessageResult implements IResult {
  /** メッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteMessageResult implements IResult {
  /** 削除したメッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeSubscribesResult implements IResult {
  /** 購読のリスト */
  public items?: Subscribe[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Subscribe(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Subscribe[]): this {
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

export class DescribeSubscribesByUserIdResult implements IResult {
  /** 購読のリスト */
  public items?: Subscribe[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Subscribe(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Subscribe[]): this {
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

export class DescribeSubscribesByRoomNameResult implements IResult {
  /** 購読のリスト */
  public items?: Subscribe[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Subscribe(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Subscribe[]): this {
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

export class SubscribeResult implements IResult {
  /** 購読した購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SubscribeByUserIdResult implements IResult {
  /** 購読した購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSubscribeResult implements IResult {
  /** 購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSubscribeByUserIdResult implements IResult {
  /** 購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateNotificationTypeResult implements IResult {
  /** 更新した購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateNotificationTypeByUserIdResult implements IResult {
  /** 更新した購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnsubscribeResult implements IResult {
  /** 解除した購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnsubscribeByUserIdResult implements IResult {
  /** 解除した購読 */
  public item?: Subscribe;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Subscribe(data.item);
    }
  }

  public withItem(item?: Subscribe): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
