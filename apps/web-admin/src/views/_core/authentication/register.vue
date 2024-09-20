<script lang="ts" setup>
import type { LoginAndRegisterParams } from '@/components/common-ui';

import { ref } from 'vue';

import { LOGIN_PATH } from '@/utils/constants';
import { AuthenticationRegister } from '@/components/common-ui';

defineOptions({ name: 'Register' });

const loading = ref(false);

function handleSubmit(value: LoginAndRegisterParams) {
  // eslint-disable-next-line no-console
  console.log('register submit:', value);
}
</script>

<template>
  <AuthenticationRegister
    :loading="loading"
    :login-path="LOGIN_PATH"
    @submit="handleSubmit"
  />
</template>
