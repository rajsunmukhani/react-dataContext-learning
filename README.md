High order functions or High order components:

HOF are the functions that basically take in the parameters as a function or return a function.
Similarly, HOC are the components that take in the components as a parameter or return a component.

Any data inside the opening and closing tags are known as childerens props, and to be used as props only, while any data passed in as an atrribute in tag is made to be get with the name of the atribute.

Step 1: Create a folder named context in src folder and create a file named DataContext in that, and use rafce in it.

Step 2: Replace : 
                    ReactDOM.createRoot(document.getElementById('root')).render(
                        <React.StrictMode>
                            <App />
                        </React.StrictMode>,
                    )

        With : 
                    ReactDOM.createRoot(document.getElementById('root')).render(<DataContext />);

Step 3: Update above step and pass data in the params as :
        ReactDOM.createRoot(document.getElementById('root')).render(<DataContext info="data ka data" />);

        and, in DataContex.jsx pass params as props and log props

        You will get the data in info named prop on console, this is how we make the use of props in it.

Step 4: Now instaed of DataContext made as self closing tags in main.jsx, create it as opening and closing tag, and pass data in <h1> under it. 

        Now, you will see that while making log in DataContext of props, there will be a new object attribute added named childeren as:

        main.jsx:

        ReactDOM.createRoot(document.getElementById('root')).render(<DataContext info="data ka data">
            <h1>hello</h1>
        </DataContext>);

Hence we know that anything written under opening and closing tags comes with the name childeren in props.

NOTE: The component in main.jsx named DataContext is actually a higher order component, as we can also pass a component in it as : 

        ReactDOM.createRoot(document.getElementById('root')).render(
        <DataContext info="data ka data">
        <App />
        </DataContext>);
