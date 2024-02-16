In this project let's build a **NewsPaper Web App** by applying the concepts we have learned till now. This project allows me to practice the concepts and techniques learned till React Course and apply them in a concrete project.

## Available Scripts

In the project directory, you have to run after clone from github:

### `cd newspaperwebapp`

To change directory to newspaperwebapp

### `npm install`

To install respective dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Set Up Instructions

<details>

<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Completion Instructions

<details>

<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Home Route**

    - An HTTP GET request should be made to **Top Headlines** 

    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the list of top rated books received from the response
    - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
    - When the **Try Again** button is clicked, an HTTP GET request should be made to **Top Headlines**

- **Header**  
    
  - When the **logo** in the header is clicked, then the page should be navigated to the Home Route
  - When the **Home** link in the header is clicked, then the page should be navigated to the Home Route
  - When the **Business** link in the header is clicked, then the page should be navigated to the Business Route
  - When the **Entertainment** button in the header is clicked, then the page should be navigated to the Entertainment Route
  - When the **General** button in the header is clicked, then the page should be navigated to the General Route
  - When the **Health** button in the header is clicked, then the page should be navigated to the Health Route
  - When the **Science** button in the header is clicked, then the page should be navigated to the Science Route
  - When the **Sports** button in the header is clicked, then the page should be navigated to the Sports Route
  - When the **Technology** button in the header is clicked, then the page should be navigated to the Technology Route

- **Business Route**

    - An HTTP GET request should be made to **Business** 

    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the list of top rated books received from the response
    - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
    - When the **Try Again** button is clicked, an HTTP GET request should be made to **Business**

- **Entertainment Route**

    - An HTTP GET request should be made to **Entertainment** 

    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the list of top rated books received from the response
    - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
    - When the **Try Again** button is clicked, an HTTP GET request should be made to **Entertainment**

- **General Route**

  - An HTTP GET request should be made to **General** 

  - **_Loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the list of top rated books received from the response
  - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
  - When the **Try Again** button is clicked, an HTTP GET request should be made to **General**

- **Health Route**

  - An HTTP GET request should be made to **Health** 

  - **_Loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the list of top rated books received from the response
  - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
  - When the **Try Again** button is clicked, an HTTP GET request should be made to **Health**

- **Science Route**

  - An HTTP GET request should be made to **Science** 

  - **_Loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the list of top rated books received from the response
  - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
  - When the **Try Again** button is clicked, an HTTP GET request should be made to **Science**

- **Sports Route**

  - An HTTP GET request should be made to **Sports** 

  - **_Loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the list of top rated books received from the response
  - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
  - When the **Try Again** button is clicked, an HTTP GET request should be made to **Sports**

- **Technology Route**

  - An HTTP GET request should be made to **Technology** 

  - **_Loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the list of top rated books received from the response
  - If the HTTP GET request made is unsuccessful, then the failure view screens should be displayed
  - When the **Try Again** button is clicked, an HTTP GET request should be made to **Technology**

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>


- **Top Headlines API**

    #### URL: `https://api.npoint.io/d0e7242c16c74e0965ee`

    #### Method: `GET`

- **Business API**

    #### URL: `https://api.npoint.io/c252f78532a7d1929422`

    #### Method: `GET`

- **Entertainment API**

    #### URL: `https://api.npoint.io/0c73af7bd958f0bfa1d4`

    #### Method: `GET`

- **General API**

    #### URL: `https://api.npoint.io/acca96cf590df2574858`

    #### Method: `GET`

- **Health API**

    #### URL: `https://api.npoint.io/3b48dbd0a1bd82be029e`

    #### Method: `GET`

- **Science API**

    #### URL: `https://api.npoint.io/59b5932957a838e64013`

    #### Method: `GET`

- **Sports API**

    #### URL: `https://api.npoint.io/aab6bd396f5fa431f793`

    #### Method: `GET`

- **Technology API**

    #### URL: `https://api.npoint.io/f6ecf8cce2024c95677e`

    #### Method: `GET`


</details>