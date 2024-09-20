import { useRouter } from 'vue-router';

import { isHttpUrl, openWindow } from '@/utils';

function useNavigation() {
  const router = useRouter();

  const navigation = async (path: string) => {
    if (isHttpUrl(path)) {
      openWindow(path, { target: '_blank' });
    } else {
      await router.push(path);
    }
  };

  return { navigation };
}

export { useNavigation };
