import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import { webVitals } from './vitals';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  webVitals(false);

})();