import React, {useState, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {counterState, counterActions} from "@/store/slices/counterSlice";

import "./App.scss";

const App: React.FC = () => {
    // Use the typed version create in hooks.ts
    const dispatch = useAppDispatch();
    const counterStep = useAppSelector(counterState.Step);
    const counterValue = useAppSelector(counterState.Value);

    const changeCounterStep = (value: number) => {
        dispatch(counterActions.changeStep(value));
    };

    const [boredActivity, setBoredActivity] = useState("En attente d'une activité à faire à 2...");

    useEffect(()  => {
        const boredApiUrl = import.meta.env.VITE_BORED_API_URL;
        const searchActivity = async () => {
            const response = await (await fetch(boredApiUrl)).json()
            setBoredActivity(response.activity);
        }
        searchActivity()

      }, []);

    return (
        <div className="starter">
            <div className="starter-presentation">
                <p className="title">
                    Starter rapide pour un nouveau projet
                </p>
                <p className="description">
                    Ce starter contient une configuration précise et complète
                    pour :
                </p>
                <ul className="starter-features-list">
                    <li>
                        Le bundler Vite, rapide et puissant
                    </li>
                    <li>
                        React, utilisé avec son gestionnaire de state
                        React-Redux-Toolkit
                    </li>
                    <li>
                        React Refresh, permettant de recharger sans perdre les
                        infos du state
                    </li>
                    <li>
                        Typescript pour améliorer la qualité du code et être
                        vigilant sur les erreurs
                    </li>
                    <li>
                        EsLint pour repérer toutes erreurs allant à l'encontre
                        des règle de clean code
                    </li>
                    <li>
                        Configuration de test complète avec l'utilisation de
                        vitest, jsdom et React-Testing-Library
                    </li>
                    <li>
                        SCSS pour écrire son style plus logiquement qu'avec du
                        CSS classique
                    </li>
                    <li>
                        Des alias pour l'importation plus facile
                    </li>
                    <li>
                        Des scripts npm pratiques pour automatiser certaines
                        tâches
                    </li>
                    <li>
                        Une configuration adaptée pour tester plus simplement le
                        store avec Redux
                    </li>
                    <li>
                        Préparation à l'utilisation d'assets et d'utilities déjà
                        implémenté
                    </li>
                </ul>
            </div>
            <div className="starter-demonstration">
                <div className="form-change-number-step">
                    <label htmlFor="changeStepNumber">
                        Changer le pas du compteur
                    </label>
                    <input
                        id="changeStepNumber"
                        type="number"
                        value={counterStep}
                        onChange={(event) => {
                            changeCounterStep(parseInt(event.target.value));
                        }}
                    />
                </div>
                <div className="counter-click">
                    <button
                        className="counter-button"
                        onClick={() => dispatch(counterActions.decrement())}
                    >
                        -
                    </button>
                    <p className="counter-value">
                        {counterValue}
                    </p>
                    <button
                        className="counter-button"
                        onClick={() => dispatch(counterActions.increment())}
                    >
                        +
                    </button>
                </div>
            </div>
            <p>{boredActivity}</p>
        </div>
    );
};

export default App;
