const infoTrigger = document.querySelector('#info-trigger');

const titleInput = document.querySelector('#title-input');
const artistInput = document.querySelector('#artist-input');
const albumInput = document.querySelector('#album-input');

infoTrigger.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getTrackInfo,
  });
});

const getTrackInfo = () => {
  const trackInfo = document.querySelector('.videoOsdParentTitle').getInnerHTML();
  const [artist, title] = trackInfo.split(' - ');
  
  alert(artist);
  alert(title);
}