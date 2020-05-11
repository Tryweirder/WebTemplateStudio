import { WizardServant, IPayloadResponse } from "./wizardServant";
import { ExtensionCommand } from "./constants";
import { CoreTemplateStudio } from "./coreTemplateStudio";

export class CoreTSModule extends WizardServant {
  clientCommandMap: Map<ExtensionCommand, (message: any) => Promise<IPayloadResponse>>;
  coreTemplateStudio: CoreTemplateStudio = CoreTemplateStudio.GetExistingInstance();

  constructor() {
    super();
    this.clientCommandMap = this.defineCommandMap();
  }

  private defineCommandMap(): Map<ExtensionCommand, (message: any) => Promise<IPayloadResponse>> {
    return new Map([
      [ExtensionCommand.GetFrameworks, this.getFrameworks],
      [ExtensionCommand.GetPages, this.getPages],
      [ExtensionCommand.GetFeatures, this.getFeatures],
      [ExtensionCommand.GetTemplateInfo, this.getTemplateConfig],
    ]);
  }

  async getFrameworks(message: any): Promise<IPayloadResponse> {
    const frameworks = await this.coreTemplateStudio.getFrameworks(message.payload.projectType);
    return {
      payload: {
        scope: message.payload.scope,
        frameworks,
        isPreview: message.payload.isPreview,
        projectType: message.payload.projectType,
      },
    };
  }

  async getTemplateConfig(message: any): Promise<IPayloadResponse> {
    const payload = this.coreTemplateStudio.getTemplateConfig();
    payload.scope = message.payload.scope;
    return { payload };
  }

  async getPages(message: any): Promise<IPayloadResponse> {
    const { projectType, frontendFramework, backendFramework } = message.payload;
    const pages = await this.coreTemplateStudio.getPages(projectType, frontendFramework, backendFramework);
    return {
      payload: {
        scope: message.payload.scope,
        pages,
      },
    };
  }

  async getFeatures(message: any): Promise<IPayloadResponse> {
    const { projectType, frontendFramework, backendFramework } = message.payload;
    const features = await this.coreTemplateStudio.getFeatures(projectType, frontendFramework, backendFramework);
    return {
      payload: {
        scope: message.payload.scope,
        features,
      },
    };
  }
}
