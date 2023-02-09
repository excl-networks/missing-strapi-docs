# List of all Strapi Telemetry Events

| Event Name                        | Data Sent                                                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| didCreateFirstAdmin               | No Data                                                                                                                                                             |
| didInviteUser                     | Number of Roles & Number of Users                                                                                                                                   |
| didUpdateRolePermissions          | No Data                                                                                                                                                             |
| didChangeInterfaceLanguage        | Languages that are in use                                                                                                                                           |
| didCreateFirstContentTypeEntry    | Sends model                                                                                                                                                         |
| didConfigureListView              | Returns the displayed relational fields                                                                                                                             |
| didCreateFirstContentType         | Type of content type and if its using draft publish                                                                                                                 |
| didCreateContentType              | Type of content type and if its using draft publish                                                                                                                 |
| didNotCreateContentType           | Error message when creating content type                                                                                                                            |
| didCreateFirstComponent           | No data                                                                                                                                                             |
| didCreateComponent                | No data                                                                                                                                                             |
| didInitializeI18n                 | Number of localized content types                                                                                                                                   |
| didUpdateI18nLocales              | The amount of locales                                                                                                                                               |
| didBulkDeleteMediaLibraryElements | Amount of deleted folders, amount of deleted files, amount of total folders, amount of total files                                                                  |
| didBulkMoveMediaLibraryElements   | Amount of updated folders, amount of updated files, amount of total folders, amount of total files                                                                  |
| didSendUploadPropertiesOnceAWeek  | Sends Folder number, asset number, average depth, max depth and averageDeviationDepth every week using CRON. Will use cron unless you have cron explicitly disabled |
| didSaveMediaWithCaption           | No Data                                                                                                                                                             |
| didSaveMediaWithAlternativeText   | No Data                                                                                                                                                             |
| didEnableResponsiveDimensions     | No Data                                                                                                                                                             |
| didDisableResponsiveDimensions    | No Data                                                                                                                                                             |
| didDEITSProcessStart              | Sends the source and destination                                                                                                                                    |
| didDEITSProcessFail               | Sends the source and destination                                                                                                                                    |
| didDEITSProcessFinish             | Sends the source and destination                                                                                                                                    |
|                                   |                                                                                                                                                                     |
