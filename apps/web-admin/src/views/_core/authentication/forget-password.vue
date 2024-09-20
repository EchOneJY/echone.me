<script lang="ts" setup>
import { ref } from 'vue';

import { LOGIN_PATH } from '@/utils/constants';
import { AuthenticationForgetPassword } from '@/components/common-ui';

defineOptions({ name: 'ForgetPassword' });

const loading = ref(false);

function handleSubmit(value: string) {
  // eslint-disable-next-line no-console
  console.log('reset email:', value);
}
</script>

<template>
  <AuthenticationForgetPassword
    :loading="loading"
    :login-path="LOGIN_PATH"
    @submit="handleSubmit"
  />
</template>
