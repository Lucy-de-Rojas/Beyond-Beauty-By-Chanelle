


export default function Header1({text, color}) {





    return (<div style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '0 20px',
        textAlign: 'center',
        marginTop: '50px',
    }}>



        <h1
        style={{
            fontFamily: 'mainThick',
            color:color,

                    }}>{text}</h1>
    </div>);

};
