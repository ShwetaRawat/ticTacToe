
//this was created later to pass data through props
// function Square()
// {
//     //but this gives all 9 same value i.e. 1 , to fix this we'll use props to pass the value each square must have
//     //from the parent component (Board)  to it's child (Sqaure)
//     return <button className="square">1</button>
// }
//updated sqaure that takes a value form the parent to display inside the sqare
//it means Sqaure component can be passed a prop called value
function Square({value})
{
    //3.4 to make interative component
function handleClick()
{
    console.log('clicked!');
}

    //but this gives all 9 same value i.e. 1 , to fix this we'll use props to pass the value each square must have
    //from the parent component (Board)  to it's child (Sqaure)
    //---- return <button className="square">value</button>****but this will give value written in the boxes
    //this isn't what we want 
    //to escape into JS from JSX use curly braces
    // return <button className="square">{value}</button>

    //3.4adding on click to the props
    return (
    <button 
    className="square" 
    onClick={handleClick}
    >
        {value}
    </button>
    );
}


// This code is creating a component(a reusable code taht represents part of ui)
// Componets are used to render, manage and update the ui ele of our app


//this line defines a fucntion called Square
//export keyword of JS makes this accessible outside this file
//default keyword tells other files using this code that Square is the main fucntion of my file
// export default function Square() {
export default function Board() {
    //this line returns a button(whatever comes after return is returned as a value to caller of fucntion)
    //<button> is a jsx element (combo of js code and html tags-->describes what we'd like to display)
    //className is button property telling css how to display button
    // </button> closses jsx ele
    //we want 9 squares, but following will give error, as react component needs to return a single jsx ele
    //adjacent jsx elements must be wrapped in an enclosing tag, JSX fragment <> ....</>
    //return <button className="square">X</button><button className="square">X</button>; ************WRONG*******
    return (
    <>
    {/* but all these are in single line, not in a grid */}
    {/* <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button> */}

    {/* but now the problem is component named square isn't really a square anyomre */}
    <div className="board-row">
        {/* <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button> */}
        {/* <Square/>
        <Square/>
        <Square/> */}
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
        
    </div>
    <div className="board-row">
        {/* <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button> */}
         {/* <Square/>
        <Square/>
        <Square/> */}
         <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
    </div>
    <div className="board-row">
        {/* <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button> */}
         {/* <Square/>
        <Square/>
        <Square/> */}
         <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
        
    </div>
    </>
    );
    
    
  }
//   You have to save the program to run it succesfully
//white dot mean not saved


// Passing data through props, we don't want to copy it 9 times, we want to create a componet sucn that we can just write coponents name
//own component must start with capital ltters-->Board, Sqaure

  