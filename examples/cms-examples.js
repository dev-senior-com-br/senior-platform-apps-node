require('dotenv').config();

const { PlatformAppsApi } = require('../dist');
const { ChartType } = require('../dist/lib/model/cms/chartType');
const { LandingPageType } = require('../dist/lib/model/cms/landingPageType');

const username = process.env.PLATFORM_USER;
const password = process.env.PLATFORM_PASS;

const api = new PlatformAppsApi();

api.authentication
  .login({ username, password })
  .then(async resp => {
    console.log('login...\n');

    api.accessToken = JSON.parse(resp.body.jsonToken).access_token;

    // Registra um componente do tipo analytic.
    registerAnalytic();

    // Consulta informações de um componente do tipo analytic.
    getAnalytic();

    // Retorna uma lista de componentes do tipo analytics filtrando por ids.
    getAnalytics();

    // Cria uma copia identica de um analytic com seu conteúdo e gera um novo recurso com o usuário que efetuou a copia como owner.
    copyAnalytic();

    // Cancela o registro de um componente do tipo analytic.
    unregisterAnalytic();

    // Retorna a quantidade de analytics que estão utilizando o dataset.
    countAnalyticsDataset();

    // Retorna uma lista de todos os componentes do tipo analytics.
    listAnalytics();

    // Lista os componentes do tipo analytics padrões de fábrica.
    listFactoryDefaultAnalytics();

    // Salva os filtros alterados do analytic na página para o usuário do contexto.
    setPageAnalyticFilter();

    // Cria ou atualiza uma página.
    savePage();

    // Permite buscar as informações de uma página.
    getPage();

    // Retorna todos os recursos utilizados para a exibição de uma página.
    getPageResources();

    // Cria uma copia idêntica de uma página com seu conteúdo e gera um novo recurso com o usuário que efetuou a copia como owner.
    copyPage();

    // Permite remover uma página existente. 
    // É necessário possuir permissão o recurso customizado na ação Excluir. 
    // Se remover uma página em uso por uma landing page, a mesma também é removida.
    removePage();

    // Lista as páginas que o usuário tem acesso para visualizar.
    listPages();

    // Lista as páginas padrões de fábrica.
    listFactoryDefaultPages();

    // Permite adicionar uma página à landing page. 
    // Para vincular a página, será necessário ter permissão de visualização para a mesma. 
    // Se possuir somente a ação Personalizar, então só poderá criar páginas do tipo PERSONAL.
    saveLandingPage();

    // Altera a ordem das landing pages.
    saveLandingPagesOrder();

    // Permite buscar as informações de uma landing page com as informações da página vinculada.
    getLandingPage();

    // Lista as landing pages para visualização pelo usuário.
    getUserLandingPages();

    // Permite remover uma landing page existente. 
    // Se possuir permissão somente na ação Personalizar, então só poderá excluir as landing pages pessoais.
    removeLandingPage();

    // Apaga todas as landing pages personalizadas do usuário corrente ou do usuário informado.
    removePersonalLandingPages();

    // Apaga todas as landing pages personalizadas de todos os usuários.
    removeAllPersonalLandingPages();

    // Lista as landing pages para administração. 
    // Se não possuir permissão na ação Visualizar, então o usuário só poderá consultar as suas landing pages.
    listLandingPages();

    // Lista as landing pages padrões de fábrica.
    listFactoryDefaultLandingPages();

    // Exibe as informações do widget buscando através do seu identificador.
    getWidget();

    // Lista todos os widgets do tenant que o usuário possui permissão para utilizar.
    listWidgets();

    // Lista os componentes do tipo widgets padrões de fábrica.
    listFactoryDefaultWidgets();
  })
  .catch(err => {
    console.error(err);
  });

