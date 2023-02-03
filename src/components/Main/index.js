import './main.scss';

function Main({name,job,maintenance,profil}) {
    return (
        <main>
            <img src={profil} alt={name}/>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <h3>{maintenance}</h3>
        </main>
    )
}

export default Main;