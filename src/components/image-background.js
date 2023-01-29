

export default function ImageBackground({image}) {


    const style = {
        backgroundColor: 'red',
        height: '100vh',
        width: '100%',
        zIndex:'-10',
        position: 'absolute',

        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',


    };





    return (<div style={style}>

    </div>);
};
