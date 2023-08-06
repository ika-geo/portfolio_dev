const languages:{lang:string, step:string}[] = [
    {lang:"english", step:"advanced"},
    {lang:"russian", step:"fluent"},
    {lang:"georgian", step:"native"},
]

const Languages = () => {
    return (
        <>
            <div className="languages">

                <h2 className="subtitle">Languages</h2>

                <div className="languages__block">

                    {languages.map(item=>
                        <div className={item.lang}>
                            <p className="text">{item.lang}</p>
                            <div className={`languageBar ${item.lang}__bar`} title={item.step}>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Languages;