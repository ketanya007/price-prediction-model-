
# Real Estate Model for Price Prediction

Backend of Real Estate model for Price Prediction.


## API Reference

#### Hosted Backend Base URL

```bash
  https://realestate-minor-project.glitch.me
```

#### Get all Available Houses

```bash
  GET https://realestate-minor-project.glitch.me/house/availableHouses
```

#### Add a House

```bash
  POST https://realestate-minor-project.glitch.me/house/availableHouses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. The user's ID who added this house |
| `area`      | `number` | **Required**. Area of the house |
| `city`      | `number` |  **Required** The value is between 0 and 5 (both inclusive), for reference please check values.js in frontend |
| `location`      | `number` | **Required** The value is between 0 and 1775 (both inclusive), for reference please check values.js in frontend |
| `wantedPrice`      | `number` | **Required**. The price that owner wants. |
| `predictedPrice`      | `number` | **Required**. The price that model predicted for this house. |

#### Login User

```bash
  POST https://realestate-minor-project.glitch.me/auth/login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Email Id of the user. |
| `userPassword`      | `string` | **Required**. Password of the user. |

#### Signup User

```bash
  POST https://realestate-minor-project.glitch.me/auth/signup
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Email Id of the user. |
| `userPassword`      | `string` | **Required**. Password of the user. |
| `userName`      | `string` | **Required**. Name of the user. |
| `userAge`      | `number` | **Required**. Age of the user. |



#### Predict the price of a House

```bash
  POST https://realestate-minor-project.glitch.me/prediction/predict
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `area`      | `number` | **Required**. Area of the house |
| `city`      | `number` | The value is between 0 and 5 (both inclusive), for reference please check values.js in frontend |
| `location`      | `number` | The value is between 0 and 1775 (both inclusive), for reference please check values.js in frontend |

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Server:** Node, Express

**Database:** MongoDB


