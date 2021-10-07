import { SeniorApi, RequestClient, RequestReturn, HttpMethod } from '@seniorsistemas/senior-core';
import { RegisterAnalyticIn, RegisterAnalyticOut } from 'lib/model/cms/registerAnalytic';
import { ListAnalyticsIn, ListAnalyticsOut } from 'lib/model/cms/listAnalytics';
import { GetAnalyticIn, GetAnalyticOut } from 'lib/model/cms/getAnalytic';
import { GetAnalyticsIn, GetAnalyticsOut } from 'lib/model/cms/getAnalytics';
import { CopyAnalyticIn, CopyAnalyticOut } from 'lib/model/cms/copyAnalytic';
import { UnregisterAnalyticIn, UnregisterAnalyticOut } from 'lib/model/cms/unregisterAnalytic';
import { CountAnalyticsDatasetIn, CountAnalyticsDatasetOut } from 'lib/model/cms/countAnalyticsDataset';
import { ListFactoryDefaultAnalyticsIn, ListFactoryDefaultAnalyticsOut } from 'lib/model/cms/listFactoryDefaultAnalytics';
import { SetPageAnalyticFilterIn } from 'lib/model/cms/setPageAnalyticFilter';
import { SavePageIn, SavePageOut } from 'lib/model/cms/savePage';
import { ListPagesIn, ListPagesOut } from 'lib/model/cms/listPages';
import { GetPageIn, GetPageOut } from 'lib/model/cms/getPage';
import { GetPageResourcesIn, GetPageResourcesOut } from 'lib/model/cms/getPageResources';
import { CopyPageIn, CopyPageOut } from 'lib/model/cms/copyPage';
import { RemovePageIn, RemovePageOut } from 'lib/model/cms/removePage';
import { ListFactoryDefaultPagesIn, ListFactoryDefaultPagesOut } from 'lib/model/cms/listFactoryDefaultPages';
import { SaveLandingPageIn, SaveLandingPageOut } from 'lib/model/cms/saveLandingPage';
import { SaveLandingPagesOrderIn } from 'lib/model/cms/saveLandingPagesOrder';
import { ListLandingPagesIn, ListLandingPagesOut } from 'lib/model/cms/listLandingPages';
import { GetLandingPageIn, GetLandingPageOut } from 'lib/model/cms/getLandingPage';
import { GetUserLandingPagesOut } from 'lib/model/cms/getUserLandingPages';
import { RemoveLandingPageIn, RemoveLandingPageOut } from 'lib/model/cms/removeLandingPage';
import { RemovePersonalLandingPagesIn } from 'lib/model/cms/removePersonalLandingPages';
import { ListFactoryDefaultLandingPagesIn, ListFactoryDefaultLandingPagesOut } from 'lib/model/cms/listFactoryDefaultLandingPages';
import { ListWidgetsIn, ListWidgetsOut } from 'lib/model/cms/listWidgets';
import { GetWidgetIn } from 'lib/model/cms/getWidget';
import { Widget } from 'lib/model/cms/widget';
import { ListFactoryDefaultWidgetsIn, ListFactoryDefaultWidgetsOut } from 'lib/model/cms/listFactoryDefaultWidgets';

/**
 * Service responsável pela comunicação com o serviço de Cms.
 */
export default class Cms extends RequestClient {
    constructor(seniorApi: SeniorApi) {
        super(seniorApi, 'platform', 'cms');
    }

    /**
      * Registra um componente do tipo analytic.
      * @param payload Payload de entrada com informações necessárias para registrar um componente do tipo analytic.
      * @return Payload de saída com o identificador do analytic criado.
      */
    registerAnalytic(payload: RegisterAnalyticIn): Promise<RequestReturn<RegisterAnalyticOut>> {
        const clientOptions = this.buildClientOptions('actions/registerAnalytic', payload);
        return this.request(clientOptions);
    }

    /**
     * Retorna uma lista de todos os componentes do tipo analytics.
     * @param payload Payload de entrada com informações necessárias para listar todos os componentes do tipo analytics.
     * @return Payload de saída com a lista de todos os componentes do tipo analytics.
     */
    listAnalytics(payload: ListAnalyticsIn): Promise<RequestReturn<ListAnalyticsOut>> {
        const clientOptions = this.buildClientOptions('queries/listAnalytics', payload);
        return this.request(clientOptions);
    }