function listAnalytics() {
  const payload = {
    searchValue: 'Analytic',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listAnalytics(payload)
    .then(resp => console.log('listAnalytics...\n', resp.body))
    .catch(err => console.error('listAnalytics...\n', err.response.data));
}

function registerAnalytic() {
  const payload = {
    id: 'analytic://senior.com.br/analytic_1',
    name: 'Analytic 1',
    chart: {
      type: ChartType.MAP,
      category: {
        schema: 'schema',
        table: 'table',
        column: 'column',
        latitude: {
          schema: 'schema',
          table: 'table',
          column: 'column'
        },
        longitude: {
          schema: 'schema',
          table: 'table',
          column: 'column'
        }
      },
      series: [{
        column: {
          schema: 'schema_1',
          table: 'table_1',
          column: 'column_1'
        },
        label: 'series-1'
      }],
      datasetId: 'dataset://senior.com.br/dataset'
    }
  }

  api.cms
    .registerAnalytic(payload)
    .then(resp => console.log('registerAnalytic...\n', resp.body))
    .catch(err => console.error('registerAnalytic...\n', err.response.data));
}

function getAnalytic() {
  const payload = {
    analyticId: 'analytic://senior.com.br/analytic_1'
  }

  api.cms
    .getAnalytic(payload)
    .then(resp => console.log('getAnalytic...\n', resp.body))
    .catch(err => console.error('getAnalytic...\n', err.response.data));
}

function getAnalytics() {
  const payload = {
    ids: [
      'analytic://senior.com.br/analytic_1',
      'analytic://senior.com.br/analytic_5'
    ]
  }

  api.cms
    .getAnalytics(payload)
    .then(resp => console.log('getAnalytics...\n', resp.body))
    .catch(err => console.error('getAnalytics...\n', err.response.data));
}

function copyAnalytic() {
  const payload = {
    analyticId: 'analytic://senior.com.br/analytic_5',
    name: 'Analytic 5 - Cópia Teste'
  }

  api.cms
    .copyAnalytic(payload)
    .then(resp => console.log('copyAnalytic...\n', resp.body))
    .catch(err => console.error('copyAnalytic...\n', err.response.data));
}

function unregisterAnalytic() {
  const payload = {
    analyticId: 'analytic://senior.com.br/analytic_5'
  }

  api.cms
    .unregisterAnalytic(payload)
    .then(resp => console.log('unregisterAnalytic...\n', resp.body))
    .catch(err => console.error('unregisterAnalytic...\n', err.response.data));
}

function countAnalyticsDataset() {
  const payload = {
    datasetId: 'dataset://senior.com.br/dataset'
  }

  api.cms
    .countAnalyticsDataset(payload)
    .then(resp => console.log('countAnalyticsDataset...\n', resp.body))
    .catch(err => console.error('countAnalyticsDataset...\n', err.response.data));
}

function listFactoryDefaultAnalytics() {
  const payload = {
    searchValue: 'Analytic',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listFactoryDefaultAnalytics(payload)
    .then(resp => console.log('listFactoryDefaultAnalytics...\n', resp.body))
    .catch(err => console.error('listFactoryDefaultAnalytics...\n', err.response.data));
}

function setPageAnalyticFilter() {
  const payload = {
    pageId: 'page://senior.com.br/my_custom_page_1',
    analyticId: 'analytic://senior.com.br/analytic_1'
  }

  api.cms
    .setPageAnalyticFilter(payload)
    .then(resp => console.log('setPageAnalyticFilter...\n', resp.body))
    .catch(err => console.error('setPageAnalyticFilter...\n', err.response.data));
}

function savePage() {
  const payload = {
    id: 'page://senior.com.br/my_custom_page_1',
    name: 'My Custom Page 1',
    components: [{
      height: 2,
      width: 6,
      position: {
        row: 0,
        column: 0
      }
    }]
  }

  api.cms
    .savePage(payload)
    .then(resp => console.log('savePage...\n', resp.body))
    .catch(err => console.error('savePage...\n', err.response.data));
}

function listPages() {
  const payload = {
    searchValue: 'My',
    ownerOnly: false,
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listPages(payload)
    .then(resp => console.log('listPages...\n', resp.body))
    .catch(err => console.error('listPages...\n', err.response.data));
}

function getPage() {
  const payload = {
    pageId: 'page://senior.com.br/my_custom_page_1'
  }

  api.cms
    .getPage(payload)
    .then(resp => console.log('getPage...\n', resp.body))
    .catch(err => console.error('getPage...\n', err.response.data));
}

function getPageResources() {
  const payload = {
    pageId: 'page://senior.com.br/my_custom_page_1'
  }

  api.cms
    .getPageResources(payload)
    .then(resp => console.log('getPageResources...\n', resp.body))
    .catch(err => console.error('getPageResources...\n', err.response.data));
}

function copyPage() {
  const payload = {
    pageId: 'page://senior.com.br/my_custom_page_1',
    name: 'My Custom Page 1 - Cópia Teste'
  }

  api.cms
    .copyPage(payload)
    .then(resp => console.log('copyPage...\n', resp.body))
    .catch(err => console.error('copyPage...\n', err.response.data));
}

function removePage() {
  const payload = {
    pageId: 'page://senior.com.br/my_custom_page_1',
  }

  api.cms
    .removePage(payload)
    .then(resp => console.log('removePage...\n', resp.body))
    .catch(err => console.error('removePage...\n', err.response.data));
}

function listFactoryDefaultPages() {
  const payload = {
    searchValue: '',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listFactoryDefaultPages(payload)
    .then(resp => console.log('listFactoryDefaultPages...\n', resp.body))
    .catch(err => console.error('listFactoryDefaultPages...\n', err.response.data));
}

function saveLandingPage() {
  const payload = {
    id: 'landing://senior.com.br/landing_10',
    pageId: 'page://senior.com.br/my_custom_page',
    title: 'Page A',
    landingPageType: LandingPageType.PERSONAL
  }

  api.cms
    .saveLandingPage(payload)
    .then(resp => console.log('saveLandingPage...\n', resp.body))
    .catch(err => console.error('saveLandingPage...\n', err.response.data));
}

function saveLandingPagesOrder() {
  const payload = {
    landingPageId: [
      'landing://senior.com.br/landing_3',
      'landing://senior.com.br/landing_4',
      'landing://senior.com.br/landing_1'
    ]
  }

  api.cms
    .saveLandingPagesOrder(payload)
    .then(resp => console.log('saveLandingPagesOrder...\n', resp.body))
    .catch(err => console.error('saveLandingPagesOrder...\n', err.response.data));
}

function listLandingPages() {
  const payload = {
    searchValue: 'Page',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listLandingPages(payload)
    .then(resp => console.log('listLandingPages...\n', resp.body))
    .catch(err => console.error('listLandingPages...\n', err.response.data));
}

function getLandingPage() {
  const payload = {
    landingPageId: 'landing://senior.com.br/landing_3',
  }

  api.cms
    .getLandingPage(payload)
    .then(resp => console.log('getLandingPage...\n', resp.body))
    .catch(err => console.error('getLandingPage...\n', err.response.data));
}

function getUserLandingPages() {
  api.cms
    .getUserLandingPages()
    .then(resp => console.log('getUserLandingPages...\n', resp.body))
    .catch(err => console.error('getUserLandingPages...\n', err.response.data));
}

function removeLandingPage() {
  const payload = {
    landingPageId: 'landing://senior.com.br/landing_3',
  }

  api.cms
    .removeLandingPage(payload)
    .then(resp => console.log('removeLandingPage...\n', resp.body))
    .catch(err => console.error('removeLandingPage...\n', err.response.data));
}

function removePersonalLandingPages() {
  const payload = {
    user: 'test@senior.com.br',
  }

  api.cms
    .removePersonalLandingPages(payload)
    .then(resp => console.log('removePersonalLandingPages...\n', resp.body))
    .catch(err => console.error('removePersonalLandingPages...\n', err.response.data));
}

function removeAllPersonalLandingPages() {
  api.cms
    .removeAllPersonalLandingPages()
    .then(resp => console.log('removeAllPersonalLandingPages...\n', resp.body))
    .catch(err => console.error('removeAllPersonalLandingPages...\n', err.response.data));
}

function listFactoryDefaultLandingPages() {
  const payload = {
    searchValue: 'Page',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listFactoryDefaultLandingPages(payload)
    .then(resp => console.log('listFactoryDefaultLandingPages...\n', resp.body))
    .catch(err => console.error('listFactoryDefaultLandingPages...\n', err.response.data));
}

function listWidgets() {
  const payload = {
    searchValue: 'Widget',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listWidgets(payload)
    .then(resp => console.log('listWidgets...\n', resp.body))
    .catch(err => console.error('listWidgets...\n', err.response.data));
}

function getWidget() {
  const payload = {
    widgetId: 'widget://factory/domain/service/widget',
  }

  api.cms
    .getWidget(payload)
    .then(resp => console.log('getWidget...\n', resp.body))
    .catch(err => console.error('getWidget...\n', err.response.data));
}

function listFactoryDefaultWidgets() {
  const payload = {
    searchValue: 'Widget',
    pagination: {
      pageNumber: 0,
      pageSize: 10
    }
  }

  api.cms
    .listFactoryDefaultWidgets(payload)
    .then(resp => console.log('listFactoryDefaultWidgets...\n', resp.body))
    .catch(err => console.error('listFactoryDefaultWidgets...\n', err.response.data));
}