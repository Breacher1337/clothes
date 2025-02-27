import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Logs an event to Firebase Analytics.
 * @param {string} eventName - The event name.
 * @param {object} params - Optional event parameters.
 */
export const logAnalyticsEvent = (eventName, params) => {
  try {
    if (analytics) {
      logEvent(analytics, eventName, params);
    } else {
      console.warn('Analytics is not initialized.');
    }
  } catch (error) {
    console.error('Error logging analytics event:', error);
  }
};
