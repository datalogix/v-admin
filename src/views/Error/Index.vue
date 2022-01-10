<template>
  <AdminMessage v-if="$route.meta.error === 404" severity="info" :closable="false">
    <AdminSubtitle class="mb-2" title="Página não encontrada!" />
    <p>Verifique a url digitada e tente novamente</p>
  </AdminMessage>

  <AdminMessage v-else-if="$route.meta.error === 401" severity="warn" :closable="false">
    <AdminSubtitle class="mb-2" title="Não autorizado!" />
    <p>Você não possiu permissão para executar essa ação.</p>
  </AdminMessage>

  <AdminMessage v-else severity="error" :closable="false">
    <AdminSubtitle class="mb-2" title="Erro!" />
    <p>Ocorreu algum problema, tente novamente.</p>
    <p>Caso o problema persista, entre em contato com o desenvolvedor.</p>
  </AdminMessage>
</template>
