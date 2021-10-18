import { SeniorApi } from '@seniorsistemas/senior-core';
import Cms from './resources/cms';
import Workflow from './resources/workflow';

/**
 * Responsável por fornecer acesso a todas as APIs de aplicativos disponibilizadas. 
 */
export class PlatformAppsApi extends SeniorApi {
  #workflow!: Workflow;
  #cms!: Cms;

  /**
   * Retorna o service responsável pela comunicação com o serviço de Workflow
   */
  get workflow(): Workflow {
    this.#workflow = this.#workflow || new Workflow(this);
    return this.#workflow;
  }

  /**
   * Retorna o service responsável pela comunicação com o serviço do CMS
   */
  get cms(): Cms {
    this.#cms = this.#cms || new Cms(this);
    return this.#cms;
  }
}
