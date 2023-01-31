import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildPlugins } from "./plugins";
import { buildLoaders } from "./loaders";
import { buildResolvers } from "./resolvers";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
