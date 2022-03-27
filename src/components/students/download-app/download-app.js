import * as React from 'react'
import { DownloadContainer, Download, Text } from './download-app-styles.js';
import AppStoreImg from 'images/download-app-store.png';
import GooglePlayImg from 'images/download-google-play.png';

export const DownloadApp = () => {
  return (
    <div>
      <Text>
        You can download the MWB Connect app using the following links:        
      </Text>
      <DownloadContainer>
        <a href="https://apps.apple.com/us/app/mwb-connect/id1582502052#?platform=iphone" target="_blank">
          <Download src={AppStoreImg} alt="App Store" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.mwbconnect.app" target="_blank">
          <Download src={GooglePlayImg} alt="Google Play" />
        </a>
      </DownloadContainer>      
    </div>
  )
}