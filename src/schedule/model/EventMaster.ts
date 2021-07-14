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

export class EventMaster implements IModel {
    private eventId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private scheduleType: string|null = null;
    private repeatType: string|null = null;
    private absoluteBegin: number|null = null;
    private absoluteEnd: number|null = null;
    private repeatBeginDayOfMonth: number|null = null;
    private repeatEndDayOfMonth: number|null = null;
    private repeatBeginDayOfWeek: string|null = null;
    private repeatEndDayOfWeek: string|null = null;
    private repeatBeginHour: number|null = null;
    private repeatEndHour: number|null = null;
    private relativeTriggerName: string|null = null;
    private relativeDuration: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getEventId(): string|null {
        return this.eventId;
    }

    public setEventId(eventId: string|null) {
        this.eventId = eventId;
        return this;
    }

    public withEventId(eventId: string|null): this {
        this.eventId = eventId;
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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getScheduleType(): string|null {
        return this.scheduleType;
    }

    public setScheduleType(scheduleType: string|null) {
        this.scheduleType = scheduleType;
        return this;
    }

    public withScheduleType(scheduleType: string|null): this {
        this.scheduleType = scheduleType;
        return this;
    }

    public getRepeatType(): string|null {
        return this.repeatType;
    }

    public setRepeatType(repeatType: string|null) {
        this.repeatType = repeatType;
        return this;
    }

    public withRepeatType(repeatType: string|null): this {
        this.repeatType = repeatType;
        return this;
    }

    public getAbsoluteBegin(): number|null {
        return this.absoluteBegin;
    }

    public setAbsoluteBegin(absoluteBegin: number|null) {
        this.absoluteBegin = absoluteBegin;
        return this;
    }

    public withAbsoluteBegin(absoluteBegin: number|null): this {
        this.absoluteBegin = absoluteBegin;
        return this;
    }

    public getAbsoluteEnd(): number|null {
        return this.absoluteEnd;
    }

    public setAbsoluteEnd(absoluteEnd: number|null) {
        this.absoluteEnd = absoluteEnd;
        return this;
    }

    public withAbsoluteEnd(absoluteEnd: number|null): this {
        this.absoluteEnd = absoluteEnd;
        return this;
    }

    public getRepeatBeginDayOfMonth(): number|null {
        return this.repeatBeginDayOfMonth;
    }

    public setRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number|null) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    }

    public withRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number|null): this {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    }

    public getRepeatEndDayOfMonth(): number|null {
        return this.repeatEndDayOfMonth;
    }

    public setRepeatEndDayOfMonth(repeatEndDayOfMonth: number|null) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    }

    public withRepeatEndDayOfMonth(repeatEndDayOfMonth: number|null): this {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    }

    public getRepeatBeginDayOfWeek(): string|null {
        return this.repeatBeginDayOfWeek;
    }

    public setRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string|null) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    }

    public withRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string|null): this {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    }

    public getRepeatEndDayOfWeek(): string|null {
        return this.repeatEndDayOfWeek;
    }

    public setRepeatEndDayOfWeek(repeatEndDayOfWeek: string|null) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    }

    public withRepeatEndDayOfWeek(repeatEndDayOfWeek: string|null): this {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    }

    public getRepeatBeginHour(): number|null {
        return this.repeatBeginHour;
    }

    public setRepeatBeginHour(repeatBeginHour: number|null) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    }

    public withRepeatBeginHour(repeatBeginHour: number|null): this {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    }

    public getRepeatEndHour(): number|null {
        return this.repeatEndHour;
    }

    public setRepeatEndHour(repeatEndHour: number|null) {
        this.repeatEndHour = repeatEndHour;
        return this;
    }

    public withRepeatEndHour(repeatEndHour: number|null): this {
        this.repeatEndHour = repeatEndHour;
        return this;
    }

    public getRelativeTriggerName(): string|null {
        return this.relativeTriggerName;
    }

    public setRelativeTriggerName(relativeTriggerName: string|null) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    }

    public withRelativeTriggerName(relativeTriggerName: string|null): this {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    }

    public getRelativeDuration(): number|null {
        return this.relativeDuration;
    }

    public setRelativeDuration(relativeDuration: number|null) {
        this.relativeDuration = relativeDuration;
        return this;
    }

    public withRelativeDuration(relativeDuration: number|null): this {
        this.relativeDuration = relativeDuration;
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

    public static fromDict(data: {[key: string]: any}): EventMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new EventMaster()
            .withEventId(data["eventId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleType(data["scheduleType"])
            .withRepeatType(data["repeatType"])
            .withAbsoluteBegin(data["absoluteBegin"])
            .withAbsoluteEnd(data["absoluteEnd"])
            .withRepeatBeginDayOfMonth(data["repeatBeginDayOfMonth"])
            .withRepeatEndDayOfMonth(data["repeatEndDayOfMonth"])
            .withRepeatBeginDayOfWeek(data["repeatBeginDayOfWeek"])
            .withRepeatEndDayOfWeek(data["repeatEndDayOfWeek"])
            .withRepeatBeginHour(data["repeatBeginHour"])
            .withRepeatEndHour(data["repeatEndHour"])
            .withRelativeTriggerName(data["relativeTriggerName"])
            .withRelativeDuration(data["relativeDuration"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleType": this.getScheduleType(),
            "repeatType": this.getRepeatType(),
            "absoluteBegin": this.getAbsoluteBegin(),
            "absoluteEnd": this.getAbsoluteEnd(),
            "repeatBeginDayOfMonth": this.getRepeatBeginDayOfMonth(),
            "repeatEndDayOfMonth": this.getRepeatEndDayOfMonth(),
            "repeatBeginDayOfWeek": this.getRepeatBeginDayOfWeek(),
            "repeatEndDayOfWeek": this.getRepeatEndDayOfWeek(),
            "repeatBeginHour": this.getRepeatBeginHour(),
            "repeatEndHour": this.getRepeatEndHour(),
            "relativeTriggerName": this.getRelativeTriggerName(),
            "relativeDuration": this.getRelativeDuration(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
