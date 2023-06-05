/**
 * Get the selectId element in the session storage has been updated in the last 
 * 24 hours.
 * @param  {String} selectId id used for the select button in the HTML
 */

function determineSessionStorageIsLessThan1D(selectId) {
    const storedData = sessionStorage.getItem(selectId);
    const storedTimestamp = sessionStorage.getItem(`${selectId}_timestamp`);
    const currentTime = new Date().getTime();
    const dataAge = storedTimestamp
      ? currentTime - parseInt(storedTimestamp)
      : Infinity;
    return Boolean(storedData && dataAge < 24 * 60 * 60 * 1000);
  }
  
  // Run the check for one endpoint as they are updated simultaneously 
  var updateSession = determineSessionStorageIsLessThan1D(
    "talent_status_id",
    "http//localhost:3000/palm/api/v1/talent_status/"
  );
