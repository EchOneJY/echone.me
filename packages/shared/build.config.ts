import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    'src/index',
    'src/store',
    'src/utils/index',
    'src/color/index',
    'src/cache/index',
  ],
});
