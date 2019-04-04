## Configurar ambiente Windows para android

1. Configurar variável de ambiente do windows com JAVA_HOME e passar o caminho da versão do JDK instalada na máquina. 
2. Download do Android Studio
3. Adicionar a variável ANDROID_HOME nas variáveis de ambiente do windows
4. Editar o path adicionando os seguintes comandos:
    ```
        %$ANDROID_HOME%\emulator
        %$ANDROID_HOME%\tools
        %$ANDROID_HOME%\tools/bin
        %$ANDROID_HOME%\platform-tools
    ```

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