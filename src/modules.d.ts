/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { ModuleApi, RuntimeModule } from "@matrix-org/react-sdk-module-api";

declare module "./modules.js" {
    export type RuntimeModuleConstructor = { new (api: ModuleApi): RuntimeModule };
    export const INSTALLED_MODULES: RuntimeModuleConstructor[];
}