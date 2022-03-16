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
        <Download src={AppStoreImg} alt="App Store" />
        <Download src={GooglePlayImg} alt="Google Play" />
      </DownloadContainer>      
    </div>
  )
}