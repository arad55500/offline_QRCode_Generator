# QR Code Generator

An Electron app to generate QR codes from user-inputted URLs.

## Features

- **Simple Interface:** Easily generate QR codes in seconds.
- **Save Anywhere:** Choose where you want to save the generated QR code image.
- **Quick Feedback:** Get notified when the image is generated and saved.

## Installation and Setup

### Install & Run with one ommand
```bash

git clone https://github.com/arad55500/offline_QRCode_Generator.git
cd qr-code-generator
./launch.sh

```

### Run in Development Mode

#### Prerequisites

- [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

#### Clone the Repository

```bash

git clone https://github.com/arad55500/offline_QRCode_Generator.git
cd qr-code-generator

```

#### Install Dependencies

```bash

npm install

```

#### Run the App

```bash

electron main.js

```

### Usage

1. Enter the desired URL into the text field.
2. Click on "Submit".
3. Choose a location to save the generated QR code.
4. View the generated QR code at your saved location.

### Built With

- [Electron](https://www.electronjs.org/) - Cross-platform framework
- [qr-image](https://www.npmjs.com/package/qr-image) - QR image generation
- [inquirer](https://www.npmjs.com/package/inquirer) - For CLI interactions

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Author

**Arad Okanin**

- Website: [aradokanin.com](https://www.aradokanin.com)
- GitHub: [@arad55500](https://github.com/arad55500)
