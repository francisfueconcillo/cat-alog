import React, { useEffect } from 'react';
import { ReportHandler, getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function PerformanceMetrics() {
  useEffect(() => {
    const reportToAnalytics: ReportHandler = (metric) => {
      console.log('Metric:: ', metric.name, " -> ", metric.value);
      // Send the metric data to analytics or your preferred monitoring service
    };

    getCLS(reportToAnalytics);
    getFID(reportToAnalytics);
    getLCP(reportToAnalytics);
    getFCP(reportToAnalytics);
    getTTFB(reportToAnalytics);
  }, []);

  return <div>Open Browser Console to view the Performance Metrics.</div>;
};

export default PerformanceMetrics;
