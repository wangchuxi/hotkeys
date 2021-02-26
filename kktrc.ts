import path from 'path';
import webpack, { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';

import { LoaderConfOptions } from 'kkt';
import pkg from './package.json';

export default (conf: Configuration, env: string, options: LoaderConfOptions) => {
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md')],
  });
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  return conf;
};
