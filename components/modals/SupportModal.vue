<script setup lang="ts">

</script>

<template>
  <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00DWy000000DEGU" method="POST">

    <input type=hidden name="orgid" value="00DWy000000DEGU">
    <input type=hidden name="retURL" value="https://hyperbit.it">
    <label for="name">Nome referente</label><input  id="name" maxlength="80" name="name" size="20" type="text" /><br>
    <label for="company">Società</label><input  id="company" maxlength="80" name="company" size="20" type="text" /><br>
    <label for="subject">Oggetto</label><input  id="subject" maxlength="80" name="subject" size="20" type="text" /><br>
    <label for="priority">Priorità</label><select  id="priority" name="priority"><option value="">--Nessuno--</option><option value="High">Alta</option>
    <option value="Medium">Media</option>
    <option value="Low">Bassa</option>
  </select><br>
    <label for="description">Descrizione</label><textarea name="description"></textarea><br>
    <label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>
    <label for="phone">Telefono</label><input  id="phone" maxlength="40" name="phone" size="20" type="text" /><br>
    <input type="submit" name="submit">

  </form>
</template>

<style scoped>

</style>
