export function Card(props){
return(
<div style={{display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"100vh",
    width:"100wh"
}}>
<div style={{backgroundColor:"#f8f9fa",
        borderRadius:"10px",
        boxShadow: "0px 4px 6px rgba(17, 16, 16, 0.3)",
        color:"black",
        padding:"10px",
        margin:"10px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"flex-start",
        textAlign:"left",
        width:"500px",
        height:"400px"

    }} >
    <h1>{props.name}</h1>
    
    <p>{props.description}</p>
    
    <h2>Interests</h2>
    
    <ul>{props.interests.map(function interestSection(hobby,index){
       return <li key={index}>{hobby}</li>
    })}
        
    </ul>
    <div>
    <a href={props.linkedIn} target="_blank" rel="noreferrer">
    <button style={{backgroundColor:"blue",
        borderRadius:"5px",
        color:"white",
        padding:"2px",
        marginRight: "5px",
        cursor: "pointer"



    }}>Linkedin</button>
    </a>
    <a href={props.github} target="_blank" rel="noreferrer">
    <button style={{backgroundColor:"blue",
        borderRadius:"5px",
        color:"white",
        padding:"2px",
        cursor: "pointer"

    }} >GitHub</button>
    </a>
</div>
</div>
</div>
)
}