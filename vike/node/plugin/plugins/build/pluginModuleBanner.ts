export { pluginModuleBanner }

import type { ResolvedConfig, Plugin } from 'vite'
import MagicString from 'magic-string'
import { removeVirtualIdTag } from '../../../shared/virtual-files.js'
import { isViteServerBuild_safe } from '../../shared/isViteServerBuild.js'

// Rollup's banner feature doesn't work with Vite: https://github.com/vitejs/vite/issues/8412
// But, anyways, we want to prepend the banner at the beginning of each module, not at the beginning of each file (I believe that's what Rollup's banner feature does).

function pluginModuleBanner(): Plugin {
  let config: ResolvedConfig

  return {
    name: 'vike:pluginModuleBanner',
    enforce: 'post',
    apply: 'build',
    configResolved(config_) {
      config = config_
    },
    transform: {
      order: 'post',
      handler(code, id, options) {
        if (!isViteServerBuild_safe(config, options)) return
        if (id.startsWith('\0')) id = id
        id = removeVirtualIdTag(id)
        if (id.startsWith(config.root)) id = id.slice(config.root.length + 1)
        const s = new MagicString(code)
        // Use legal comment so that esbuild doesn't remove it.
        // - Terser still removes the comment, but I guess users use terser to minify JavaScript so I guess it's a good thing that comment is removed.
        // - https://esbuild.github.io/api/#legal-comments
        s.prepend(`/*! ${id} [vike:pluginModuleBanner] */\n`)
        return {
          code: s.toString(),
          map: s.generateMap({ hires: true, source: id })
        }
      }
    }
  }
}
