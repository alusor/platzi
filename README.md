# Marvel Universe
*Estatus de CloudBuild by AppCenter:*

[![Build status](https://build.appcenter.ms/v0.1/apps/1aa82513-9765-4283-a581-d258bb1719c9/branches/master/badge)](https://appcenter.ms)

[Descarga en Google Play](https://play.google.com/store/apps/details?id=com.alusorstroke.marveluniverse) 

# Ejecutar

	git clone https://github.com/alusor/react-native-marvel-app.git
	cd react-native-marvel-app
	yarn 
	react-native run-android

## Modulos nativos

[react-native-firebase](https://github.com/invertase/react-native-firebase)
> **Nota:** Se utilizo el modulo de cloud messaging para notificaciones push.
> Utilizar este paquete implica actualizar graddle, actualmente hay un bug con gradle-4.4 que trata de convertir los recursos a .flat, es necesario agregar *android.enableAapt2=false* en *app/gradle.properties*
> 
[react-native-fbsdk](https://github.com/facebook/react-native-fbsdk)
> Se integro y configuro para usarse en conjunto del social auth de firebase

[react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## CI (App Center by Microsoft)
- La versión de node instalada en el entorno no es compatible con la ultima versión de React Native 
- Se creo un script post clone para actualizar la versión de node. 
- KeyStore y claves para firmado de release.
- Configuración de acceso al API de google console para la publicación automatica.
- Se publico una primera versión de la app manualmente, posteriormente cada commit creara un build y publicara en release en Google Play

