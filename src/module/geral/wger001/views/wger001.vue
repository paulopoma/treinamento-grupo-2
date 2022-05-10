<template>
  <div>
    <div v-if="controller.carregando">Carregando..</div>
    <div v-else>
      <button @click="controller.mounted()">Atualizar</button>

      <table border="1">
        <tr>
          <th>Código</th>
          <th>Nome</th>
        </tr>
        <tr v-for="(filial, index) in controller.filiais" :key="index">
          <td>{{ filial.cod_fil }}</td>
          <td>{{ filial.nome }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { wger001Controller } from "../di/di";
export default {
  data: (context) => ({
    controller: wger001Controller(context),
  }),
  mounted() {
    this.controller.mounted();
  },
};
</script>
