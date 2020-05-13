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
  MissionGroupModel,
  ScriptSetting,
  Counter,
  GitHubCheckoutSetting,
  Complete,
  CounterScopeModel,
  ResponseCache,
  AcquireAction,
  CurrentMissionMaster,
  Config,
  MissionTaskModel,
  MissionTaskModelMaster,
  Namespace,
  MissionGroupModelMaster,
  LogSetting,
  CounterModelMaster,
  NotificationSetting,
  ScopedValue,
  CounterModel,
} from './model';
import {
  DescribeMissionGroupModelsRequest,
  GetMissionGroupModelRequest,
  DescribeCountersRequest,
  DescribeCountersByUserIdRequest,
  IncreaseCounterByUserIdRequest,
  GetCounterRequest,
  GetCounterByUserIdRequest,
  DeleteCounterByUserIdRequest,
  IncreaseByStampSheetRequest,
  DescribeCompletesRequest,
  DescribeCompletesByUserIdRequest,
  CompleteRequest,
  CompleteByUserIdRequest,
  ReceiveByUserIdRequest,
  GetCompleteRequest,
  GetCompleteByUserIdRequest,
  DeleteCompleteByUserIdRequest,
  ReceiveByStampTaskRequest,
  ExportMasterRequest,
  GetCurrentMissionMasterRequest,
  UpdateCurrentMissionMasterRequest,
  UpdateCurrentMissionMasterFromGitHubRequest,
  DescribeMissionTaskModelsRequest,
  GetMissionTaskModelRequest,
  DescribeMissionTaskModelMastersRequest,
  CreateMissionTaskModelMasterRequest,
  GetMissionTaskModelMasterRequest,
  UpdateMissionTaskModelMasterRequest,
  DeleteMissionTaskModelMasterRequest,
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeMissionGroupModelMastersRequest,
  CreateMissionGroupModelMasterRequest,
  GetMissionGroupModelMasterRequest,
  UpdateMissionGroupModelMasterRequest,
  DeleteMissionGroupModelMasterRequest,
  DescribeCounterModelMastersRequest,
  CreateCounterModelMasterRequest,
  GetCounterModelMasterRequest,
  UpdateCounterModelMasterRequest,
  DeleteCounterModelMasterRequest,
  DescribeCounterModelsRequest,
  GetCounterModelRequest,
} from './request';
import {
  DescribeMissionGroupModelsResult,
  GetMissionGroupModelResult,
  DescribeCountersResult,
  DescribeCountersByUserIdResult,
  IncreaseCounterByUserIdResult,
  GetCounterResult,
  GetCounterByUserIdResult,
  DeleteCounterByUserIdResult,
  IncreaseByStampSheetResult,
  DescribeCompletesResult,
  DescribeCompletesByUserIdResult,
  CompleteResult,
  CompleteByUserIdResult,
  ReceiveByUserIdResult,
  GetCompleteResult,
  GetCompleteByUserIdResult,
  DeleteCompleteByUserIdResult,
  ReceiveByStampTaskResult,
  ExportMasterResult,
  GetCurrentMissionMasterResult,
  UpdateCurrentMissionMasterResult,
  UpdateCurrentMissionMasterFromGitHubResult,
  DescribeMissionTaskModelsResult,
  GetMissionTaskModelResult,
  DescribeMissionTaskModelMastersResult,
  CreateMissionTaskModelMasterResult,
  GetMissionTaskModelMasterResult,
  UpdateMissionTaskModelMasterResult,
  DeleteMissionTaskModelMasterResult,
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeMissionGroupModelMastersResult,
  CreateMissionGroupModelMasterResult,
  GetMissionGroupModelMasterResult,
  UpdateMissionGroupModelMasterResult,
  DeleteMissionGroupModelMasterResult,
  DescribeCounterModelMastersResult,
  CreateCounterModelMasterResult,
  GetCounterModelMasterResult,
  UpdateCounterModelMasterResult,
  DeleteCounterModelMasterResult,
  DescribeCounterModelsResult,
  GetCounterModelResult,
} from './result';
import { Gs2MissionRestClient } from './rest';

