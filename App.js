import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
  PixelRatio,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/francivaldolima';
const java =
  'http://s2.glbimg.com/DyDQQTZSF1oEiO8kawMIxP72KzQ=/290x417/s.glbimg.com/jo/g1/f/original/2011/08/22/22-java-300.jpg';
// const imageProfileGithub =
// 'https://avatars.githubusercontent.com/u/54116971?v=4';

const App = () => {
  const handlePressGoToGithub = async () => {
    // console.log('verifica link');
    const res = await Linking.canOpenURL(urlToMyGithub);

    if (res) {
      // console.log('link aprovado');
      // console.log('Abrindo link... ');
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Estação fundo cinza"
          style={style.avatar}
          source={require('./assets/icons/foto.jpeg')}
        />
        <Text
          accessibilityLabel="Nome: francivaldo lima"
          style={[style.defaultText, style.name]}>
          Francivaldo Lima
        </Text>
        <Text
          accessibilityLabel="Nickname: francivaldo lima"
          style={[style.defaultText, style.nickname]}>
          francivaldolima
        </Text>
        <Text
          accessibilityLabel="Descrição: Java | React Native | JavaScript"
          style={[style.defaultText, style.description]}>
          {' '}
          Java | React Native | JavaScript | CSS
        </Text>

        <View style={style.containerImage}>
          <Image
            style={style.java}
            source={require('./assets/icons/java.jpeg')}
          />
          <Image
            style={[style.java, style.reactNative]}
            source={require('./assets/icons/react-native.png')}
          />
          <Image
            style={[style.java, style.js]}
            source={require('./assets/icons/js.png')}
          />
          <Image
            style={[style.java, style.css]}
            source={require('./assets/icons/css.png')}
          />
        </View>

        <View style={style.dio}>
          <View style={style.box} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={style.box} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={style.box} />
        </View>
        <View style={style.dio}>
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
        </View>

        <View style={style.dio}>
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
        </View>

        <View style={style.dio}>
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={style.box} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
        </View>

        <View style={style.dio}>
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
        </View>
        <View style={style.dio}>
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box]} />
          <View style={[style.box, style.ballColor]} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={style.box} />
          <View style={[style.box, style.ballColor]} />
          <View style={[style.box, style.ballColor]} />
        </View>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //column
    backgroundColor: colorGitHub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    margin: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  dio: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 25,
    width: 25,
    // borderColor: 'green',
    backgroundColor: 'green',
    // margin: 1,
    borderWidth: 1,
    borderRadius: 20,
  },

  java: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 3,
    margin: 10,
  },
  js: {
    borderColor: 'yellow',
  },
  css: {
    borderColor: 'white',
  },
  reactNative: {
    borderColor: 'deepskyblue',
  },
  containerImage: {
    flexDirection: 'row',
    // margin: 5,
    justifyContent: 'space-between',
  },
  ballColor: {
    backgroundColor: 'lawngreen',
  },
});
