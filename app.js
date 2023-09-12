const heading = React.createElement('h1',{id :'reat'},'hello React')


const neObject = React.createElement('div',{},React.createElement('div',{},
React.createElement('div',{},[
    React.createElement('h2',{},'heelo dev'),
    React.createElement('h3',{},'btc')
])))




    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(neObject)