# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
Maps Javascript API
PLACES API
GEOLOCAL API
sentazione del progetto di Single page aplication di un calendario che aiuta i dipendenti di un’ azienda   a darsi appuntamento per. Pranzo .
L applicazione tenterà do esseri responsive e seguire l orientamento dello schermo.
La pagina principale avrà un header un menu un logo al centro della pagina e un footer.
Il menu avrà 5 voci log in, sign in, home,  chi siamo  ,contatti
Chi siamo e contatti sono riferiti all azienda sviluppatrice l applicazione che aiuta nella risoluzione di eventuali problemi. 

La pagina calendario avrà un   header, un menu, il calendario un footer
Il menu avrà 5 voci : logout, profilo, home about e contatti
Il footer sarà uguale per tutti 
La pagina profilo avrà 2 layout diversi a seconda se l utente sarà utente o utente azienda. Nel caso del profilo utente il core della pagina sarà una foto il nome il cognome e l email utente poi ci sarà un rimando ad una lista amici ed un rimando ad sistema di inviti e di prenotazioni di ristoranti nelle vicinanze.
Invece nella pagine azienda ci sarà il nome dell’ azienda una mappa di dov’ è l’ azienda e dei grafici sul gradimento dei ristoranti nei dintorni dell’ azienda per stipularci delle convenzioni.
Il calendario il cui codice è stato preso da sandbox avra 2 visualizzazioni l iniziale a riquadri dove all interno ci saranno i giorni della settimana l altra una volta cliccato il giorno della settimana visualizzerà una lista di orari dalle 0 alle 24 con il giorno su cui hai cliccato che ha uno slot pieno pieno dalle 13 alle 14 con scritto che hai un appuntamento e con chi hai l appuntamento .  
Parte tecnica 
Entrando nel tecnico si userà come linguaggi di programmazione python con pandas e matplotlib per disegnare i grafici, react.js, css, html e js e poco mysql.
Parlando di back end ho scelto di usare mysql tenendo in considerazione di fare 2 tabelle utente(una user e  userg) e una tabella aziende dove si fa vedere la ragione sociale dell azienda e le credenziali user dell azienda saranno nome azienda email e password.
Ho scielto di usare pandas per l inserimento nelle tabelle insieme ad sql in quanto i data frame sono piu gestibili secondo me e poi ai data frame si può passare direttamente il file .json che serve a riempire le tabelle del data base direttamente da front end senza usare eccessivamente l sql nei file di connessione e poi si possono fare le statistiche.
In quanto alla tabelle ristorante e ristoindirizzo saranno create tramite dataframe  che verrà riempito dai risultati del gps che andrà ad intercettare i ristoranti vicini all’ azienda.
Ci sara poi la tabella intolleranze.
Conclusioni 
Ci saranno molti errori perché non li riuscirò a correggere in tempo  


 
![image](https://user-images.githubusercontent.com/56676692/140308038-ed1170bb-619c-4ffa-b863-80bd6b59180c.png)
