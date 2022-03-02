

//Declarative way to program 


// varibale declaration:

const page=( 
   <div>
        <h1 className="header">This is JSX</h1>
        <p>This is paragraph</p>
    </div>
        )
        console.log(page)

    ReactDOM.render(
        page,
         document.getElementById("root")
    )


// ReactDOM.render(
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is paragraph</p>
//     </div>,
//     document.getElementById("root")
// )





// ReactDOM.render(<h1> Hi my name is shiv!!</h1>,document.getElementById("root"))
ReactDOM.render(
    <ul>
        <li>Apple</li>
        <li>Orange</li>
    </ul>
    ,document.getElementById("Root")
)




// challenge -1 - imperative way to program /code 

// - create a new h1 element
const h1=document.createElement("h1")
// - give it some textcontent
h1.textContent="This is an imperative way to program "
// - give it class name "header"
h1.className="header"
//  -append it as a child of the div#root (append to dom)
document.getElementById("root").append(h1)


//challenge -2 
// create nav element

const navbar=(
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
)
ReactDOM.render(navbar,document.getElementById("ROOT"))