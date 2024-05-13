function Subject(props) {
    return (
      <body>
          <header>
            <h1><a href = "pure.html"
            onClick = {function(e){
              e.preventDefault();
              console.log("Clicked")
              props.setMode("welcome")
            }}
            >{props.title}</a></h1>
            {props.subTitle}
            <button onClick = {props.onClick}>OK</button>
          </header>
      </body>
    );
  }

  export default Subject;