    /**
     * Consulta informações de um componente do tipo analytic.
     * @param payload Payload de entrada com informações necessárias para consultar um componente do tipo analytic.
     * @return Payload de saída com o analytic recuperado.
     */
    getAnalytic(payload: GetAnalyticIn): Promise<RequestReturn<GetAnalyticOut>> {
        const clientOptions = this.buildClientOptions('queries/getAnalytic', payload);
        return this.request(clientOptions);
    }

    /**
     * Retorna uma lista de componentes do tipo analytics filtrando por ids.
     * @param payload Payload de entrada com informações necessárias para consultar uma lista de componentes do tipo analytic.
     * @return Payload de saída com a lista de analytics recuperados.
     */
    getAnalytics(payload: GetAnalyticsIn): Promise<RequestReturn<GetAnalyticsOut>> {
        const clientOptions = this.buildClientOptions('queries/getAnalytics', payload);
        return this.request(clientOptions);
    }

    /**
     * Cria uma copia identica de um analytic com seu conteúdo e gera um novo recurso com o usuário que efetuou a copia como owner.
     * @param payload Payload de entrada com informações necessárias para copiar um analytic e seu conteúdo.
     * @return Payload de saída com o identificador do analytic criado.
     */
    copyAnalytic(payload: CopyAnalyticIn): Promise<RequestReturn<CopyAnalyticOut>> {
        const clientOptions = this.buildClientOptions('actions/copyAnalytic', payload);
        return this.request(clientOptions);
    }

    /**
     * Cancela o registro de um componente do tipo analytic.
     * @param payload Payload de entrada com informações necessárias para cancelar o registro de um componente do tipo analytic.
     * @return Payload de saída com o identificador do analytic com o registro cancelado.
     */
    unregisterAnalytic(payload: UnregisterAnalyticIn): Promise<RequestReturn<UnregisterAnalyticOut>> {
        const clientOptions = this.buildClientOptions('actions/unregisterAnalytic', payload);
        return this.request(clientOptions);
    }

    /**
     * Retorna a quantidade de analytics que estão utilizando o dataset.
     * @param payload Payload de entrada com informações necessárias para retornar a quantidade de analytics que utilizam o dataset.
     * @return Payload de saída com a quantidade de analytics que utilizam o dataset.
     */
    countAnalyticsDataset(payload: CountAnalyticsDatasetIn): Promise<RequestReturn<CountAnalyticsDatasetOut>> {
        const clientOptions = this.buildClientOptions('queries/countAnalyticsDataset', payload);
        return this.request(clientOptions);
    }

    /**
     * Lista os componentes do tipo analytics padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar os componentes do tipo analytics padrões de fábrica.
     * @return Payload de saída com a lista de componentes do tipo analytics padrões de fábrica.
     */
    listFactoryDefaultAnalytics(payload: ListFactoryDefaultAnalyticsIn): Promise<RequestReturn<ListFactoryDefaultAnalyticsOut>> {
        const clientOptions = this.buildClientOptions('queries/listFactoryDefaultAnalytics', payload);
        return this.request(clientOptions);
    }

    /**
     * Salva os filtros alterados do analytic na página para o usuário do contexto.
     * @param payload Payload de entrada com informações necessárias para salvar os filtros alterados do analytic na página para o usuário do contexto.
     */
    setPageAnalyticFilter(payload: SetPageAnalyticFilterIn): Promise<RequestReturn<void>> {
        const clientOptions = this.buildClientOptions('actions/setPageAnalyticFilter', payload);
        return this.request(clientOptions);
    }

    /**
     * Cria ou atualiza uma página.
     * @param payload Payload de entrada com informações necessárias criar ou atualizar uma página.
     * @return Payload de saída com o identificador da página.
     */
    savePage(payload: SavePageIn): Promise<RequestReturn<SavePageOut>> {
        const clientOptions = this.buildClientOptions('actions/savePage', payload);
        return this.request(clientOptions);
    }

    /**
     * Lista as páginas que o usuário tem acesso para visualizar.
     * @param payload Payload de entrada com informações necessárias para listar as páginas que o usuário tem acesso para visualizar.
     * @return Payload de saída com as páginas que o usuário tem acesso para visualizar.
     */
    listPages(payload: ListPagesIn): Promise<RequestReturn<ListPagesOut>> {
        const clientOptions = this.buildClientOptions('actions/listPages', payload);
        return this.request(clientOptions);
    }

