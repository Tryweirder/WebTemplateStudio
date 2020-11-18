export enum EXTENSION_COMMANDS {
  AZURE_LOGIN= "login",
  AZURE_LOGOUT= "logout",
  GENERATE= "generate",
  GET_OUTPUT_PATH_FROM_CONFIG= "get-output-path-from-config",
  BROWSE_NEW_OUTPUT_PATH= "browse-new-output-path",
  GET_PROJECT_NAME= "get-project-name",
  GET_USER_STATUS= "get-user-status",
  VALIDATE_COSMOS_NAME= "validate-cosmos-name",
  VALIDATE_APPSERVICE_NAME= "validate-appservice-name",
  PROJECT_PATH_VALIDATION= "project-path-validation",
  GET_RESOURCE_GROUPS= "get-resource-groups",
  GET_LOCATIONS= "get-locations",
  GET_VALID_APP_SERVICE_NAME= "get-valid-app-service-name",
  GET_VALID_COSMOS_NAME= "get-valid-cosmos-name",
  TRACK_PAGE_SWITCH= "track-page-switch",
  TRACK_CREATE_NEW_PROJECT= "track-create-new-project",
  TRACK_PRESS_QUICKSTART= "track-press-quickstart",
  TRACK_OPEN_APP_SERVICE_MODAL_FROM_SERVICES_LIST= "track-open-app-service-modal-from-services-list",
  TRACK_OPEN_COSMOSDB_SERVICE_MODAL_FROM_SERVICES_LIST= "track-open-cosmosdb-service-modal-from-services-list",
  TRACK_OPEN_AZURE_SERVICE_ADVANCED_MODE= "track-open-azure-service-advanced-mode",
  GEN_STATUS= "update-status",
  OPEN_PROJECT_IN_VSCODE= "open-project-vscode",
  GET_TEMPLATE_INFO= "get-template-info",
  GET_FRAMEWORKS= "get-frameworks",
  GET_PROJECT_TYPES="get-project-types",
  GET_ALL_LICENSES= "get-all-licenses",
  GET_LATEST_VERSION="get-latest-version",
  GET_PAGES= "get-pages",
  GET_FEATURES= "get-features",
  LOG= "log",
  OPEN_LOG= "open-log"
}

export enum ExtensionModule {
  Azure = "Azure",
  Generate = "GenerateExperience",
  Telemetry = "Telemetry",
  Validator = "Validator",
  VSCodeUI = "VSCodeUI",
  Logger = "Logger",
  DependencyChecker = "DependencyChecker",
  CoreTSModule = "CoreTSModule",
  Defaults = "Defaults"
}