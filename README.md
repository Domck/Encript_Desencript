# Aplicación Web de Encriptación y Desencriptación

Esta aplicación web permite la **encriptación** y **desencriptación** de texto de manera segura y eficiente. Desarrollada en **TypeScript**, utiliza algoritmos avanzados para garantizar la privacidad y seguridad de los datos procesados.

## **Características**

- **Encriptación AES**: Implementación del algoritmo AES (Advanced Encryption Standard) para proteger datos sensibles.
- **Desencriptación**: Permite recuperar datos cifrados a su forma original, siempre que se utilicen las claves correctas.
- **Compatibilidad de caracteres**: Soporte completo para caracteres alfanuméricos y especiales.
- **Entrada dinámica de claves**: El usuario proporciona una clave y un salt para realizar las operaciones, garantizando flexibilidad y seguridad.
- **Interfaz responsiva**: Diseñada para adaptarse tanto a dispositivos móviles como a pantallas de escritorio.

## **Tecnologías Utilizadas**

- **Frontend**:
  - **TypeScript**: Lenguaje principal para la lógica de la aplicación.
  - **Angular**: Framework utilizado para la gestión de componentes y vistas.
  - **Bootstrap**: Para un diseño moderno y responsivo.
- **Librerías**:
  - `CryptoJS`: Para la encriptación y desencriptación.

## **Cómo Funciona**

1. El usuario ingresa un texto, una clave y un salt en el formulario.
2. **Encriptación**:
   - El sistema utiliza la clave y el salt para cifrar el texto con AES.
3. **Desencriptación**:
   - El texto cifrado puede descifrarse utilizando la misma clave y salt originales.
4. Los resultados se muestran instantáneamente en pantalla.

## **Requisitos**

- **Node.js** (versión 14 o superior).
- Angular CLI instalado:
  ```bash
  npm install -g @angular/cli
![image](https://github.com/user-attachments/assets/d91fb494-06f2-445c-bc64-849e2685425e)