    /**
     * Permite buscar as informações de uma página.
     * @param payload Payload de entrada com informações necessárias para buscar as informações de uma página.
     * @return Payload de saída com as informações de uma página.
     */
    getPage(payload: GetPageIn): Promise<RequestReturn<GetPageOut>> {
        const clientOptions = this.buildClientOptions('actions/getPage', payload);
        return this.request(clientOptions);
    }

    /**
     * Retorna todos os recursos utilizados para a exibição de uma página.
     * @param payload Payload de entrada com informações necessárias para consultar os recursos utilizados para a exibição de uma página.
     * @return Payload de saída com os recursos utilizados para a exibição de uma página.
     */
    getPageResources(payload: GetPageResourcesIn): Promise<RequestReturn<GetPageResourcesOut>> {
        const clientOptions = this.buildClientOptions('queries/getPageResources', payload);
        return this.request(clientOptions);
    }

    /**
     * Cria uma copia idêntica de uma página com seu conteúdo e gera um novo recurso com o usuário que efetuou a copia como owner.
     * @param payload Payload de entrada com informações necessárias para copiar uma página.
     * @return Payload de saída com o identificador da página criada.
     */
    copyPage(payload: CopyPageIn): Promise<RequestReturn<CopyPageOut>> {
        const clientOptions = this.buildClientOptions('actions/copyPage', payload);
        return this.request(clientOptions);
    }

    /**
     * Permite remover uma página existente. 
     * É necessário possuir permissão o recurso customizado na ação Excluir. 
     * Se remover uma página em uso por uma landing page, a mesma também é removida.
     * @param payload Payload de entrada com informações necessárias para excluir uma página.
     * @return Payload de saída com o identificador da página excluída.
     */
    removePage(payload: RemovePageIn): Promise<RequestReturn<RemovePageOut>> {
        const clientOptions = this.buildClientOptions('actions/removePage', payload);
        return this.request(clientOptions);
    }

    /**
     * Lista as páginas padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar as páginas padrões de fábrica.
     * @return Payload de saída com a lista de páginas padrões de fábrica.
     */
    listFactoryDefaultPages(payload: ListFactoryDefaultPagesIn): Promise<RequestReturn<ListFactoryDefaultPagesOut>> {
        const clientOptions = this.buildClientOptions('queries/listFactoryDefaultPages', payload);
        return this.request(clientOptions);
    }

    /**
     * Permite adicionar uma página à landing page. 
     * Para vincular a página, será necessário ter permissão de visualização para a mesma. 
     * Se possuir somente a ação Personalizar, então só poderá criar páginas do tipo PERSONAL.
     * @param payload Payload de entrada com informações necessárias para adicionar uma página à landing page.
     * @return Payload de saída com o identificador da landing page.
     */
    saveLandingPage(payload: SaveLandingPageIn): Promise<RequestReturn<SaveLandingPageOut>> {
        const clientOptions = this.buildClientOptions('actions/saveLandingPage', payload);
        return this.request(clientOptions);
    }

    /**
     * Altera a ordem das landing pages.
     * @param payload Payload de entrada com informações necessárias para alterar a ordem das landing pages.
     */
    saveLandingPagesOrder(payload: SaveLandingPagesOrderIn): Promise<RequestReturn<void>> {
        const clientOptions = this.buildClientOptions('actions/saveLandingPagesOrder', payload);
        return this.request(clientOptions);
    }

    /**
     * Lista as landing pages para administração. 
     * Se não possuir permissão na ação Visualizar, então o usuário só poderá consultar as suas landing pages.
     * @param payload Payload de entrada com informações necessárias para listar as landing pages para administração.
     * @return Payload de saída com a lista de landing pages.
     */
    listLandingPages(payload: ListLandingPagesIn): Promise<RequestReturn<ListLandingPagesOut>> {
        const clientOptions = this.buildClientOptions('actions/listLandingPages', payload);
        return this.request(clientOptions);
    }

    /**
     * Permite buscar as informações de uma landing page com as informações da página vinculada.
     * @param payload Payload de entrada com informações necessárias para buscar uma landing page.
     * @return Payload de saída com a landing page recuperada.
     */
    getLandingPage(payload: GetLandingPageIn): Promise<RequestReturn<GetLandingPageOut>> {
        const clientOptions = this.buildClientOptions('actions/getLandingPage', payload);
        return this.request(clientOptions);
    }

