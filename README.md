# Vending Machine

This is a simple vending machine application, written with JavaScript and React, that allows users to take actions like inserting money, selecting items, taking a refund etc. It also implements a dashboard for visualizing the currenct status of the machine (e.g status of components, energy consumption etc.) and a panel for collecting money and reseting the products for vending machine supplier.

## Demo

You can access the demo website by clicking [here](https://vending-machine-aselsan.netlify.app/).

```
Supplier password: 123
```

Note that supplier login requires a password, and the password is defined in an environment variable. For this demo website, password is set 123 for simplicity reasons.

Altough I know keeping a password in an environment variable is not secure, I did it this way since this is an only frontend project.

## Running the application locally

Firstly, create a .env file in root directory.

```
REACT_APP_WEATHER_API_KEY = <YOUR_API_KEY>
REACT_APP_SUPPLIER_PASSWORD = <YOUR_SUPPLIER_PASSWORD>
```

You can get an API Key by signing up to [Weather API](https://www.weatherapi.com/).
Note that demo application uses a free trial version, it can be expired someday.

You can set any string to supplier password field.

Secondly,

```
npm install

npm start
```

Application should start in localhost:3000 by default.

# Application details

You can find more details about the project in the presentation attached to the mail.
