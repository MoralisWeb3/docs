import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { webVitals } from './vitals';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    contentLoaded() {
        const {options} = usePluginData('vercel-vitals');

        if (!options.analyticsId) return;

        webVitals({ options });
    },
  };
})();