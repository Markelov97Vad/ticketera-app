export type BuildMode = 'production' | 'development' // union type
export type PlatformType = 'desktop' | 'mobile'

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string
}

export interface BuildOptions {
  port: number;
  paths:  BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
  platform: PlatformType
}