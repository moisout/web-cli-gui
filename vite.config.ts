import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({ dts: true, resolvers: [IconsResolver()] }),
    Icons({ compiler: 'vue3' })
  ]
});
