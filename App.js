import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import SocialMediaView from './components/SocialMediaView';
import SocialStatsView from './components/SocialStatsView';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://yt3.ggpht.com/1CVmfmoScHzpnTQejyObxOG9_j-furmBG_4SZF06_2IB1a05DvkPOBRSvslO3cEg3zFLRqca1Y8=s176-c-k-c0x00ffffff-no-rj-mo',
          }}
        />
      </View>

      <View style={styles.socialStatsContainer}>
        <SocialStatsView text={'Followers'} stats={'123'} />
        <SocialStatsView text={'Likes'} stats={'546'} />
        <SocialStatsView text={'Following'} stats={'789'} />
      </View>

      <SocialMediaView
        icon={
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Finstagram%2Finstagram_PNG10.png&f=1&nofb=1'
        }
        name={'Instagram'}
      />

      <SocialMediaView
        icon={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F05%2FFacebook_Logo_(2019).png&f=1&nofb=1'
        }
        name={'Facebook'}
      />

      <SocialMediaView
        icon={
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-NxouMmz2bOY%2FT8_ac97cesI%2FAAAAAAAAGg0%2Fe3vY1_bdnbE%2Fs1600%2FTwitter%2Blogo%2B2012.png&f=1&nofb=1'
        }
        name={'Twitter'}
      />

      <SocialMediaView
        icon={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsguru.org%2Fwp-content%2Fuploads%2F2018%2F02%2Fsnapchat-logo-transparent.png&f=1&nofb=1'
        }
        name={'Snapchat'}
      />

      <SocialMediaView
        icon={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2015%2F04%2Fwhatsapp-logo-1.png&f=1&nofb=1'
        }
        name={'WhatsApp'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f3f6f4',
  },
  profileImageContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  socialStatsContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
