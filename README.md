## Configurar ambiente Windows para android

1. Configurar variável de ambiente do windows com JAVA_HOME e passar o caminho da versão do JDK instalada na máquina. 
2. Download do Android Studio
3. Adicionar a variável ANDROID_HOME nas variáveis de ambiente do windows
4. Editar o path adicionando os seguintes comandos:
    4.1 %$ANDROID_HOME%\emulator
    4.2 %$ANDROID_HOME%\tools
    4.3 %$ANDROID_HOME%\tools/bin
    4.4 %$ANDROID_HOME%\platform-tools

5. Executar o comando da licença: sdkmanager —licenses e dar yes pra tudo

Comandos para testar:
$ avd —version
$ emulator -version

Listar emuladores:
$ emulator -list-avds

Executar o emulador:
$ emulator -no-snapshot -avd Nexus_5X_API_28_x86


Run App Android: react-native run-android
Run App IOS: react-native run-ios
Start Emulator: emulator -avd Nexus_5X_API_28_x86