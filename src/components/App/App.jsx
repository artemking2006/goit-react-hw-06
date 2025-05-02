import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import s from "./App.module.css";

const App = () => {
    return (
        <ul className={s.list}>
            <li className={s.itemSide}>
                <h1 className={s.title}>Phonebook</h1>
                <ContactForm />
                <SearchBox />
            </li>
            <li className={s.itemCenter}>
                <ContactList />
            </li>
        </ul>
    );
};

export default App;