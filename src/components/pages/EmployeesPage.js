import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { employeesSelector } from "../../reducers/employees";
import "../../css/test.css";

const EmployeesPage = ({ employees }) => {
  const products = [
    {
      id: 1,
      first_name: "Alihan",
      last_name: "Øztürk",
      email: "aliozturk@outlook.dk",
      phone_number: "25770042",
      group: 1,
      template: 1
    },
    {
      id: 2,
      first_name: "Nicklas",
      last_name: "Stiborg",
      email: "Nicklas@amici.dk",
      phone_number: "34825712",
      group: 2,
      template: 1
    }
  ];
  const columns = [
    {
      dataField: "id",
      text: "User ID"
    },
    {
      dataField: "first_name",
      text: "First Name"
    },
    {
      dataField: "last_name",
      text: "Last Name"
    },
    {
      dataField: "email",
      text: "Email"
    },
    {
      dataField: "phone_number",
      text: "Phone Number"
    },
    {
      dataField: "group",
      text: "Group",
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: "1",
            label: "1"
          },
          {
            value: "2",
            label: "2"
          },
          {
            value: "3",
            label: "3"
          }
        ]
      }
    },
    {
      dataField: "template",
      text: "Template",
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: "1",
            label: "1"
          },
          {
            value: "2",
            label: "2"
          },
          {
            value: "3",
            label: "3"
          }
        ]
      }
    }
  ];

  return (
    <>
      <div>
        {employees.length === 0 && (
          <div className="text-center alert alert-info">
            You do not have any employees yet. How about creating one?
          </div>
        )}
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        />
        <form className="form-inline d-flex justify-content-center md-form">
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </>
  );
};

EmployeesPage.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    employees: employeesSelector(state)
  };
}

export default connect(mapStateToProps)(EmployeesPage);