export default {
  MissionGroupModel,
  ScriptSetting,
  Counter,
  GitHubCheckoutSetting,
  Complete,
  CounterScopeModel,
  ResponseCache,
  AcquireAction,
  CurrentMissionMaster,
  Config,
  MissionTaskModel,
  MissionTaskModelMaster,
  Namespace,
  MissionGroupModelMaster,
  LogSetting,
  CounterModelMaster,
  NotificationSetting,
  ScopedValue,
  CounterModel,
  DescribeMissionGroupModelsRequest,
  DescribeMissionGroupModelsResult,
  GetMissionGroupModelRequest,
  GetMissionGroupModelResult,
  DescribeCountersRequest,
  DescribeCountersResult,
  DescribeCountersByUserIdRequest,
  DescribeCountersByUserIdResult,
  IncreaseCounterByUserIdRequest,
  IncreaseCounterByUserIdResult,
  GetCounterRequest,
  GetCounterResult,
  GetCounterByUserIdRequest,
  GetCounterByUserIdResult,
  DeleteCounterByUserIdRequest,
  DeleteCounterByUserIdResult,
  IncreaseByStampSheetRequest,
  IncreaseByStampSheetResult,
  DescribeCompletesRequest,
  DescribeCompletesResult,
  DescribeCompletesByUserIdRequest,
  DescribeCompletesByUserIdResult,
  CompleteRequest,
  CompleteResult,
  CompleteByUserIdRequest,
  CompleteByUserIdResult,
  ReceiveByUserIdRequest,
  ReceiveByUserIdResult,
  GetCompleteRequest,
  GetCompleteResult,
  GetCompleteByUserIdRequest,
  GetCompleteByUserIdResult,
  DeleteCompleteByUserIdRequest,
  DeleteCompleteByUserIdResult,
  ReceiveByStampTaskRequest,
  ReceiveByStampTaskResult,
  ExportMasterRequest,
  ExportMasterResult,
  GetCurrentMissionMasterRequest,
  GetCurrentMissionMasterResult,
  UpdateCurrentMissionMasterRequest,
  UpdateCurrentMissionMasterResult,
  UpdateCurrentMissionMasterFromGitHubRequest,
  UpdateCurrentMissionMasterFromGitHubResult,
  DescribeMissionTaskModelsRequest,
  DescribeMissionTaskModelsResult,
  GetMissionTaskModelRequest,
  GetMissionTaskModelResult,
  DescribeMissionTaskModelMastersRequest,
  DescribeMissionTaskModelMastersResult,
  CreateMissionTaskModelMasterRequest,
  CreateMissionTaskModelMasterResult,
  GetMissionTaskModelMasterRequest,
  GetMissionTaskModelMasterResult,
  UpdateMissionTaskModelMasterRequest,
  UpdateMissionTaskModelMasterResult,
  DeleteMissionTaskModelMasterRequest,
  DeleteMissionTaskModelMasterResult,
  DescribeNamespacesRequest,
  DescribeNamespacesResult,
  CreateNamespaceRequest,
  CreateNamespaceResult,
  GetNamespaceStatusRequest,
  GetNamespaceStatusResult,
  GetNamespaceRequest,
  GetNamespaceResult,
  UpdateNamespaceRequest,
  UpdateNamespaceResult,
  DeleteNamespaceRequest,
  DeleteNamespaceResult,
  DescribeMissionGroupModelMastersRequest,
  DescribeMissionGroupModelMastersResult,
  CreateMissionGroupModelMasterRequest,
  CreateMissionGroupModelMasterResult,
  GetMissionGroupModelMasterRequest,
  GetMissionGroupModelMasterResult,
  UpdateMissionGroupModelMasterRequest,
  UpdateMissionGroupModelMasterResult,
  DeleteMissionGroupModelMasterRequest,
  DeleteMissionGroupModelMasterResult,
  DescribeCounterModelMastersRequest,
  DescribeCounterModelMastersResult,
  CreateCounterModelMasterRequest,
  CreateCounterModelMasterResult,
  GetCounterModelMasterRequest,
  GetCounterModelMasterResult,
  UpdateCounterModelMasterRequest,
  UpdateCounterModelMasterResult,
  DeleteCounterModelMasterRequest,
  DeleteCounterModelMasterResult,
  DescribeCounterModelsRequest,
  DescribeCounterModelsResult,
  GetCounterModelRequest,
  GetCounterModelResult,
  Gs2MissionRestClient,
};
