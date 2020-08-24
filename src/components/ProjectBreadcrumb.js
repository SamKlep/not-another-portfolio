import React from "react";
import { Link } from "react-router-dom";

const ProjectBreadcrumb = () => {
  return (
    <div>
      <nav
        class='breadcrumb breadcrumb-container has-succeeds-separator'
        aria-label='breadcrumbs'
      >
        <ul>
          <li>
            <Link to='/projectone'>
              <span class='icon is-small'>
                <i class='fas fa-project-diagram' aria-hidden='true'></i>
              </span>
              <span>Project 1</span>
            </Link>
          </li>
          <li>
            <Link to='/projecttwo'>
              <span class='icon is-small'>
                <i class='fas fa-project-diagram' aria-hidden='true'></i>
              </span>
              <span>Project 2</span>
            </Link>
          </li>
          <li>
            <Link to='/projecthree'>
              <span class='icon is-small'>
                <i class='fas fa-project-diagram' aria-hidden='true'></i>
              </span>
              <span>Project 3</span>
            </Link>
          </li>
          <li>
            <Link to='/projectfour'>
              <span class='icon is-small'>
                <i class='fas fa-project-diagram' aria-hidden='true'></i>
              </span>
              <span>Project 4</span>
            </Link>
          </li>
          <li>
            <Link to='/projectfive'>
              <span class='icon is-small'>
                <i class='fas fa-project-diagram' aria-hidden='true'></i>
              </span>
              <span>Project 5</span>
            </Link>
          </li>
          <li>
            <Link to='/projectsix'>
              <span class='icon is-small'>
                <i class='fas fa-project-diagram' aria-hidden='true'></i>
              </span>
              <span>Project 6</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProjectBreadcrumb;
