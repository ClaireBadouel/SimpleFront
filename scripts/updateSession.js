import config_URL from './config.js';

function determineSessionStorageIsLessThan1D(selectId, dataEndpoint) {
    const storedData = sessionStorage.getItem(selectId);
    const storedTimestamp = sessionStorage.getItem(`${selectId}_timestamp`);
    const currentTime = new Date().getTime();
    const dataAge = storedTimestamp
      ? currentTime - parseInt(storedTimestamp)
      : Infinity;
    return Boolean(storedData && dataAge < 24 * 60 * 60 * 1000);
  }
  
  var updateSession = determineSessionStorageIsLessThan1D(
    "talent_status_id",
    config_URL.talent_status
  );
