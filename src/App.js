import React from "react";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";


export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink to="/zadania">
                        Zadania
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/autor">
                        O autorze
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania"></Redirect>
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);
