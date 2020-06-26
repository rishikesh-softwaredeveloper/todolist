//without binding
import React, { Component } from "react";
class List extends Component {
  state = { id: "", task: "", items: [] };

  onChange = (event) => {
    this.setState({ task: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      task: "",
      items: [...this.state.items, this.state.task],
    });
  };

  onDelete = (val, event) => {
    event.preventDefault();
    var data = [...this.state.items];
    data.filter(function (item, index) {
      if (index === val) {
        data.splice(index, 1);
      }
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="taskName">Task Name</label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              value={this.state.task}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Submit
          </button>
        </form>
        <table className="table mt-3">
          {this.state.items.map((item, index) => (
            <tr>
              <td key={index} className="text-left">
                {item}
              </td>
              <td className="text-right">
                <button
                  href=""
                  className="btn btn-danger"
                  onClick={(e) => this.onDelete(index, e)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default List;
