<script lang="ts" setup>
import { LOGIN_PATH } from '@/utils/constants';
import { AuthenticationQrCodeLogin } from '@/components/common-ui';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
