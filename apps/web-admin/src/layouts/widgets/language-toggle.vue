<script setup lang="ts">
import type { SupportedLanguagesType } from '@/locales';

import { VbenDropdownRadioMenu, VbenIconButton } from '@echone-core/shadcn-ui';

import { Languages } from '@/components/icons';
import { loadLocaleMessages } from '@/locales';
import { SUPPORT_LANGUAGES } from '@/utils/constants';
import { preferences, updatePreferences } from '@/utils/preferences';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string) {
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <VbenDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <VbenIconButton>
        <Languages class="size-4" />
      </VbenIconButton>
    </VbenDropdownRadioMenu>
  </div>
</template>