    /**
     * Lista as landing pages para visualização pelo usuário.
     * @return Payload de saída com a lista de landing pages
     */
    getUserLandingPages(): Promise<RequestReturn<GetUserLandingPagesOut>> {
        const clientOptions = this.buildClientOptions('actions/getUserLandingPages', new Object());
        return this.request(clientOptions);
    }

    /**
     * Permite remover uma landing page existente. 
     * Se possuir permissão somente na ação Personalizar, então só poderá excluir as landing pages pessoais.
     * @param payload Payload de entrada com informações necessárias para remover uma landing page.
     * @return Payload de saída com o identificador da landing page excluída.
     */
    removeLandingPage(payload: RemoveLandingPageIn): Promise<RequestReturn<RemoveLandingPageOut>> {
        const clientOptions = this.buildClientOptions('actions/removeLandingPage', payload);
        return this.request(clientOptions);
    }

    /**
     * Apaga todas as landing pages personalizadas do usuário corrente ou do usuário informado.
     * @param payload Payload de entrada com informações necessárias para apagar todas as landing pages personalizadas do usuário.
     */
    removePersonalLandingPages(payload: RemovePersonalLandingPagesIn): Promise<RequestReturn<void>> {
        const clientOptions = this.buildClientOptions('actions/removePersonalLandingPages', payload);
        return this.request(clientOptions);
    }

    /**
    * Apaga todas as landing pages personalizadas de todos os usuários.
    */
    removeAllPersonalLandingPages(): Promise<RequestReturn<void>> {
        const clientOptions = this.buildClientOptions('actions/removeAllPersonalLandingPages', new Object());
        return this.request(clientOptions);
    }

    /**
     * Lista as landing pages padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar as landing pages padrões de fábrica.
     * @return Payload de saída com a lista das landing pages padrões de fábrica.
     */
    listFactoryDefaultLandingPages(payload: ListFactoryDefaultLandingPagesIn): Promise<RequestReturn<ListFactoryDefaultLandingPagesOut>> {
        const clientOptions = this.buildClientOptions('queries/listFactoryDefaultLandingPages', payload);
        return this.request(clientOptions);
    }

    /**
    * Lista todos os widgets do tenant que o usuário possui permissão para utilizar.
    * @param payload Payload de entrada com informações necessárias para listar todos os widgets do tenant que o usuário possui permissão para utilizar.
    * @return Payload de saída com a lista de todos os widgets do tenant que o usuário possui permissão para utilizar.
    */
    listWidgets(payload: ListWidgetsIn): Promise<RequestReturn<ListWidgetsOut>> {
        const clientOptions = this.buildClientOptions('queries/listWidgets', payload);
        return this.request(clientOptions);
    }

    /**
    * Exibe as informações do widget buscando através do seu identificador.
    * @param payload Payload de entrada com informações necessárias para exibir as informações do widget.
    * @return Payload de saída com o widget recuperado.
    */
    getWidget(payload: GetWidgetIn): Promise<RequestReturn<Widget>> {
        const clientOptions = this.buildClientOptions('queries/getWidget', payload);
        return this.request(clientOptions);
    }

    /**
     * Lista os componentes do tipo widgets padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar os componentes do tipo widgets padrões de fábrica.
     * @return Payload de saída com a lista de componentes do tipo widgets padrões de fábrica.
     */
    listFactoryDefaultWidgets(payload: ListFactoryDefaultWidgetsIn): Promise<RequestReturn<ListFactoryDefaultWidgetsOut>> {
        const clientOptions = this.buildClientOptions('queries/listFactoryDefaultWidgets', payload);
        return this.request(clientOptions);
    }

    /**
   * Cria um ClientOptions padrão com o 'method' POST e com o accessToken no header authorization.
   * @param primitiveUrl Url da primitiva no padrão 'queries/{nome_primitiva}' ou 'actions/{nome_primitiva}'.
   * @param payload Objeto enviado no body da requisição.
   * @returns ClientOptions com as informações necessárias para realizar as requisições.
   */
    private buildClientOptions<T>(primitiveUrl: string, payload: T): any {
        return {
            url: this.getUrlPath(primitiveUrl),
            method: HttpMethod.POST,
            data: payload,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
    }
}