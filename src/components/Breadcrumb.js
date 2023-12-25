import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { CATEGORIES } from "../data";
import { NavLink } from "react-router-dom";

const categories = CATEGORIES;

const DynamicUserBreadcrumb = ({ match }) => (
    <span>{categories[match.params.name]}</span>
);
const routes = [
    { path: "/:name", breadcrumb: DynamicUserBreadcrumb },

];
export const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <React.Fragment>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink key={match.pathname} to={match.pathname}>
                    {breadcrumb}
                </NavLink>
            ))}
        </React.Fragment>
    );
};