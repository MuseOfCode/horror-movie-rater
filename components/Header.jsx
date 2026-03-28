export default function Header(){
    return ( 
        <header style={style.header}>

            <h1 style={style.title}>FRIGHTLY</h1>
            <br></br>
            <p style={style.subtitle}>Track and give your favourite films a scarescore</p>
        </header>
    )
}

const style = {
    header : {
        textAlign: "left",
        padding: "60px 20px 40px",
        borderBottom: "1px solid #2a2a2a"
    },
    title: {
        frontSize: "3rem",
        letterSpacing: "0.05em",
        color: '#cc0000',
        marginBottom: '10px',
    },
    subtitle: {
    color: '#888888',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
}