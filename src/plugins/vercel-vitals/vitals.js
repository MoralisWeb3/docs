import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed() {
  return "connection" in navigator &&
    navigator["connection"] &&
    "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"]
    : "";
}

function sendToAnalytics(metric, debug) {
  const analyticsId = "tQd3PWp3ygJhfBt5BF0DyphJzVr";

  if (!analyticsId) {
    return;
  }

  const body = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (debug) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob([new URLSearchParams(body).toString()], {
    // This content type is necessary for `sendBeacon`
    type: "application/x-www-form-urlencoded",
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

export function webVitals(debug) {
  try {
    getFID((metric) => sendToAnalytics(metric, debug));
    getTTFB((metric) => sendToAnalytics(metric, debug));
    getLCP((metric) => sendToAnalytics(metric, debug));
    getCLS((metric) => sendToAnalytics(metric, debug));
    getFCP((metric) => sendToAnalytics(metric, debug));
  } catch (err) {
    console.error("[Analytics]", err);
  }
}
