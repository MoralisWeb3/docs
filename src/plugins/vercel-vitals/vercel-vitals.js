import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

if (ExecutionEnvironment.canUseDOM) {
    reportWebVitals(sendToVercelAnalytics);
}