import 'chart.js';
import 'chartjs-plugin-datalabels';

declare module 'chart.js' {
  interface ChartOptions<T extends keyof ChartTypeRegistry> {
    plugins?: {
      datalabels?: import('chartjs-plugin-datalabels').PluginOptions;
    };
  }
}